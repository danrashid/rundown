import { SET_GOAL, START, STOP, UPDATE_LOCATION } from "./actionTypes";

const initialState = {
  goal: "",
  lastLocation: null,
  remaining: null,
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
        running: true,
        remaining: parseFloat(state.goal)
      };

    case STOP:
      return {
        ...state,
        lastLocation: null,
        running: false
      };

    case UPDATE_LOCATION:
      const { lastLocation, remaining } = action.payload;

      return {
        ...state,
        lastLocation,
        remaining
      };

    default:
      return state;
  }
};
