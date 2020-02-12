import { UPDATE_LOCATION } from "./actionTypes";

const initialState = {
  lastLocation: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
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
