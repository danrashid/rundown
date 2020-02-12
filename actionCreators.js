import * as Location from "expo-location";
import { START, STOP, UPDATE_LOCATION } from "./actionTypes";

export const LOCATION_TASK_NAME = "background-location-task";

export const start = () => async dispatch => {
  const { status } = await Location.requestPermissionsAsync();
  if (status === "granted") {
    try {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Balanced
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

export const updateLocation = payload => ({
  type: UPDATE_LOCATION,
  payload
});
