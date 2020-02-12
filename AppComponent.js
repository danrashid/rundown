import React from "react";
import { Button, Text, View } from "react-native";

export const AppComponent = ({ lastLocation, running, start, stop }) => (
  <React.Fragment>
    <View style={{ flex: 1, justifyContent: "center" }}>
      {running ? (
        <Button title="Stop" onPress={stop} />
      ) : (
        <Button title="Start" onPress={start} />
      )}
    </View>
    <Text style={{ flex: 2 }}>
      {JSON.stringify(
        {
          lastLocation,
          running
        },
        null,
        2
      )}
    </Text>
  </React.Fragment>
);
