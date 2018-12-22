import authReducer from './authReducers';
import taskReducer from './taskReducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer
});

export default rootReducer;
