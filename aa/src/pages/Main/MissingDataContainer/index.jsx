import { color } from "../../../style/theme";
import styled from "styled-components";

export default function MissingDataContainer({ data }) {
  return (
    <>
      <Container>
        {data.map((item, index) => (
          <LeftContainer key={index}>
            <ContentSection>
              <InnerContainer>
                <MissingTag>#실종</MissingTag>
                <Title>{item.title}</Title>
              </InnerContainer>
              <Borderbox>
                <TitleContainer></TitleContainer>
                <ContentContainer>
                  <Placecontent>{item.Content}</Placecontent>
                </ContentContainer>
              </Borderbox>
              <Content>댓글 3개...</Content>
            </ContentSection>

            <ImageContainerWrapper>
              <ImageContainer />
            </ImageContainerWrapper>
          </LeftContainer>
        ))}
      </Container>
      <Marginbox />
    </>
  );
}

const Marginbox = styled.div`
  height: 40px;
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
  flex-direction: row;
  justify-content: flex-start;
  flex-grow: 1;
  margin-bottom: 20px;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
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

const Contenttext = styled.div`
  color: black;
  font-size: 20px;
  margin-top: 24px;
  font-weight: bold;
  word-wrap: break-word;
  max-width: 100%;
`;

const Borderbox = styled.div`
  border-top: solid 1px ${color.Gray[1]};
  border-bottom: solid 1px ${color.Gray[1]};
  display: flex;
  width: 500px;
  padding-top: 20px;
  padding-bottom: 43px;
`;

const Content = styled.div`
  color: #353535;
  font-size: 16px;
  margin-top: 20px;
  margin-left: 430px;
`;

const ImageContainerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 20px;
`;

const ImageContainer = styled.div`
  width: 280px;
  height: 374px;
  border: solid 1px black;
  border-radius: 12px;
  margin-left: 85px;
  margin-bottom: 40px;
`;

const Placecontent = Contenttext;
