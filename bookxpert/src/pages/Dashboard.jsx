import { Outlet, Link, useNavigate } from "react-router-dom";
// Dashboard component with navigation links and logout functionality
const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="home">Home</Link>
        <Link to="employees">Employees</Link>
        <button className="Logout" onClick={logout}>Logout</button>
      </nav>

      <Outlet />
    </div>
  );
};

export default Dashboard;
