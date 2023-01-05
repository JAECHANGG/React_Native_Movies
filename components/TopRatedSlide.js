import { getImgPath } from "../util";
import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";

export default function TopRatedSlide({ movie }) {
  const navigation = useNavigation();

  return (
    <VWrapper
      onPress={() =>
        navigation.navigate("StackNav", {
          screen: "Detail",
          params: { movieId: movie.id },
        })
      }
    >
      <TRPoster
        source={{
          url: getImgPath(movie.poster_path),
        }}
      />
      <TRColumn>
        <Rating>⭐️{movie.vote_average}/10</Rating>
        <TRTitle>
          {movie.title.slice(0, 11)}
          {movie.title.length > 11 && "..."}
        </TRTitle>
      </TRColumn>
    </VWrapper>
  );
}

const TRPoster = styled.Image`
  width: 120px;
  height: 170px;
  background-color: grey;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const TRTitle = styled.Text`
  font-size: 13px;
  font-weight: 600;
  color: white;
`;

const VWrapper = styled.TouchableOpacity`
  background-color: black;
  border-radius: 5px;
`;

const TRColumn = styled.View`
  padding: 10px;
`;

const Rating = styled.Text`
  color: white;
  margin-top: 5px;
  margin-bottom: 5px;
`;
