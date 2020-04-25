import { GET_ORDER, FILTER_ORDER } from "../config/constants";

const initialState = {
  data: [],
  loading: true,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ORDER}_PENDING`:
    case `${FILTER_ORDER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_ORDER}_FULFILLED`:
    case `${FILTER_ORDER}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_ORDER}_REJECTED`:
    case `${FILTER_ORDER}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
