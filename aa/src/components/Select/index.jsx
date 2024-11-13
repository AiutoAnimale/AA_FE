import { useState } from "react";
import { breakpoints } from "../../style/device";
import { color } from "../../style/theme";
import styled from "styled-components";

export default function Select(props) {

    return (
        <Btn onClick={props.onClick} color={props.color} backColor={props.backColor}>{props.text}</Btn>
    );
}

const Btn = styled.button`
    width: 45%;
    height: 40px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.backColor};
    color: ${props => props.color};
    border: solid 1px ${props => props.color};

    &:hover {
        cursor: pointer;
    }
`;