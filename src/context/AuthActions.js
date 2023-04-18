// actions/authActions.js

import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE , LOGOUT } from './types';

// Action to handle login success
const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token
});

// Action to handle login failure
const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error
});
export const logoutUser = () => ({
  type: LOGOUT
});
// Action to initiate login process
export const loginUser = (username, password) => async (dispatch) => {
  try {
    // Send login request to server
    const response = await axios.post('/login', { username, password });

    // If login is successful, dispatch loginSuccess action with token
    const { token } = response.data;
    dispatch(loginSuccess(token));
  } catch (error) {
    // If login fails, dispatch loginFailure action with error message
    dispatch(loginFailure(error.response.data.error));
  }
};
