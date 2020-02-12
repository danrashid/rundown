import React from "react";
import { Text, TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import { LOCATION_TASK_NAME } from "./actionCreators";

export class AppComponent extends React.Component {
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
      <TouchableOpacity onPress={this.onPress} style={{ marginTop: 50 }}>
        <Text>Enable background location</Text>
        <Text>{JSON.stringify(this.props.lastLocation, null, 2)}</Text>
      </TouchableOpacity>
    );
  }
}
