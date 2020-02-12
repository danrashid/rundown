import { START, STOP, UPDATE_LOCATION } from "./actionTypes";

const initialState = {
  lastLocation: null,
  running: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
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
