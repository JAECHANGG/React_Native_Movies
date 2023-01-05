import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";
import { getImgPath } from "../util";

export default function UpComingSlide({ movie }) {
  const navigation = useNavigation();

  const { navigate } = useNavigation();
  const goToDetail = () => {
    navigate("Stack", { screen: "Detail", params: { movieId: movie.id } });
  };

  return (
    <UpcomingRow onPress={goToDetail}>
      <UpcomingPoster
        source={{
          url: getImgPath(movie.poster_path),
        }}
      />
      <UpcomingColumn>
        <UpcomingTitle>{movie.title}</UpcomingTitle>
        <Release>{movie.release_date}</Release>
        <UpcomingOverview>
          {movie.overview.slice(0, 70)}
          {movie.overview.length > 70 && "..."}
        </UpcomingOverview>
      </UpcomingColumn>
    </UpcomingRow>
  );
}

const UpcomingRow = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 20px;
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
