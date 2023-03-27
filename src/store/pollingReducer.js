// project imports
import config from 'config';

import * as actionTypes from './actions';

export const initialState = null;

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POLLING_TASKS:
      return action.polling ? action.polling : null;
    default:
      return state;
  }
};

export default reducer;
