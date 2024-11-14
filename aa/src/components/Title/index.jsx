import { useState } from "react";
import { breakpoints } from "../../style/device";
import { color } from "../../style/theme";
import styled from "styled-components";

export default function Title(props) {

    return (
        <TitleContainer
        onClick={props.onPress}
        outline={props.data == props.state ? 'solid' : 'none'}
        color={props.data == props.state ? color.Black : color.Gray[6]}
        >
            {props.data}
        </TitleContainer>
    );
}

const TitleContainer = styled.button`
    min-width: 52px;
    height: 46px;
    font-size: 16px;
    background-color: ${color.White};
    border: none;
    color: ${props=>props.color};
    border-bottom: ${props=>props.outline} 2px ${color.Black};
`