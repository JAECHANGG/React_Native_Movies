import { Dimensions } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");

// Dimensions 가로너비와 세로너비를 알아서 계산해 준다.

export const getImgPath = (path) => {
  return `https://image.tmdb.org/t/p/w500${path}`;
};
