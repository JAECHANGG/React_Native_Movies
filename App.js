import { StatusBar } from "expo-status-bar";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import Root from "./navigation/Root";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./theme";
import Movies from "./screen/Movies";

export default function App() {
  const isDark = useColorScheme() === "dark";
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}

// DarkMode
// "userInterfaceStyle": "automatic" 로 변경
// NavigationContainer에 theme props를 적용한다
// 리액트 네이티브에서 제공하는 useColorScheme 훅을 사용하여 다크모드인지 아닌지 판별한다.
// theme props를 다크모드라면 리액트 네이티브에서 제공하는 Theme인 DarkTheme 아니라면 DefaultTheme로 설정한다.

// emotion 라이브러리에서 제공해주는 ThemeProvider 컴포넌트를 제일 외각에 씌워주면 theme을 제공해줄 수 있다.
// 앞으로 styledComponents를 사용할 때 props.theme 으로 어디서든 자유롭게 접근할 수 있다.
