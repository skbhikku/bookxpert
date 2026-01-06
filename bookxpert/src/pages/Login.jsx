import { useNavigate } from "react-router-dom";
import { useState } from "react";
// Login component with username input and login functionality
const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/dashboard/home");
    }
  };

  return (
    <div className="center">
      <h2>Login</h2>
      <input
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
