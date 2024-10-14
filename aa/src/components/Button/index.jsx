import { useState } from "react";
import { breakpoints } from "../../style/device";
import { color } from "../../style/theme";
import styled from "styled-components";

export default function Button(props) {

    return (
        <Btn onClick={props.onClick}>{props.text}</Btn>
    );
}

const Btn = styled.button`
    width: 80%;
    height: 45px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: medium;
    color: ${color.White};
    background-color: ${color.Black};

    &:hover {
        cursor: pointer;
    }
`;