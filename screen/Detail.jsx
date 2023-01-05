import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Linking,
  StyleSheet,
  useColorScheme,
} from "react-native";
import styled from "@emotion/native";

import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { getImgPath, SCREEN_HEIGHT } from "../util";
import { useQuery } from "react-query";
import { getDetail } from "../api";

export default function Detail({
  navigation: { navigate },
  route: {
    params: { movieId },
  },
}) {
  const isDark = useColorScheme() === "dark";

  // 인자를 넣어주지 않아도 리액트 쿼리에서 자동으로 매개변수로 객체가 넘어간다.
  const { data, isLoading } = useQuery(["Detail", movieID], getDetail);

  const openYoutube = async (key) => {
    const url = `https://www.youtube.com/watch?v=${key}`;
    await Linking.openURL(url);
  };

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }

  return (
    <Container>
      <View>
        <BackdropImg
          style={StyleSheet.absoluteFill}
          source={{ uri: getImgPath(data.backdrop_path) }}
        />
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={["transparent", "black"]}
        />
        <Title>{data.title}</Title>
      </View>
      <Overview>{data.overview}</Overview>
      <YoutubeList>
        {data?.videos?.results.map((video) => (
          <Row key={video.key} onPress={() => openYoutube(video.key)}>
            <AntDesign
              name="youtube"
              size={24}
              color={isDark ? "white" : "black"}
            />
            <VideoName>{video.name}</VideoName>
          </Row>
        ))}
      </YoutubeList>
      <SectionTitle>Reviews</SectionTitle>
      <AddReview onPress={() => {}}>
        <TempText>Add Review</TempText>
      </AddReview>
    </Container>
  );
}
const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Container = styled.ScrollView``;
const View = styled.View`
  height: ${SCREEN_HEIGHT / 4 + "px"};
  justify-content: flex-end;
`;
const BackdropImg = styled.Image`
  width: 100%;
  flex: 1;
`;
const Title = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: 600;
  margin-left: 20px;
`;
const Overview = styled.Text`
  color: ${(props) => props.theme.upcomingText};
  font-size: 15px;
  font-weight: 400;
  padding: 20px;
  line-height: 20px;
`;
const Row = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 10px;
`;
const VideoName = styled.Text`
  color: ${(props) => props.theme.upcomingText};
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin-left: 10px;
`;
const YoutubeList = styled.View`
  padding-left: 20px;
  padding-right: 20px;
`;

const SectionTitle = styled.Text`
  color: ${(props) => props.theme.upcomingText};
  font-size: 30px;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
`;
const AddReview = styled.TouchableOpacity`
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border-width: 1px;
  align-items: center;
  border-color: ${(props) => props.theme.upcomingText};
`;
const TempText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.upcomingText};
`;

const HSeprator = styled.View`
  width: 10px;
`;

// 리액트 쿼리는 서버 state를 관리하기 위한 라이브러리
// 서버 state는 우리가 API 통신으로 서버에 요청을 보냈을 때 데이터가 도착하기 전, 후, 에러 (isLoading, data, error) 상태가 있는데 각각의 상태를 말한다.
// useQuery라는 훅으로 자동으로 리턴값으로 제공해준다.
// 한번 API 요청 시 queryKey가 API 요청결과를 cache 에 저장하고, caching된 API 요청은 다시 서버에 하지 않고 cache memory에서 더 빠르게 불러온다. => 불필요한 서버요청을 막아준다.
