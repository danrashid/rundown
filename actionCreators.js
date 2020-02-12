import { UPDATE_LOCATION } from "./actionTypes";

export const LOCATION_TASK_NAME = "background-location-task";

export const updateLocation = payload => ({
  type: UPDATE_LOCATION,
  payload
});
