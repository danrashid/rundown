import React from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";

const fontSize = 60;

export const AppComponent = ({
  goal,
  lastLocation,
  running,
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
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="How far?"
        onChangeText={setGoal}
        value={goal}
        keyboardType="numeric"
        style={{ fontSize }}
        autoFocus
      />
      {running ? (
        <Button title="Stop" onPress={stop} />
      ) : (
        parseFloat(goal) > 0 && <Button title="Start" onPress={start} />
      )}
    </View>
    <Text style={{ flex: 2 }}>
      {JSON.stringify(
        {
          goal,
          lastLocation,
          running
        },
        null,
        2
      )}
    </Text>
  </ScrollView>
);
