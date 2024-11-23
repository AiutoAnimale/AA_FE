import { useState } from "react";
import { color } from "../../../style/theme";
import { breakpoints } from "../../../style/device";
import styled from "styled-components";

import UserName from "../../../components/UserName";
import Tag from "../../../components/Tag";
import MainText from "../../../components/MainText";

export default function PopularDataContainer(props) {
  return (
    <Div>
      <TextDiv>
        <Text>{props.text}</Text>
        {props.subText && <SubText>{props.subText}</SubText>}{" "}
        <MoreBtn onClick={props.event}>{props.btnText}</MoreBtn>
      </TextDiv>
      <Bottom>
        {props.data.map((item, index) => (
          <BottomList key={index}>
            <Number>{item.number}</Number>
            <Column>
              <Tag
                type={"tag"}
                backColor={color.Orange[0]}
                color={color.Orange[3]}
                data={`#${item.tag}`}
              />
              <MainText data={item.text} size={"18px"} />
              <UserName data={item.user} />
            </Column>
          </BottomList>
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
  row-gap: 15px;
`;

const Text = styled.div`
  font-size: 22px;
  font-weight: bolder;
  color: ${color.Black};
  user-select: none;
`;

const SubText = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: ${color.Gray[5]};
  margin-top: 10px;
  user-select: none;
`;

const TextDiv = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-bottom: solid 1px ${color.Gray[1]};
  width: 100%;
  padding-bottom: 10px;
`;

const Bottom = styled.div`
  width: 100%;
  height: 630px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BottomList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
  gap: 30px;
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

const Number = styled.div`
  font-size: 24px;
  font-weight: medium;
  color: ${color.Orange[4]};
  user-select: none;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  row-gap: 10px;
`;
