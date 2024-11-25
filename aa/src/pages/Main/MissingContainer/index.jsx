import { useState } from "react";
import { color } from "../../../style/theme";
import styled from "styled-components";

import UserName from "../../../components/UserName";

export default function MissingContainer(props) {
  return (
    <Div>
      <TextDiv>
        <Text>{props.text}</Text>
        <MoreBtn onClick={props.event}>{props.btnText}</MoreBtn>
      </TextDiv>
      <Bottom>
        {props.data.map((item, index) => (
          <ImgContainer>
            <ImageDiv data={item.image} />
            <UserName data={`${item.state} / ${item.name}`} />
          </ImgContainer>
        ))}
      </Bottom>
    </Div>
  );
}

const Div = styled.div`
  max-width: 920px;
  width: 90%;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`;

const Text = styled.div`
  font-size: 22px;
  font-weight: bolder;
  color: ${color.Black};
  user-select: none;
`;

const TextDiv = styled.div`
  height: 94px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px ${color.Gray[1]};
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const MoreBtn = styled.button`
  background-color: ${color.White};
  border: none;
  font-size: 18px;
  font-weight: medium;
  color: ${color.Gray[7]};
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

const ImageDiv = styled.div`
  width: 280px;
  height: 380px;
  border: solid 1px ${color.Orange[3]};
  border-radius: 10px;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;
