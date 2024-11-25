import { color } from "../../../style/theme";
import styled from "styled-components";

export default function MissingViewDataContainer({ data }) {
  return (
    <>
      <Container>
        {data.map((item, index) => (
          <LeftContainer key={index}>
            <InnerContainer>
              <TitleBox>
                <MissingTag>#실종</MissingTag>
                <Writter>{item.writter}</Writter>
              </TitleBox>
              <Title>{item.title}</Title>
            </InnerContainer>
            <ContentImageWrapper>
              <ContentSection>
                <Borderbox>
                  <TitleContainer>
                    <Place>실종 위치</Place>
                    <Time>실종 시각</Time>
                    <Feature>특징</Feature>
                  </TitleContainer>
                  <ContentContainer>
                    <Placecontent>{item.placeContent}</Placecontent>
                    <Timecontent>{item.timeContent}</Timecontent>
                    <Featurecontent>{item.featureContent}</Featurecontent>
                  </ContentContainer>
                </Borderbox>
              </ContentSection>
              <ImageContainerWrapper>
                <ImageContainer />
              </ImageContainerWrapper>
            </ContentImageWrapper>
          </LeftContainer>
        ))}
      </Container>
    </>
  );
}

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  max-width: 890px;
  margin-top: 55px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 20px;
`;

const ContentImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  margin-top: 150px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TitleContainer = styled.div``;
const ContentContainer = styled.div``;

const MissingTag = styled.div`
  width: 88px;
  height: 44px;
  background-color: #fff0e7;
  color: #ff7818;
  font-weight: bold;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  max-width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Titletext = styled.div`
  color: #898989;
  font-size: 20px;
  margin-top: 24px;
  margin-right: 32px;
`;

const Contenttext = styled.div`
  color: black;
  font-size: 20px;
  margin-top: 24px;
  font-weight: bold;
`;

const Borderbox = styled.div`
  display: flex;
  width: 500px;
  padding-top: 20px;
  padding-bottom: 43px;
`;

const ImageContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 400px;
  height: 532px;
  border: solid 1px black;
  border-radius: 12px;
`;

const Writter = styled.div`
  color: #898989;
  font-size: 20px;
`;

const Placecontent = Contenttext;
const Timecontent = Contenttext;
const Featurecontent = Contenttext;
const Place = Titletext;
const Time = Titletext;
const Feature = Titletext;
