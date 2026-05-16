import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/menu");
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Vehicle Rental System</h1>
        <p>Welcome back! Please log in</p>
      </div>
      <form className="login-form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <input type="text" placeholder="Enter Username" required />
        <input type="password" placeholder="Enter Password" required />
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="login-footer">
      </div>
    </div>
  );
}

export default Login;