import React from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";

const fontSize = 60;

export const AppComponent = ({
  goal,
  lastLocation,
  remaining,
  running,
  reset,
  setGoal,
  start,
  stop
}) => (
  <ScrollView
    keyboardShouldPersistTaps="handled"
    contentContainerStyle={{
      flex: 1,
      alignItems: "center",
      paddingTop: 50
    }}
  >
    {remaining === 0 && <Text style={{ flex: 1, fontSize }}>You did it!</Text>}
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="How far?"
        editable={!running && !remaining}
        onChangeText={setGoal}
        value={remaining > 0 ? remaining.toString() : goal}
        keyboardType="numeric"
        style={{ fontSize }}
        autoFocus
      />
    </View>
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%"
      }}
    >
      {running ? (
        <Button title="Stop" onPress={stop} />
      ) : remaining > 0 ? (
        <React.Fragment>
          <Button title="Resume" onPress={start} />
          <Button title="Reset" onPress={reset} />
        </React.Fragment>
      ) : (
        parseFloat(goal) > 0 && <Button title="Start" onPress={start} />
      )}
    </View>
    <Text style={{ flex: 2 }}>
      {JSON.stringify(
        {
          goal,
          lastLocation,
          remaining,
          running
        },
        null,
        2
      )}
    </Text>
  </ScrollView>
);
