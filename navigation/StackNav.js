import { Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// 네비게이터를 사용하기 위해서 NavigationContainer을 최상단 컴포넌트에서 감싸주어야 한다.
// install npm install @react-navigation/native
// install npx expo install react-native-screens react-native-safe-area-context
// install npm install @react-navigation/native-stack

const Stack = createNativeStackNavigator();

// 스크린 컴포넌트는 기본적으로 navigation이라는 props를 가지고 있다.
// navigation이라는 props에는 여러가지 메소드가 있는데 페이지 이동을 위해 navigate를 사용한다.
// route를 통해 params를 받을 수 있다.
const One = ({ route: { params }, navigation: { navigate } }) => {
  console.log(params); // {"id": 123}
  return (
    <TouchableOpacity onPress={() => navigate("two")}>
      <Text>One</Text>
    </TouchableOpacity>
  );
};

// setOptions는 객체를 인자로 받는다.
// 밑의 코드는 헤더부분의 타이틀이 바뀌게 된다.
const Two = ({ navigation: { navigate, setOptions } }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigate("three")}>
        <Text>Two</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          setOptions({
            title: "변경된 제목!",
          })
        }
      >
        <Text>Set Options</Text>
      </TouchableOpacity>
    </>
  );
};

// goBack 메서드는 뒤로가기 기능
// reset 메서드는 unmount 기능을 가지고 있으며 네비게이션 스테이트 자체를 초기화 시켜준다.
// reset은 객체를 인자로 받고 index, routes가 있다.
// index : 0이면 1개의 화면, 1이면 2개 화면이고 마지막 값에서 시작하며 뒤로 가기 버튼을 눌렀을 때 마지막 값부터 차례대로 페이지가 나옴
// 만약에 "two" 화면으로 가면 뒤로 가기버튼이 사라지고 그 페이지가 처음 페이지처럼 보인다.
const Three = ({ navigation: { goBack, reset } }) => {
  return (
    <>
      <TouchableOpacity onPress={() => goBack()}>
        <Text>Three</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          reset({
            index: 1,
            routes: [{ name: "three" }, { name: "one" }, { name: "two" }],
          })
        }
      >
        <Text>Reset Navigation</Text>
      </TouchableOpacity>
    </>
  );
};

// initialRouteName은 첫 화면을 지정해준다.
// screenOptions은 네비게이션에 옵션을 주는 props이며 객체를 인자로 받고, title, headerTintColor, headerShwon, headerBackTitle 등을 바꿀 수 있다.
export default function StackNav() {
  return (
    <Stack.Navigator
      initialRouteName="three"
      screenOptions={{
        headerTintColor: "red",
      }}
    >
      {/* 스크린 안에 있는 컴포넌트를 스크린 컴포넌트라고 부른다. */}
      {/* options은 스크린에 옵션을 주는 props이며 객체를 인자로 받는다. */}
      <Stack.Screen name="one" component={One} />
      <Stack.Screen name="two" component={Two} />
      <Stack.Screen
        options={{
          presentation: "modal",
        }}
        name="three"
        component={Three}
      />
    </Stack.Navigator>
  );
}
