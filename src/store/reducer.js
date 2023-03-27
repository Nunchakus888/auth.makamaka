import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import eventEmitReducer from './eventEmitReducer';
import taskManage from './taskReducer';
import polling from './pollingReducer';
import userinfo from './userReducer';

// ==============================|| COMBINE REDUCER ||============================== //

export default combineReducers({
  polling,
  userinfo,
  taskManage,
  customization: customizationReducer,
  // todo replace event to state;
  eventEmit: eventEmitReducer
});
