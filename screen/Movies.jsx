import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, View } from "react-native";
import styled from "@emotion/native";
import { GREY_COLOR } from "../colors";
import Swiper from "react-native-swiper";
import Slide from "../components/Slide";
import TopRatedSlide from "../components/TopRatedSlide";
import UpComingSlide from "../components/UpComingSlide";
import { useQuery, useQueryClient, useInfiniteQuery } from "react-query";
import { getNowPlayings, getTopRated, getUpcomings } from "../api";

export default function Movies() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const queryClient = useQueryClient();

  const { data: nowPlayingData, isLoading: isLoadingNP } = useQuery(
    ["Movies", "NowPlaying"],
    getNowPlayings
  );
  const { data: topRatedData, isLoading: isLoadingTR } = useQuery(
    ["Movies", "TopRated"],
    getTopRated
  );
  const {
    data: upcomingData,
    isLoading: isLoadingUC,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(["Movies", "Upoming"], getUpcomings, {
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
    },
  });

  // onRefresh가 실행되면 refreshing 상태를 true로 바꿔주고, 데이터를 다시 불러온다.
  // 그 뒤 다시 refreshing 상태를 false로 바꿔준다.
  // React Query의 캐싱기능을 무시하고 다시 데이터를 불러오기 위해 refrtch를 해준다.
  const onRefresh = async () => {
    setIsRefreshing(true);
    // await Promise.all([refetchNP(), refetchTR(), refetchUC()]);
    await queryClient.refetchQueries(["Movies"]);
    setIsRefreshing(false);
  };

  const isLoading = isLoadingNP || isLoadingTR || isLoadingUC;

  const fetchMore = async () => {
    if (hasNextPage) {
      await fetchNextPage();
    }
  };

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }

  return (
    <FlatList
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={
        <>
          <Swiper height="100%" showsPagination={false} autoplay loop>
            {nowPlayingData.results.map((movie) => (
              <Slide key={movie.id} movie={movie} />
            ))}
          </Swiper>
          <ListTitle>Top Rated Movies</ListTitle>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            data={topRatedData.results}
            renderItem={({ item }) => <TopRatedSlide top={item} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={<View style={{ width: 10 }} />}
          />
          <ListTitle>Upcoming Movies</ListTitle>
        </>
      }
      data={upcomingData.pages.map((page) => page.results).flat()}
      renderItem={({ item }) => <UpComingSlide upComing={item} />}
      keyExtractor={(item) => item.id}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      ItemSeparatorComponent={<View style={{ height: 15 }} />}
    />
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
