import React, { useEffect, useState } from "react";
import { FlatList, Linking, StyleSheet, useColorScheme } from "react-native";
import styled from "@emotion/native";
import { getImgPath, SCREEN_WIDTH } from "../util";
import { SCREEN_HEIGHT } from "../util";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { useQuery } from "react-query";
import { getDetail } from "../api";
import Loader from "../components/Loader";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { authService, dbService } from "../firebase";
import ReviewCard from "../components/ReviewCard";
import ReviewModal from "../components/ReviewModal";

export default function Detail({
  navigation: { navigate },
  route: {
    params: { movieId },
  },
}) {
  const [reviews, setReviews] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const isDark = useColorScheme() === "dark";
  const openYoutube = async (key) => {
    const url = `https://www.youtube.com/watch?v=${key}`;
    await Linking.openURL(url);
  };

  const { data, isLoading } = useQuery(["movie", movieId], getDetail);

  const handleAdding = async () => {
    const isLogin = !!authService.currentUser;
    if (!isLogin) {
      navigate("Login");
      return;
    }
    setIsOpenModal(true);
  };

  // useEffect(() => {
  //   const getReviews = async () => {
  //     const q = query(
  //       collection(dbService, "reviews")
  //       // orderBy("createdAt", "desc")
  //     );
  //     const querySnapshot = await getDocs(q);
  //     console.log("querySnapshot:", querySnapshot);
  //   };
  //   getReviews();
  // }, []);

  useEffect(() => {
    const q = query(
      collection(dbService, "reviews"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newReviews = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(newReviews);
    });
    return () => unsubscribe;
  }, []);

  if (isLoading) {
    return <Loader />;
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
      <AddReview onPress={handleAdding}>
        <TempText>Add Review</TempText>
      </AddReview>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          marginBottom: 50,
          justifyContent: "flex-start",
        }}
        keyExtractor={(item) => item.id}
        horizontal
        data={reviews}
        ItemSeparatorComponent={HSeprator}
        renderItem={({ item }) => {
          if (item.movieId === movieId) {
            return <ReviewCard review={item} />;
          }
        }}
      />
      <ReviewModal
        movieId={movieId}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </Container>
  );
}

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
  color: ${(props) => props.theme.color.overview};
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
  color: ${(props) => props.theme.color.title};
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
  color: ${(props) => props.theme.color.listTitle};
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
  border-color: ${(props) => props.theme.color.title};
`;
const TempText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.color.title};
`;

const HSeprator = styled.View`
  width: 10px;
`;

// 리액트 쿼리는 서버 state를 관리하기 위한 라이브러리
// 서버 state는 우리가 API 통신으로 서버에 요청을 보냈을 때 데이터가 도착하기 전, 후, 에러 (isLoading, data, error) 상태가 있는데 각각의 상태를 말한다.
// useQuery라는 훅으로 자동으로 리턴값으로 제공해준다.
// 한번 API 요청 시 queryKey가 API 요청결과를 cache 에 저장하고, caching된 API 요청은 다시 서버에 하지 않고 cache memory에서 더 빠르게 불러온다. => 불필요한 서버요청을 막아준다.
