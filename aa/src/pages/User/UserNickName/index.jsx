import { useState } from "react";
import { color } from "../../../style/theme";
import { breakpoints } from "../../../style/device";
import styled from "styled-components";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import NextButton from "../../../components/Next";

export default function UserNickName() {
    return (
        <>
            <Container>
                <MainContainer>
                    <TextContainer>
                        <Text color={color.Black}>회원가입</Text>
                        <NextButton onClick={() => console.log("다음")} />
                    </TextContainer>
                    <InputContainer>
                        <Input text={"닉네임"} placeholder={"닉네임을 입력하세요"} type={'text'} />
                    </InputContainer>
                    <Button onClick={() => console.log("다음")} text={"다음"} />
                </MainContainer>
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 100vh;
    padding: 0 5%;
`;

const MainContainer = styled.div`
    background-color: ${color.White};
    width: 100%;
    max-width: 455px;
    max-height: 400px;
    height: 80%;
    border: solid 1.3px ${color.Gray[1]};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const Text = styled.div`
    padding: 10px 0px;
    font-size: 2rem;
    font-weight: bolder;
    color: ${props => props.color};
    user-select: none;
`

const TextContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const InputContainer = styled.div`
    width: 80%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 20px;
`