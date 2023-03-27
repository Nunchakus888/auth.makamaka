import * as actionTypes from './actions';

export const initialState = {
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USERINFO:
      return {
        ...action.info || {}
      };
    default:
      return state;
  }
};

export default reducer;
