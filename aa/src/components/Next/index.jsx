import { useState } from "react";
import { breakpoints } from "../../style/device";
import { color } from "../../style/theme";
import styled from "styled-components";
import { ReactComponent as NextSVG } from "../../assets/icon/Next.svg";

export default function NextButton(props) {

    return (
        <Btn onClick={props.onClick}>
            <Next />
        </Btn>
    );
}

const Btn = styled.button`
    width: 10%;
    height: 40px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${color.Orange[3]};

    &:hover {
        cursor: pointer;
    }
`;

const Next = styled(NextSVG)``;