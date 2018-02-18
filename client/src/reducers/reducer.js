import { combineReducers } from 'redux';
import initReducer from './initReducer';
import taskReducer from './taskReducer'

export default combineReducers({
  init: initReducer,
  tasks: taskReducer,
});