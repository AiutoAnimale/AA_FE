import { useState, useEffect } from "react";
import MainBackground from "../../assets/image/MainBackground.png";
import Event from "../../assets/image/Event.png";
import { color } from "../../style/theme";
import { breakpoints } from "../../style/device";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DataContainer from "./DataContainer";
import MissingContainer from "./MissingContainer";
import axios from "axios"; // axios를 사용하여 API 요청

export default function Main() {
  const navigate = useNavigate();

  // 상태 관리
  const [communityList, setCommunityList] = useState([]);
  const [missingList, setMissingList] = useState([]);
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true); // 로딩 상태

  // 데이터 로딩 함수
  const fetchData = async () => {
    try {
      // 커뮤니티 데이터 (여기서는 예시로 더미 데이터를 사용)
      const communityData = [
        {
          text: "우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ",
          number: "1",
          tag: "일상",
          user: "초코 보호자",
          count: "13",
        },
        {
          text: "우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ",
          number: "2",
          tag: "일상",
          user: "초코 보호자",
          count: "13",
        },
        {
          text: "우리 푕힙이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ",
          number: "3",
          tag: "일상",
          user: "초코 보호자",
          count: "13",
        },
      ];
      setCommunityList(communityData);

      // 실종 데이터 (여기서는 예시로 더미 데이터를 사용)
      const missingData = [
        { state: "대전광역시 동구", name: "기염미", image: "" },
        { state: "대전광역시 동구", name: "기염미", image: "" },
        { state: "대전광역시 동구", name: "기염미", image: "" },
      ];
      setMissingList(missingData);

      const response = await axios.get(
        "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=yC7XUdb1LuZbXdIU1LXMkGaDDlFwMssTjSbSWxk7Cd1fr0nHebTRELnA5tHz2%2Fjk%2Ft1V6j7IeL9OV0Tf5YcHWQ%3D%3D&numOfRows=1&pageNo=1&dataType=json&base_date=20241125&base_time=2000&nx=56&ny=71"
      );

      if (response.data && response.data.response) {
        const weatherData = response.data.response.body.items.item[0];
        setWeather({
          tempMin: weatherData.fcstValue,
          tempMax: weatherData.fcstValue,
          city: "나주시 빛가람동",
          description: "비가 온다냐~!",
          tags: ["#오늘날씨", "#집콕"],
        });
      }

      setLoading(false);
    } catch (error) {
      console.error("데이터 로딩 오류:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  const moreCommunity = () => {
    navigate("/communitymain");
  };

  const moreMissing = () => {
    navigate("/missingmain");
  };

  return (
    <>
      <Container>
        <BannerDiv>
          <BannerInnerDiv>
            <BannerLeft>
              <TempContainer>
                최저 {weather.tempMin}° | 최고 {weather.tempMax}°
              </TempContainer>
              <div>
                <TempText font={"24px"}>{weather.city}은</TempText>
                <TempText font={"24px"}>{weather.description}</TempText>
              </div>
              <Ment>오늘은 한 번 우비 & 우산 챙겨도 나쁘지 않을지도?</Ment>
              <Gap>
                {weather.tags &&
                  weather.tags.map((tag, index) => (
                    <BannerTag key={index}>{tag}</BannerTag>
                  ))}
              </Gap>
            </BannerLeft>
          </BannerInnerDiv>
        </BannerDiv>
        <DataContainer
          data={communityList}
          text="몽글몽글 커뮤니티"
          color={color.Orange[1]}
          btnText="커뮤니티 더보기"
          event={moreCommunity}
        />
        <EventDiv />
        {/* <MissingContainer
          data={missingList}
          text="우리 애가 사라졌어요!"
          color={color.Orange[1]}
          btnText="더보기"
          event={moreMissing}
        /> */}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  row-gap: 20px;
  padding-bottom: 80px;
  background-color: ${color.White};
`;

const BannerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 320px;
  background-color: ${color.Orange[0]};
`;

const BannerInnerDiv = styled.div`
  max-width: 885px;
  width: 100%;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${MainBackground});

  @media screen and (max-width: ${breakpoints.mobileSmall}) {
    background-image: none;
  }
`;

const BannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 30px;
`;

const Gap = styled.div`
  gap: 15px;
  display: flex;
`;

const BannerTag = styled.div`
  padding: 5px 15px;
  height: 20px;
  border-radius: 20px;
  font-size: 13px;
  background-color: ${color.Orange[4]};
  color: ${color.White};
  user-select: none;
`;

const TempContainer = styled.div`
  font-size: 13px;
  font-weight: medium;
  color: ${color.Black};
  padding: 5px 15px;
  border-radius: 5px;
  background-color: ${color.Orange[1]};
  user-select: none;
`;

const TempText = styled.div`
  font-size: ${(props) => props.font};
  font-weight: bolder;
  color: ${color.Black};
  user-select: none;
`;

const Ment = styled.div`
  font-size: 0.9rem;
  font-weight: medium;
  color: ${color.Black};
  user-select: none;

  @media screen and (max-width: ${breakpoints.mobileSmall}) {
    font-size: 0.8rem;
  }
`;

const EventDiv = styled.div`
  max-width: 920px;
  width: 90%;
  height: 150px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${Event});
  border-radius: 15px;

  @media screen and (max-width: ${breakpoints.tabletSmall}) {
    display: none;
  }
`;
