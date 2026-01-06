/* eslint-disable react-hooks/set-state-in-effect */
/* EmployeeForm for create and edit the employee data */ 
import { useEffect, useState } from "react";
import "../../assets/employeeForm.css";

const EmployeeForm = ({ onSubmit, editEmployee, onError }) => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    gender: "",
    state: "",
    dob: "",
    active: true,
    profileImage: null,
  });

  const [preview, setPreview] = useState(null);
  // FILL FORM IF editEmployee is passed
  useEffect(() => {
    if (editEmployee) {
      setForm(editEmployee);
      setPreview(editEmployee.profileImage || null);
    }
  }, [editEmployee]);
  // HANDLE INPUT CHANGES
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      const file = files[0];
      setForm({ ...form, profileImage: file });
      setPreview(URL.createObjectURL(file));
    } else if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };
  // SUBMIT FORM
  const submit = () => {
    if (!form.name || !form.gender || !form.dob || !form.state || !preview) {
      onError("Please fill all required fields");
      return;
    }

    onSubmit({
      ...form,
      id: editEmployee ? form.id : Date.now(),
      profileImage: preview,
    });

    // Reset form
    setForm({
      id: null,
      name: "",
      gender: "",
      state: "",
      dob: "",
      active: true,
      profileImage: null,
    });
    setPreview(null);
  };
// RENDER FORM
  return (
    <div className="card p-4 border rounded mb-4">
      <h3 className="text-xl font-bold mb-2">
        {editEmployee ? "Edit Employee" : "Add Employee"}
      </h3>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="border p-1 mb-2 w-full"
      />

      <select
        name="gender"
        value={form.gender}
        onChange={handleChange}
        className="border p-1 mb-2 w-full"
      >
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <input
        type="date"
        name="dob"
        value={form.dob}
        onChange={handleChange}
        className="border p-1 mb-2 w-full"
      />

      <input
        type="text"
        name="state"
        placeholder="State"
        value={form.state}
        onChange={handleChange}
        className="border p-1 mb-2 w-full"
      />

      <div className="mb-2">
        <label>
          <input
            type="checkbox"
            name="active"
            checked={form.active}
            onChange={handleChange}
            className="mr-2"
          />
          Active
        </label>
      </div>

      <div className="mb-2">
        <input type="file" onChange={handleChange} />
        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-16 h-16 rounded-full mt-2"
          />
        )}
      </div>

      <button onClick={submit} className="addbutton">
        {editEmployee ? "Update Employee" : "Add Employee"}
      </button>
    </div>
  );
};

export default EmployeeForm;
