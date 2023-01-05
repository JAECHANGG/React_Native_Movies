import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import StackNav from "./StackNav";
import BottomTabNav from "./BottomTabNav";

const Stack = createNativeStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
      <Stack.Screen name="StackNav" component={StackNav} />
    </Stack.Navigator>
  );
}
