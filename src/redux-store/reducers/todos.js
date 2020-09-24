import { ADD_TODO, SET_FILTER } from "../actionTypes";
const initialState = {
  list: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        list: action.payload,
      };
    }

    default:
      return state;
  }
}
