import { GREEN_COLOR, YELLOW_COLOR } from "./colors";

export const lightTheme = {
  color: {
    titleOnImg: "white",
    overviewOnImg: "#d2dae2",
    listTitle: GREEN_COLOR,
    title: "black",
    overview: "#1e272e",
    modalBg: "#d2dae2",
    inputText: "white",
  },
};

export const darkTheme = {
  color: {
    titleOnImg: "white",
    overviewOnImg: "#d2dae2",
    listTitle: YELLOW_COLOR,
    title: "white",
    overview: "#d2dae2",
    modalBg: "#d2dae2",
    inputText: "black",
  },
};
// props.theme 으로 어디서든 자유롭게 접근하기 위해 이 파일에서 미리 설정해준다.
