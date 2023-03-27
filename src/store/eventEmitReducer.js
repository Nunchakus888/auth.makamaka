// project imports
import config from 'config';

// action - state management
import * as actionTypes from './actions';

export const initialState = {
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BINDING_EvENT:
      console.log('----reducer---actionTypes.BINDING_EvENT-------action', action);
      return action.event$
    default:
      return state;
  }
};

export default reducer;
