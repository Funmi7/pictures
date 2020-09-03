import { combineReducers } from 'redux';

import userReducer from './authenticationReducer';
import imagesReducer from './imageReducer';
import errorsReducer from './errorsReducer';

const appReducer = combineReducers({
  userReducer,
  images: imagesReducer,
  errors: errorsReducer,

});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
