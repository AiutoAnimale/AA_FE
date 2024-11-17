import { useState } from "react";
import { color } from "../../../style/theme";
import { breakpoints } from "../../../style/device";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import NextButton from "../../../components/Next";

export default function UserData() {
    const navigate = useNavigate();
    const [ pwState, setPwState ] = useState(false);

    const onClickNext = () => {
        navigate("/signupNick");
    }
    
    return (
        <>
            <Container>
                <MainContainer>
                    <TextContainer>
                        <Text color={color.Black}>회원가입</Text>
                        <NextButton onClick={() => onClickNext()} />
                    </TextContainer>
                    <InputContainer>
                        <Input
                        text={"아이디"}
                        placeholder={"아이디를 입력하세요"}
                        type={'text'}
                        state={'text'}
                        />
                        <Input
                        text={"비밀번호"}
                        placeholder={"비밀번호를 입력하세요"}
                        type={pwState == true ? 'text' : 'password'}
                        state={'password'}
                        onClick={() => setPwState(!pwState)}
                        />
                    </InputContainer>
                    <Button onClick={() => onClickNext()} text={"다음"} />
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
    background-color: ${color.Gray[11]};
`;

const MainContainer = styled.div`
    background-color: ${color.White};
    width: 100%;
    max-width: 455px;
    max-height: 530px;
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