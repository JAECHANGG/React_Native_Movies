import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import StackNav from "./StackNav";
import BottomTabNav from "./BottomTabNav";

const Stack = createNativeStackNavigator();

// 화면을 띄우면 헤더부분이 2개가 나온다.
// 1개는 여기에서의 헤더, 나머지는 BottomTabNav의 헤더
// 여기에서의 헤더를 screenOptions로 없앤다.
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
