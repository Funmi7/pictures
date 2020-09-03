import * as types from "../actions/authenticationActions";

const initialState = {
  user: null,
  loginError: "",
  signUpError: "",
  isLoading: false,
  isSignedUp: false,
  isLoggedIn: false,
  welcomeMessage: "",
  userUpdated: false,
  userUpdateError: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case types.LOGIN_START:
      return {
        ...state,
        isLoading: true,
        loginError: '',
        signUpError: '',
        welcomeMessage: '',
      };
    case types.LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.payload,
        welcomeMessage: action.message,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
        isLoading: false,
        isLoggedIn: false,
      };
    case types.SIGN_UP_ERROR:
      return {
        ...state,
        signUpError: action.payload,
        isLoading: false,
        isLoggedIn: false,
      };
    case types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
  }
}

export default userReducer;