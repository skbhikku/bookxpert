import { useState } from "react";
import EmployeeRow from "./EmployeeRow";
// EMPLOYEE LIST COMPONENT
const EmployeeList = ({ employees, onEdit, onDelete, onToggle }) => {
  // SEARCH input state
  const [searchInput, setSearchInput] = useState("");

  // FILTER inputs
  const [genderInput, setGenderInput] = useState("");
  const [statusInput, setStatusInput] = useState("");

  // Applied filters
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  // APPLY FILTER
  const applyFilter = () => {
    setGender(genderInput);
    setStatus(statusInput);
    setGenderInput("");
    setStatusInput("");
  };

  // REMOVE FILTER
  const removeFilter = () => {
    setGender("");
    setStatus("");
  };

  // PRINT / PDF
  const handlePrint = () => {
    window.print();
  };

  const showApplyButton = genderInput || statusInput;
  const showRemoveButton = gender || status;
  // FILTERED EMPLOYEES
  const filteredEmployees = employees
    .filter(
      (emp) =>
        emp.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        emp.state?.toLowerCase().includes(searchInput.toLowerCase()) ||
        emp.id.toString().includes(searchInput)
    )
    .filter((emp) => (gender ? emp.gender === gender : true))
    .filter((emp) =>
      status === ""
        ? true
        : status === "Active"
        ? emp.active
        : !emp.active
    );
  // RENDER
  return (
    <div>
      {/* FILTER CONTROLS (hide in print) */}
      <div className="employee-list-sort no-print">
        <input
          className="search-input"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <select
          className="filter-select"
          value={genderInput}
          onChange={(e) => setGenderInput(e.target.value)}
        >
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <select
          className="filter-select"
          value={statusInput}
          onChange={(e) => setStatusInput(e.target.value)}
        >
          <option value="">Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        {showApplyButton && (
          <button className="filter-button" onClick={applyFilter}>
            Apply Filter
          </button>
        )}

        {showRemoveButton && (
          <button className="filter-button remove" onClick={removeFilter}>
            Remove Filter
          </button>
        )}

        {/* PRINT BUTTON */}
        <button className="filter-button print" onClick={handlePrint}>
          Print / PDF
        </button>
      </div>

      {/* TABLE */}
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Emp ID</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>State</th>
            <th>Status</th>
            <th className="no-print">Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.length ? (
            filteredEmployees.map((emp, index) => (
              <EmployeeRow
                key={emp.id}
                employee={emp}
                index={index}
                onEdit={onEdit}
                onDelete={onDelete}
                onToggle={onToggle}
              />
            ))
          ) : (
            <tr>
              <td colSpan="9" className="no-employees">
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
