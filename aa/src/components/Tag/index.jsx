import { useState } from "react";
import { breakpoints } from "../../style/device";
import styled from "styled-components";

export default function Tag(props) {
  return (
    <TagContainer
      width={props.width || (props.type === "tag" ? "60px" : "80px")}
      height={props.height || (props.type === "tag" ? "27px" : "30px")}
      backColor={props.backColor}
      color={props.color}
      fontSize={props.fontSize || "0.9rem"}
      fontWeight={props.fontWeight || "medium"}
    >
      {props.data}
    </TagContainer>
  );
}

const TagContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${(props) => props.backColor};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  white-space: nowrap;
  user-select: none;
`;
