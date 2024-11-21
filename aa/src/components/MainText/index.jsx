import { useState } from "react";
import { breakpoints } from "../../style/device";
import { color } from "../../style/theme";
import styled from "styled-components";

export default function MainText(props) {

    return (
        <MainTextContainer font={props.size}>{props.data}</MainTextContainer>
    );
}

const MainTextContainer = styled.div`
    font-size:  ${props => props.font};
    font-weight: 500;
    color: ${color.Black};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    user-select: none;
`;