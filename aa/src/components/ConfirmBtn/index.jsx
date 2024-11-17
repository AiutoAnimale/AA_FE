import { useState } from "react";
import { breakpoints } from "../../style/device";
import { color } from "../../style/theme";
import styled from "styled-components";

export default function ConfirmBtn(props) {

    return (
        <Btn onClick={props.onClick} font={props.font}>{props.text}</Btn>
    );
}

const Btn = styled.button`
    min-width: 135px;
    min-height: 40px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props=>props.font};
    font-weight: medium;
    color: ${color.White};
    background-color: ${color.Orange[4]};
    user-select: none;

    &:hover {
        cursor: pointer;
    }
`;