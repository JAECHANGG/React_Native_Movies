import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../practice/MyMovies";
import My from "../screen/My";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { DARK_COLOR } from "../colors";

const Tab = createBottomTabNavigator();

// initialRouteName은 첫 화면을 지정해준다.
// screenOptions은 네비게이션에 옵션을 주는 props이며 객체를 인자로 받고, title, headerTintColor, headerShwon, headerBackTitle 등을 바꿀 수 있다.
// sceneContainerStyle은 스크린에 대한 스타일링을 할 수 있는 props이다.
export default function BottomTabNav() {
  const isDark = useColorScheme === "dark";
  // useColorScheme와 sceneContainerStyle를 활용해서 상위 컴포넌트에서 입혔던 색상을 덮어씌울 수 있다.
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
      }}
      sceneContainerStyle={{ backgroundColor: isDark ? DARK_COLOR : "white" }}
    >
      {/* options은 스크린에 옵션을 주는 props이며 객체를 인자로 받는다. */}
      {/* title: 헤더 제목을 바꿔줌, headerTitleAlign: 헤더 제목의 위치, tabBarLabel: 아래 탭의 내용을 바꿔줌 tabBarIcon: 아래 탭의 아이콘을 바꿔줌 */}
      <Tab.Screen
        options={{
          title: "영화",
          headerTitleAlign: "center",
          tabBarLabel: "Movies",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="local-movies" size={size} color={color} />
          ),
        }}
        name="Movies"
        component={Movies}
      />
      <Tab.Screen
        options={{
          title: "내가 작성한 댓글",
          tabBarLabel: "My",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="social-myspace" size={size} color={color} />
          ),
        }}
        name="My"
        component={My}
      />
    </Tab.Navigator>
  );
}
