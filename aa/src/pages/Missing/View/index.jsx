import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../../style/theme";
import MissingViewDataContainer from "../../Main/MissingViewDataContainer";
import CommentContainer from "../../../components/CommentContainer";

export default function MissingView() {
  const navigate = useNavigate();
  const List = [
    {
      placeContent: "대전광역시 유성구",
      timeContent: "오전 6시 37분",
      featureContent: "잘생김, 못생김",
      title: "asdfafafadsfasdfsa",
      writter: "asdfa",
    },
  ];
  const CommentList = [
    {
      writer: "슈우웅",
      content: "asdfasdfasdfadsfadsfsa",
    },
    {
      writer: "홍길동",
      content: "asdfadfasdfadsfsafdafdsadfafsafasf",
    },
    {
      writer: "홍길동",
      content: "asdfadfasdfadsfsafdafdsadfafsafasf",
    },
    {
      writer: "홍길동",
      content: "asdfadfasdfadsfsafdafdsadfafsafasf",
    },
    {
      writer: "홍길동",
      content: "asdfadfasdfadsfsafdafdsadfafsafasf",
    },
    {
      writer: "홍길동",
      content: "asdfadfasdfadsfsafdafdsadfafsafasf",
    },
    {
      writer: "홍길동",
      content: "asdfadfasdfadsfsafdafdsadfafsafasf",
    },
    {
      writer: "홍길동",
      content: "asdfadfasdfadsfsafdafdsadfafsafasf",
    },
  ];
  return (
    <>
      <Container>
        <MissingViewDataContainer data={List} />
        <CommentContainer data={CommentList} number={CommentList.length} />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
