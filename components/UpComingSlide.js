import styled from "@emotion/native";
import { getImgPath } from "../util";

export default function UpComingSlide({ upComing }) {
  return (
    <UpcomingRow onPress={() => {}}>
      <UpcomingPoster
        source={{
          url: getImgPath(upComing.poster_path),
        }}
      />
      <UpcomingColumn>
        <UpcomingTitle>{upComing.title}</UpcomingTitle>
        <Release>{upComing.release_date}</Release>
        <UpcomingOverview>
          {upComing.overview.slice(0, 70)}
          {upComing.overview.length > 70 && "..."}
        </UpcomingOverview>
      </UpcomingColumn>
    </UpcomingRow>
  );
}

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
