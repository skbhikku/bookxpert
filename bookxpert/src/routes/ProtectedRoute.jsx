import { Navigate } from "react-router-dom";
// A higher-order component that protects routes from unauthorized access
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
