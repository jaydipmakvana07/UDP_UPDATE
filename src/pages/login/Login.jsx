import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
        <h1>Campus Connect</h1>
          
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
          <select name="select">
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
            <option value="Admin">Admin</option>
            
          </select>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <Link to="/profile"></Link>
            <button onClick={handleLogin}>Login</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
