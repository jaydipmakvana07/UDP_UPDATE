import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
import { loginCall } from "../../services/apiCalls";

const Login = () => {
  const username = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
  const navigate = useNavigate(); // Get navigate function from react-router-dom

  const handleLogin = async (e) => {
    e.preventDefault();
    
      const loginResponse = await loginCall(
        { username: username.current.value, password: password.current.value },
        dispatch
        
      );}
      
  
  
  

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Campus Connect</h1>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <select name="select">
              <option value="Student">Student</option>
              <option value="Faculty">Faculty</option>
              <option value="Admin">Admin</option>
            </select>
            <input type="text" placeholder="Username" ref={username} />
            <input type="password" placeholder="Password" ref={password} />
            <Link to="/profile">Forgot Password?</Link>
            <button type="submit" disabled={isFetching}>
              {isFetching ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
