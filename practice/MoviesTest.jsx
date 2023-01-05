import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "@emotion/native";

// props.theme를 사용해서 사용하기
const SectionTitle = styled.Text`
  font-size: 30px;
  color: ${(props) => props.theme.title};
`;

export default function MoviesTest({ navigation: { navigate } }) {
  return (
    <View>
      <SectionTitle>Movies</SectionTitle>

      {/* StackNav의 네임을 가진 컴포넌트 안에서 screen의 네임이 "one" 페이지로 이동한다. */}
      {/* params를 넘길 수 있다. */}
      <TouchableOpacity
        onPress={() =>
          navigate("StackNav", { screen: "one", params: { id: 123 } })
        }
      >
        <Text>Go To One Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
