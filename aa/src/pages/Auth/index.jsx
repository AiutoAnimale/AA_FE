import { useEffect, useState } from "react";
import { color } from "../../style/theme";
import { breakpoints } from "../../style/device";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";
import NextButton from "../../components/Next";
import axios from "axios";

// 완료

export default function Login() {
    const navigate = useNavigate();
    const [ pwState, setPwState ] = useState(false);
    const [ loginData, setLoginData ] = useState({
        userid: "",
        userpw: "",
    });
    
    const handleInputChange = (text, field) => {
        setLoginData(prevData => ({
          ...prevData,
          [field]: text
        }));
        console.log(text);
    }

    // useEffect(() => {
    //     console.log(loginData);
    // }, [loginData]);


    const onClickLogin = async (e) => {
        e.preventDefault(); // 창이 새로고침 되는 걸 막음

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_KEY}/users/login`, {
                userid: loginData.userid,
                userpw: loginData.userpw
            })

            if (response.status === 201) {
                localStorage.setItem("token", response.data.accessToken);
                console.log("받은 토큰: ", response.data.accessToken);

                alert("로그인 성공!");
                navigate("/");
            }
           
        }
        catch (error) {
            console.log("로그인 실패:", error.message);
            console.log(loginData);
            console.log(`${process.env.REACT_APP_API_KEY} 출력` );
            alert("로그인 실패");
        }
    }

    const onClickSignup = () => {
        
        navigate("/signupdata");
    }

    return (
        <>
            <Container>
                <MainContainer>
                    <TextContainer>
                        <Text color={color.Black}>로그인</Text>
                        <NextButton onClick={() => onClickLogin()} />
                    </TextContainer>
                    <InputContainer>
                        <Input
                        text={"아이디"}
                        placeholder={"아이디를 입력하세요"}
                        type={'text'}
                        state={'text'}
                        onGetText={(text) => handleInputChange(text, "userid")}
                        />
                        <Input
                        text={"비밀번호"}
                        placeholder={"비밀번호를 입력하세요"}
                        type={pwState === true ? 'text' : 'password'}
                        state={'password'}
                        onClick={() => setPwState(!pwState)}
                        onGetText={(text) => handleInputChange(text, "userpw")}
                        />
                    </InputContainer>
                    <Button onClick={onClickLogin} text={"로그인"} type="submit"/>
                    <Linked><Linking onClick={() => onClickSignup()}>회원가입</Linking> 하러가기</Linked>
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
    max-height: 530px;
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

const Linking = styled.div`
    font-size: 18px;
    font-weight: medium;
    color: ${color.Orange[5]};
    border-bottom: solid 1px ${color.Orange[5]};

    &:hover {
        cursor: pointer;
    }
`

const Linked = styled.div`
    font-size: 18px;
    font-weight: medium;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`