import React from "react";
import { Text, TouchableOpacity } from "react-native";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";

const LOCATION_TASK_NAME = "background-location-task";

export default class Component extends React.Component {
  onPress = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status === "granted") {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Balanced
      });
    }
  };

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <Text>Enable background location</Text>
      </TouchableOpacity>
    );
  }
}

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    console.error(error);
    return;
  }
  if (data) {
    const { locations } = data;
    console.log(locations);
  }
});
