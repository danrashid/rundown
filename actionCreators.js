import * as Location from "expo-location";
import { getDistance, convertDistance } from "geolib";
import { RESET, SET_GOAL, START, STOP, UPDATE_LOCATION } from "./actionTypes";

export const LOCATION_TASK_NAME = "background-location-task";

export const reset = () => ({
  type: RESET
});

export const setGoal = payload => ({
  type: SET_GOAL,
  payload
});

export const start = () => async dispatch => {
  const { status } = await Location.requestPermissionsAsync();
  if (status === "granted") {
    try {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.High
      });
      dispatch({ type: START });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log(`Location.requestPermissionsAsync status: ${status}`);
  }
};

export const stop = () => async dispatch => {
  try {
    await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
  } catch (error) {
    console.error(error);
  }
  dispatch({ type: STOP });
};

export const updateLocation = locations => (dispatch, getState) => {
  const state = getState();

  const metersCovered = locations.reduce((a, location, index) => {
    const from = locations[index - 1] || state.lastLocation;
    return from ? a + getDistance(from.coords, location.coords) : a;
  }, 0);

  const milesCovered = convertDistance(metersCovered, "mi");
  const remaining = state.remaining - milesCovered;

  if (remaining > 0) {
    dispatch({
      type: UPDATE_LOCATION,
      payload: {
        lastLocation: locations.pop(),
        remaining
      }
    });
  } else {
    dispatch({
      type: UPDATE_LOCATION,
      payload: {
        lastLocation: null,
        remaining: 0
      }
    });
    dispatch(stop());
  }
};
