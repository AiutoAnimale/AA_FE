import { useState } from "react";
import { breakpoints } from "../../style/device";
import { color } from "../../style/theme";
import styled from "styled-components";

export default function ContentsText(props) {

    return (
        <Text size={props.font}>{props.data}</Text>
    );
}


const Text = styled.div`
    font-style: medium;
    font-weight: 400;
    font-size: ${props=>props.size};
    color: ${color.Gray[5]};
`