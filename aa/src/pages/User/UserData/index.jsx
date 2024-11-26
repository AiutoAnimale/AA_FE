import { useState } from "react";
import { color } from "../../../style/theme";
import { breakpoints } from "../../../style/device";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import NextButton from "../../../components/Next";
// import axios from "axios";





export default function UserData() {
    const navigate = useNavigate();
    const [ pwState, setPwState ] = useState(false);
    const [ signupData, setSignupData ] = useState({
		userid : "",
		userpw : "",
		nickname : "",
		pet_name : "",
		pet_sex : "",
		species : "",
		pet_birth : "",
		region : "",
    });
    
    const handleInputChange = (text, field) => {
        setSignupData(prevData => ({
          ...prevData,
          [field]: text
        }));
        console.log(signupData);
    }

    const validateInput = () => {
        if (signupData.userid.length < 5 || signupData.userid.length > 25) {
            alert("아이디는 5자에서 25자 사이여야 합니다.");
            return false;
        }
        if (signupData.userpw.length < 5 || signupData.userpw.length > 40) {
            alert("비밀번호는 5자에서 40자 사이여야 합니다.");
            return false;
        }
        return true;
    }

    const onClickNext = () => {
        if (!validateInput()) {
            return; // 검증 실패 시 함수 종료
        }

        navigate("/signupNick", { state: { data: signupData } });
    }



    /*const onSignup = async ( signuDate ) => {
        try {
            const response = await axios.post( "", {
                "userid" : signuDate.userid,
                "userpw" : signuDate.userPw,
                "nickname" : signuDate.nickname,
                "pet_name" : signuDate.pet_name,
                "pet_sex" : signuDate.pet_sex,
                "species" : signuDate.species,
                "pet_birth" : signuDate.pet_birth,
                "region" : signuDate.region 
            });
            
            if (response.status === 201) {
                console.log("회원가입에 성공");
            }
        }
        catch (error){
            if (error.response) {
                if (error.response === 409) {
                    alert("중복된 아이디입니다.");
                }
                else if (error.response === 400) {
                    alert("요청에 실패하였습니다.")
                }
            }
            
        }
    }*/
    


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
                    <Button onClick={() => onClickNext()} text={"다음"} type="submit"/>
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