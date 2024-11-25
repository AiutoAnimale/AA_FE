import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../../style/theme";
import PopularDataContainer from "../../Main/PopularDataContainer";
import CommentContainer from "../../../components/CommentContainer";


// communityview 커뮤니티 상세보기

export default function CommunityView() {
  const navigate = useNavigate();
  const PopularList = [
    {
      text: "우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ",
      tag: "일상",
      user: "초코 보호자",
      count: "13",
      textContent:
        "퍼어어어어어어어ㅓ어어어어어어어ㅓ어어어어어어어어어어ㅓ어어어어어엉",
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
        <Marginbox />
        <PopularDataContainer data={PopularList} color={color.Orange[1]} />
        <CommentContainer data={CommentList} number={CommentList.length} />
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

const Marginbox = styled.div`
  height: 60px;
`;
