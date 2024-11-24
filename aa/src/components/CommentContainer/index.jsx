import styled from "styled-components";
import { color } from "../../style/theme";

export default function CommentContainer({ data, number }) {
  return (
    <Container>
      <Header>
        <Number>댓글: {number}개</Number>
      </Header>
      <ContentWrapper>
        {data.map((comment, index) => (
          <CommentBox key={index}>
            <InnerContainer>
              <Writer>{comment.writer}</Writer>
              <Content>{comment.content}</Content>
            </InnerContainer>
          </CommentBox>
        ))}
      </ContentWrapper>
      <InputContainer>
        <Input placeholder="댓글을 입력하세요..." />
        <Submit>게시</Submit>
      </InputContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 880px;
  border-top: solid 1px ${color.Gray[1]};
  background-color: ${color.White};
`;

const Header = styled.div`
  margin-top: 28px;
  width: 100%;
  text-align: right;
  margin-bottom: 10px;
`;

const Number = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px ${color.Gray[1]};
`;

const CommentBox = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10px;
`;

const Writer = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

const Content = styled.div`
  font-size: 18px;
  font-weight: normal;
  color: black;
  margin-left: 58px;
`;

const InnerContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;

const Input = styled.input`
  width: 100%;
  height: 52px;
  border-radius: 12px;
  background-color: #f3f3f3;
  border: none;
  margin-top: 24px;
  padding-left: 24px;
  ::placeholder {
    color: #cacaca;
  }
`;

const Submit = styled.div`
  font-size: 16px;
  color: #ff823f;
  position: absolute;
  left: 850px;
  bottom: 17px;
`;

const InputContainer = styled.div`
  width: 100%;
  position: relative;
`;
