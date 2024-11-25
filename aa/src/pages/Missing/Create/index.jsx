import { useState } from "react";
import styled from "styled-components";

export default function MissingCreate() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDeleteImage = () => {
    setImage(null);
  };

  const isButtonDisabled = !title || !content;

  return (
    <Container>
      <InnerContainer>
        <Name>도움 글 작성하기</Name>
        <Title>제목</Title>
        <TitleInput
          value={title}
          onChange={handleTitleChange}
          placeholder="제목 입력"
        />
        <Content>내용</Content>
        <ContentInput
          value={content}
          onChange={handleContentChange}
          placeholder="내용 입력"
        />
        <Photo>사진</Photo>

        <PhotoInputWrapper>
          {!image && (
            <PhotoInput onDrop={handleDrop} onDragOver={handleDragOver}>
              <p>사진을 첨부해주세요</p>
            </PhotoInput>
          )}

          {image && (
            <ImageWrapper
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <ImagePreview src={image} alt="미리보기" />
              {isHovered && (
                <DeleteButton onClick={handleDeleteImage}>삭제</DeleteButton>
              )}
            </ImageWrapper>
          )}

          <UploadButtonWrapper>
            <UploadButton disabled={isButtonDisabled}>글 업로드</UploadButton>
          </UploadButtonWrapper>
        </PhotoInputWrapper>
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
