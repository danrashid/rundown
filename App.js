import React from "react";
import * as TaskManager from "expo-task-manager";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppContainer } from "./AppContainer";
import { updateLocation, LOCATION_TASK_NAME } from "./actionCreators";

export default () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    console.error(error);
    return;
  }
  if (data) {
    const { locations } = data;
    store.dispatch(updateLocation(locations));
  }
});
