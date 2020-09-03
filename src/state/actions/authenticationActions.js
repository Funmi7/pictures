import axios from "axios";
import axiosWithAuth from "../../utils/axiosWithAuth";

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";
export const SIGN_UP_SUCCESSFUL = "SIGN_UP_SUCCESSFUL";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";
export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_FAILED = "FETCH_USER_FAILED";
export const FETCH_USER_SUCESSFULLY = "FETCH_USER_SUCESSFULLY";

const url = "https://random-picture-gallery.herokuapp.com/api/";

export const register = (props, values) => (dispatch) => {
  dispatch({ type: SIGN_UP });
  dispatch({ type: LOGIN_START });
  axios.post(`${url}auth/register`, values)
  .then(res => {
    dispatch({ type: SIGN_UP_SUCCESSFUL });
    console.log('response', res)
    dispatch({ 
      type: LOGIN_SUCCESSFUL,
      payload: res.data.user,
      message: res.data.messsage
    });
    localStorage.setItem('token', res.data.token);
    window.location.reload();
  })
  .catch(err => {
    dispatch({
      type: SIGN_UP_ERROR,
      payload: err.response.data.message,
    });
  });
};

export const login = (props, values) => dispatch => {
  dispatch({ type: LOGIN_START});
  axios.post(`${url}auth/login`, values)
  .then(res => {
    dispatch({
      type: LOGIN_SUCCESSFUL,
      payload: res.data.user,
      message: res.data.message,
    });
    localStorage.setItem('token', res.data.token);
    window.location.reload();
  })
  .catch(err => {
    dispatch({
      type: LOGIN_ERROR,
      payload: err.data,
    });
  });
};

export const logout = props => {
  localStorage.clear();
  window.location.reload();
  return { type: LOGOUT};
};