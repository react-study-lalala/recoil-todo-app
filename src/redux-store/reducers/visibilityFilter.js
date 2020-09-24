import { SET_FILTER } from "../actionTypes";

const initialState = {
  visibilityFilter: "All"
};


const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.visibilityFilter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
