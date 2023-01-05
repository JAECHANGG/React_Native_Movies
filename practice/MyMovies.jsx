import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../util";

export default function MyMovies() {
  return (
    <SafeAreaWrap>
      <ScrollWrap>
        <HeaderWrap>
          <HeaderBackImage
            style={StyleSheet.absoluteFill}
            source={{
              url: "http://t1.daumcdn.net/movie/f4ab4be2992394bcde40c115958072d22eb24687",
            }}
          />
          <LinearGradient
            style={StyleSheet.absoluteFill}
            colors={["transparent", "rgba(0, 0, 0, 0.7)"]}
          />
          <HeaderPoster>
            <HeaderPosterImage
              source={{
                url: "http://t1.daumcdn.net/movie/f4ab4be2992394bcde40c115958072d22eb24687",
              }}
            />
            <HeaderPosterContentWrap>
              <HeaderPosterTitle>모아나</HeaderPosterTitle>
              <HeaderPosterScore>10/10</HeaderPosterScore>
              <HeaderPosterText>
                모아나 존잼모아나 존잼모아나 존잼모아나 존잼모아나 존잼모아나
                존잼모아나 존잼모아나 존잼
              </HeaderPosterText>
            </HeaderPosterContentWrap>
          </HeaderPoster>
        </HeaderWrap>
        <MainWrap>
          <MainTitle>Top Rated Movies</MainTitle>
          <MainScrollWrap horizontal showsHorizontalScrollIndicator={false}>
            <MainPosterWrap>
              <MainPosterImage
                source={{
                  url: "http://t1.daumcdn.net/movie/f4ab4be2992394bcde40c115958072d22eb24687",
                }}
              />
              <MainPosterTextWrap>
                <MainPosterScore>10/10</MainPosterScore>
                <MainPosterTitle>모아나</MainPosterTitle>
              </MainPosterTextWrap>
            </MainPosterWrap>
            <MainPosterWrap>
              <MainPosterImage
                source={{
                  url: "http://t1.daumcdn.net/movie/f4ab4be2992394bcde40c115958072d22eb24687",
                }}
              />
              <MainPosterTextWrap>
                <MainPosterScore>10/10</MainPosterScore>
                <MainPosterTitle>모아나</MainPosterTitle>
              </MainPosterTextWrap>
            </MainPosterWrap>
            <MainPosterWrap>
              <MainPosterImage
                source={{
                  url: "http://t1.daumcdn.net/movie/f4ab4be2992394bcde40c115958072d22eb24687",
                }}
              />
              <MainPosterTextWrap>
                <MainPosterScore>10/10</MainPosterScore>
                <MainPosterTitle>모아나</MainPosterTitle>
              </MainPosterTextWrap>
            </MainPosterWrap>
            <MainPosterWrap>
              <MainPosterImage
                source={{
                  url: "http://t1.daumcdn.net/movie/f4ab4be2992394bcde40c115958072d22eb24687",
                }}
              />
              <MainPosterTextWrap>
                <MainPosterScore>10/10</MainPosterScore>
                <MainPosterTitle>모아나</MainPosterTitle>
              </MainPosterTextWrap>
            </MainPosterWrap>
            <MainPosterWrap>
              <MainPosterImage
                source={{
                  url: "http://t1.daumcdn.net/movie/f4ab4be2992394bcde40c115958072d22eb24687",
                }}
              />
              <MainPosterTextWrap>
                <MainPosterScore>10/10</MainPosterScore>
                <MainPosterTitle>모아나</MainPosterTitle>
              </MainPosterTextWrap>
            </MainPosterWrap>
          </MainScrollWrap>
        </MainWrap>
        <ListTitle>Upcoming Movies</ListTitle>
        <UpcomingRow onPress={() => {}}>
          <UpcomingPoster
            source={{
              url: "http://t1.daumcdn.net/movie/f4ab4be2992394bcde40c115958072d22eb24687",
            }}
          />
          <UpcomingColumn>
            <UpcomingTitle>모아나</UpcomingTitle>
            <Release>{"2022-12-02"}</Release>
            <UpcomingOverview>모아나재밌다</UpcomingOverview>
          </UpcomingColumn>
        </UpcomingRow>
        <UpcomingRow onPress={() => {}}>
          <UpcomingPoster
            source={{
              url: "http://t1.daumcdn.net/movie/f4ab4be2992394bcde40c115958072d22eb24687",
            }}
          />
          <UpcomingColumn>
            <UpcomingTitle>모아나</UpcomingTitle>
            <Release>{"2022-12-02"}</Release>
            <UpcomingOverview>모아나재밌따</UpcomingOverview>
          </UpcomingColumn>
        </UpcomingRow>
      </ScrollWrap>
    </SafeAreaWrap>
  );
}

const SafeAreaWrap = styled.SafeAreaView`
  flex: 1;
  background-color: blue;
`;

const ScrollWrap = styled.ScrollView`
  background-color: yellow;
`;

const HeaderWrap = styled.View`
  box-sizing: border-box;
  height: ${SCREEN_HEIGHT / 3 + "px"};
  background-color: lightblue;
`;

const HeaderBackImage = styled.Image`
  flex: 1;
`;

const HeaderPoster = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
`;

const HeaderPosterImage = styled.Image`
  width: 33%;
  height: 60%;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const HeaderPosterContentWrap = styled.View`
  width: 60%;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const HeaderPosterTitle = styled.Text`
  color: white;
`;

const HeaderPosterScore = styled.Text`
  color: white;
`;

const HeaderPosterText = styled.Text`
  color: white;
`;

const MainWrap = styled.ScrollView`
  height: ${SCREEN_HEIGHT / 2.5 + "px"};
  background-color: green;
`;

const MainTitle = styled.Text`
  margin-left: 5%;
  color: yellow;
`;

const MainScrollWrap = styled.ScrollView`
  height: ${SCREEN_HEIGHT / 2.6 + "px"};
  background-color: yellow;
`;

const MainPosterWrap = styled.TouchableOpacity`
  padding: 20px 10px;
`;

const MainPosterImage = styled.Image`
  width: ${SCREEN_WIDTH / 3 + "px"};
  height: ${SCREEN_HEIGHT / 4 + "px"};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const MainPosterTextWrap = styled.View`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: gray;
`;

const MainPosterScore = styled.Text``;

const MainPosterTitle = styled.Text``;

const ListTitle = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.title};
`;

const UpcomingRow = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 20px;
  margin-bottom: 20px;
`;
const UpcomingPoster = styled.Image`
  width: 100px;
  height: 150px;
  background-color: grey;
  border-radius: 5px;
`;
const UpcomingTitle = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.upcomingText};
`;

const UpcomingOverview = styled.Text`
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.upcomingText};
`;

const UpcomingColumn = styled.View`
  margin-left: 20px;
  width: 60%;
`;

const Release = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: ${(props) => props.theme.upcomingText};
  margin-top: 10px;
  margin-bottom: 10px;
`;

const UpcomingView = styled.View``;
