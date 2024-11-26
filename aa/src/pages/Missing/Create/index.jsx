import { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "../../../components/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function MissingCreate() {
  const navigate = useNavigate();

  const [postCreateData, setPostCreateData] = useState({
    title: "",
    body: "",
    tag: "",
    emergency: ""
  });
  const [nickname, setNickname] = useState("");


  const handleInputChange = (text, field) => {
    setPostCreateData(prevData => ({
      ...prevData,
      [field]: text
    }));
    console.log(text);
    console.log('실행되고 ㅣㅇㅆ음');
    
  }

  useEffect(() => {
    getNickname()
    console.log(postCreateData);
  }, [postCreateData]);




  const getNickname = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/users/info`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
        }
      });

      if (response.data && response.data.nickname) {
        setNickname(response.data.nickname);
      }
    }
    catch (error) {
      console.error("닉네임 가져오기 오류:", error.message);
    }
  }



  const onSubmitPost = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_KEY}/feeds/WriteFeed`, {
        nickname: nickname,
        title: postCreateData.title,
        body: postCreateData.body,
        tag: "실종",
        emergency: "1"
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
          'Content-Type': 'application/json' 
        }
      });

      if (response.status === 201) {
        navigate('/missingmain');
        alert("게시물 업로드 성공!");
        
    }
    }
    catch (error) {
      console.log("게시물이 업로드되지 않았습니다.", error.message);
      console.log(postCreateData);
    }
  }

  



  return (
    <Container>
      <InnerContainer>
        <Name>도움 글 작성하기</Name>
        <Title>제목</Title>
        <Input
          type={'text'}
          onGetText={(text) => handleInputChange(text, "title")}
          placeholder="도움 요청 제목 입력"
        /> 
        <Content>내용</Content>
        <Input
          type={'text'}
          onGetText={(text) => handleInputChange(text, "body")}
          placeholder="도움 요청 내용 입력"
        />

          <UploadButtonWrapper>
            <UploadButton onClick={onSubmitPost}>글 업로드</UploadButton>
          </UploadButtonWrapper>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const InnerContainer = styled.div`
  width: 920px;
`;

const Name = styled.div`
  font-size: 32px;
  font-weight: bold;
  max-width: 920px;
  margin-top: 42px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 42px;
`;

const Content = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 42px;
`;

const TitleInput = styled.input`
  width: 100%;
  border: none;
  background-color: #f3f3f3;
  height: 52px;
  border-radius: 12px;
  padding-left: 16px;
  margin-top: 12px;
  ::placeholder {
    font-size: 16px;
    font-weight: bold;
  }
  :focus {
    outline: none;
    border: none;
  }
`;

const ContentInput = styled.textarea`
  border: none;
  border-radius: 12px;
  background-color: #f3f3f3;
  width: 100%;
  height: 260px;
  resize: none;
  padding-left: 8px;
  padding-top: 10px;
  margin-top: 12px;
  :focus {
    outline: none;
    border: none;
  }
`;

const PhotoInputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 12px;
`;

const PhotoInput = styled.div`
  background-color: #f3f3f3;
  border: 1px dotted black;
  border-radius: 12px;
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;

  p {
    font-size: 16px;
    color: #aaa;
  }

  :hover {
    background-color: #e6e6e6;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 200px;
  margin-top: 12px;
`;

const ImagePreview = styled.img`
  width: 40%;
  height: auto;
  border-radius: 12px;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px 12px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const Photo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 42px;
`;

const UploadButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
`;

const UploadButton = styled.div`
  width: 135px;
  height: 50px;
  border: none;
  background-color: ${({ disabled }) => (disabled ? "#DFDFDF" : "#ff823f")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 18px;
  color: white;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
