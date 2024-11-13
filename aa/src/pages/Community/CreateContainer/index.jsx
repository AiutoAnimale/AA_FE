import { useState } from "react";
import { color } from "../../../style/theme";
import { breakpoints } from "../../../style/device";
import styled from "styled-components";

import ConfirmBtn from "../../../components/ConfirmBtn";

export default function CreateContainer(props) {

    return (
        <Div>
            <Text>내 글도 한 번 써볼까?</Text>
            <Text>새로운 게시글을 한 번 만들어보세요</Text>
            <ConfirmBtn text={'글 작성하러가기'} font={'13px'} />
        </Div>
    );
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 200px;
    height: 150px;
    background-color: ${color.White};
    position: fixed;
    left: 80vw;
    top: 15%;
    border-radius: 10px;
    border: solid 1px ${color.Gray[1]};
`

const Text = styled.div`
    font-size: 13px;
    color: ${color.Black};
    font-weight: 400;
    text-align: center;
    letter-spacing: -1.09012px;
`