import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import styled from "@emotion/native";
import { GREY_COLOR } from "../colors";
import Swiper from "react-native-swiper";
import Slide from "../components/Slide";
import TopRatedSlide from "../components/TopRatedSlide";
import UpComingSlide from "../components/UpComingSlide";

export default function Movies() {
  const [nowPlayings, setNowPlayings] = useState([]);
  const [TopRated, setTopRated] = useState([]);
  const [upComings, setUpComings] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const BASE_URL = "https://api.themoviedb.org/3/movie";
  const API_KEY = "cc5e4d904a5162de40a358db06521e41";

  const getNowPlayings = async () => {
    const { results } = await fetch(
      `${BASE_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json());
    setNowPlayings(results);
    setIsLoading(false);
  };

  const getTopRated = async () => {
    const { results } = await fetch(
      `${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json());
    setTopRated(results);
  };

  const getUpcomings = async () => {
    const { results } = await fetch(
      `${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    ).then((res) => res.json());
    setUpComings(results);
  };

  // Promise.all는 배열 안에 있는 비동기 함수가 모두 완료 되어야 실행된다.
  const getData = async () => {
    await Promise.all([getNowPlayings(), getTopRated(), getUpcomings()]);
    setIsLoading(false);
  };

  // onRefresh가 실행되면 refreshing 상태를 true로 바꿔주고, 데이터를 다시 불러온다.
  // 그 뒤 다시 refreshing 상태를 false로 바꿔준다.
  const onRefresh = async () => {
    setIsRefreshing(true);
    await getData();
    setIsRefreshing(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      >
        <Swiper height="100%" showsPagination={false} autoplay loop>
          {nowPlayings.map((movie) => (
            <Slide key={movie.id} movie={movie} />
          ))}
        </Swiper>
        <ListTitle>Top Rated Movies</ListTitle>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {TopRated.map((top) => (
            <TopRatedSlide key={top.id} top={top} />
          ))}
        </ScrollView>
        <ListTitle>Upcoming Movies</ListTitle>
        {upComings.map((upComing) => (
          <UpComingSlide key={upComing.id} upComing={upComing} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const ListTitle = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.title};
`;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
