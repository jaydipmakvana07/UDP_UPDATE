import axios from "axios";
import { useNavigate } from "react-router-dom";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("http://localhost:8080/login", userCredential);
    if (res.status === 200) {
      // Successful login
      console.log("Login successful"); // Add this console.log statement
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      // window.location.href = "/student";
      
    } else {
      // Handle other response statuses here, if needed
      // Example: dispatch({ type: "LOGIN_FAILURE", payload: res.data });
    }
  } catch (err) {
    // Handle error cases
    // Example: dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
