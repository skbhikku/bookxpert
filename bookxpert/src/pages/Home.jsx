/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
// Home page showing employee stats
const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(data);
  }, []);

  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(emp => emp.active).length;
  const inactiveEmployees = totalEmployees - activeEmployees;

  return (
    <div className="page">
  <h1>Welcome to Employee Management System</h1>
  <p>Manage your employees efficiently, view stats, and update details easily.</p>

  <div className="grid">
    <div className="card bg-blue">
      <h3>Total Employees</h3>
      <p>{totalEmployees}</p>
    </div>
    <div className="card bg-green">
      <h3>Active Employees</h3>
      <p>{activeEmployees}</p>
    </div>
    <div className="card bg-red">
      <h3>Inactive Employees</h3>
      <p>{inactiveEmployees}</p>
    </div>
  </div>

  {/* <div className="illustration">
    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="employee illustration" />
    <p className="illustration-text">
      Use the navigation above to add, edit, or view employees.
    </p>
  </div> */}
</div>

  );
};

export default Home;
