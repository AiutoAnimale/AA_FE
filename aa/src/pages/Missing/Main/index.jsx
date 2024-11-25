import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../../style/theme";
import MissingDataContainer from "../../../pages/Main/MissingDataContainer";

export default function MissingMain() {
  const navigate = useNavigate();

  const List = [
    {
      placeContent: "대전광역시 유성구",
      timeContent: "오전 6시 37분",
      featureContent: "잘생김, 못생김",
    },
    {
      placeContent: "대전광역시 유성구",
      timeContent: "오전 6시 37분",
      featureContent: "잘생김, 못생김",
    },
    {
      placeContent: "대전광역시 유성구",
      timeContent: "오전 6시 37분",
      featureContent: "잘생김, 못생김",
    },
    {
      placeContent: "대전광역시 유성구",
      timeContent: "오전 6시 37분",
      featureContent: "잘생김, 못생김",
    },
  ];
  return (
    <>
      <Container>
        <Missingtop>
          <Missingtext>혹시 반려동물이 사라졌나요?</Missingtext>
          <Missingsubtext>
            전국의 반려인들에게 도움을 요청해보세요!
          </Missingsubtext>
          <CreatePostButton onClick={() => navigate("/missingcreate")}>
            도움 요청하기
          </CreatePostButton>
        </Missingtop>
        <MissingDataContainer data={List} />
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
  max-width: 920px;
  margin: 0 auto;
  row-gap: 20px;
  background-color: ${color.White};
`;

const Missingtop = styled.div`
  display: flex;
  flex-direction: column;
  height: 149px;
  width: 100%;
  max-width: 890px;
  background-color: #fff0e7;
  border-radius: 12px;
  margin-top: 52px;
  box-sizing: border-box;
  padding: 40px;
`;

const Missingtext = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: black;
`;

const Missingsubtext = styled.div`
  font-size: 16px;
  color: #5a5a5a;
  margin-top: 12px;
`;

const CreatePostButton = styled.button`
  padding: 12px 32px;
  background-color: #ff823f;
  color: white;
  border: none;
  font-size: 18px;
  font-weight: bolder;
  border-radius: 5px;
  align-self: flex-end;
  position: absolute;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
  }
`;
