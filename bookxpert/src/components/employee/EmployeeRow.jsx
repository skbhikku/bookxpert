// EmployeeRow.jsx for displaying individual employee details in a table row
const EmployeeRow = ({ employee, index, onEdit, onDelete, onToggle }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{employee.id}</td>
      <td>
        {employee.profileImage ? (
          <img src={employee.profileImage} alt="profile" />
        ) : "N/A"}
      </td>
      <td>{employee.name}</td>
      <td>{employee.gender}</td>
      <td>{employee.dob}</td>
      <td>{employee.state}</td>
      <td>
        <button
          className={`status-button ${employee.active ? "active" : "inactive"}`}
          onClick={() => onToggle(employee.id)}
        >
          {employee.active ? "Active" : "Inactive"}
        </button>
      </td>
      <td className="no-print">
        <button className="action-button edit no-print" onClick={() => onEdit(employee)}>
          Edit
        </button>
        <button className="action-button delete no-print" onClick={() => onDelete(employee.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default EmployeeRow;
