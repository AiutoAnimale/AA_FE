import { useState } from "react";
import { breakpoints } from "../../style/device";
import { color } from "../../style/theme";
import styled from "styled-components";

export default function UserName(props) {

    return (
        <UserNameContainer>{props.data}</UserNameContainer>
    );
}

const UserNameContainer = styled.div`
    font-size: 1rem;
    font-weight: medium;
    color: ${color.Gray[8]};
    user-select: none;
`