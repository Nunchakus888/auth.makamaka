// project imports
import config from 'config';

import * as actionTypes from './actions';

export const initialState = {
  task: null,
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const reducer = (state = initialState, action) => {
  // console.warn('task-reducer---------', action);
  switch (action.type) {
    case actionTypes.SELECT_A_TASK:
      return {
        ...state,
        task: action.task
      };
    default:
      return state;
  }
};

export default reducer;
