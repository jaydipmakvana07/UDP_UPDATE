import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import logoutUser from "./AuthReducer";
import { loginCall } from "../services/apiCalls"; // Import your API call function here

// Initial state for the context
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: null,
};

// Create the AuthContext
export const AuthContext = createContext(INITIAL_STATE);

// Create the AuthContextProvider
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // Effect to update localStorage when user changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  // Custom login function
  const login = async (credentials) => {
    dispatch({ type: "LOGIN_START" }); // Dispatch start action
    try {
      // Make API call to login
      const response = await loginCall(credentials); // Update with your actual API call
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data }); // Dispatch success action with response data
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message }); // Dispatch failure action with error message
    }
  };
  const logout = () => {
    
      // Dispatch the logout action
      dispatch(logoutUser());
   
   // Dispatch logout action
    localStorage.removeItem("user"); // Remove user from localStorage
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        login, 
        logout,// Add custom login function to context
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};