/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import EmployeeForm from "../components/employee/EmployeeForm";
import EmployeeList from "../components/employee/EmployeeList";
import Popup from "../components/common/PopupModal";
// Employee Management Pages
const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [popup, setPopup] = useState({
    open: false,
    title: "",
    message: "",
  });

  const [confirmPopup, setConfirmPopup] = useState({
    open: false,
    idToDelete: null,
    message: "",
  });
  // LOAD EMPLOYEES FROM LOCAL STORAGE ON COMPONENT MOUNT
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(data);
  }, []);
  // SAVE EMPLOYEES TO LOCAL STORAGE
  const saveEmployees = (data) => {
    setEmployees(data);
    localStorage.setItem("employees", JSON.stringify(data));
  };
  // ADD OR UPDATE EMPLOYEE
  const addOrUpdateEmployee = (emp) => {
    let updated;

    if (editEmployee) {
      updated = employees.map((e) => (e.id === emp.id ? emp : e));
      setEditEmployee(null);
    } else {
      updated = [...employees, emp];
    }

    saveEmployees(updated);
    setModalOpen(false);

    setTimeout(() => {
      setPopup({
        open: true,
        title: "Success",
        message: "Employee saved successfully!",
      });
    }, 50);
  };
  // OPEN EDIT MODAL WITH SELECTED EMPLOYEE DATA
  const handleEdit = (emp) => {
    setEditEmployee(emp);
    setModalOpen(true);
  };
  // TOGGLE ACTIVE / INACTIVE STATUS
  const handleToggleStatus = (id) => {
    setEmployees((prevEmployees) =>
    prevEmployees.map((emp) =>
      emp.id === id
        ? { ...emp, active: !emp.active }
        : emp
      )
    );
  };
  // HANDLE DELETE EMPLOYEE WITH CONFIRMATION
  const handleDelete = (id) => {
    setConfirmPopup({
      open: true,
      idToDelete: id,
      message: "Are you sure you want to delete this employee?",
    });
  };
  // CONFIRM DELETE ACTION
  const confirmDelete = () => {
    const updated = employees.filter(
      (emp) => emp.id !== confirmPopup.idToDelete
    );
    saveEmployees(updated);

    setPopup({
      open: true,
      title: "Deleted",
      message: "Employee deleted successfully!",
    });

    setConfirmPopup({ ...confirmPopup, open: false });
  };

  return (
    <div className="page">
      <h2>Employee Management</h2>

      <button
        className="addbutton"
        onClick={() => {
          setEditEmployee(null);
          setModalOpen(true);
        }}
      >
        Add Employee
      </button>

      <EmployeeList
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggle={handleToggleStatus}
      />

      {/* Employee Form Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="modal-close"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>

            <EmployeeForm
              onSubmit={addOrUpdateEmployee}
              editEmployee={editEmployee}
              onError={(msg) =>
                setPopup({
                  open: true,
                  title: "Validation Error",
                  message: msg,
                })
              }
            />
          </div>
        </div>
      )}

      {/* Success / Error Popup */}
      {popup.open && (
        <Popup
          title={popup.title}
          message={popup.message}
          onClose={() => setPopup({ ...popup, open: false })}
        />
      )}

      {/* Confirm Delete Popup */}
      {confirmPopup.open && (
        <Popup
          title="Confirm Delete"
          message={confirmPopup.message}
          onClose={() => setConfirmPopup({ ...confirmPopup, open: false })}
        >
          <div className="popup-actions">
            <button onClick={confirmDelete} className="delete-btn">
              Yes
            </button>
            <button
              onClick={() => setConfirmPopup({ ...confirmPopup, open: false })}
              className="edit-btn"
            >
              No
            </button>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default Employee;
