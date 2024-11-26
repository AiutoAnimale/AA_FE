import { useEffect, useState } from "react";
import { color } from "../../../style/theme";
import { breakpoints } from "../../../style/device";
import { useNavigate, useLocation } from 'react-router-dom';
import styled from "styled-components";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import NextButton from "../../../components/Next";

export default function UserNickName() {
    const navigate = useNavigate();
    const location = useLocation();
    const [ signupData, setSignupData ] = useState();

    useEffect(() => {
        setSignupData(location.state.data);
    }, []);

    // useEffect(() => {
    //     console.log(signupData);
    // }, [signupData])

    const handleInputChange = (text, field) => {
        setSignupData(prevData => ({
          ...prevData,
          [field]: text
        }));
    }

    const onClickNext = () => {
        navigate("/signupPet", { state: { data: signupData } });
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
                        text={"닉네임"}
                        placeholder={"닉네임을 입력하세요"}
                        type={'text'}
                        onGetText={(text) => handleInputChange(text, "nickname")}
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
    background-color: ${color.Gray[0]};
`;

const MainContainer = styled.div`
    background-color: ${color.White};
    width: 100%;
    max-width: 455px;
    max-height: 400px;
    height: 80%;
    border: solid 1.3px ${color.Gray[2]};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const Text = styled.div`
    padding: 10px 0px;
    font-size: 39px;
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
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`