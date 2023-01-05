import { getImgPath } from "../util";
import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";

export default function TopRatedSlide({ top }) {
  const navigation = useNavigation();

  return (
    <VWrapper
      onPress={() =>
        navigation.navigate("StackNav", {
          screen: "Detail",
          params: { movieId: top.id },
        })
      }
    >
      <TRPoster
        source={{
          url: getImgPath(top.poster_path),
        }}
      />
      <TRColumn>
        <Rating>⭐️{top.vote_average}/10</Rating>
        <TRTitle>
          {top.title.slice(0, 11)}
          {top.title.length > 11 && "..."}
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
