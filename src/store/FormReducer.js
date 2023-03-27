// project imports
import config from 'config';

import * as actionTypes from './actions';
import {FORMS_URL} from "./actions";

export const initialState = {
  formurl: null,
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const reducer = (state = initialState, action) => {
  console.warn('formurl-reducer---------', action);
  switch (action.type) {
    case actionTypes.FORMS_URL:
      return {
        ...state,
        formurl: action.formurl
      };
    default:
      return state;
  }
};

export default reducer;
