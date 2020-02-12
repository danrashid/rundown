import { SET_GOAL, START, STOP, UPDATE_LOCATION } from "./actionTypes";

const initialState = {
  goal: "",
  lastLocation: null,
  running: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GOAL:
      return {
        ...state,
        goal: action.payload
      };

    case START:
      return {
        ...state,
        running: true
      };

    case STOP:
      return {
        ...state,
        lastLocation: null,
        running: false
      };

    case UPDATE_LOCATION:
      const locations = action.payload;

      return {
        ...state,
        lastLocation: locations.pop()
      };

    default:
      return state;
  }
};
