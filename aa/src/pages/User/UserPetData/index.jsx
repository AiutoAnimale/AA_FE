import { useState, useEffect } from "react";
import { color } from "../../../style/theme";
import { breakpoints } from "../../../style/device";
import { useNavigate, useLocation } from 'react-router-dom';
import styled from "styled-components";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import NextButton from "../../../components/Next";
import Select from "../../../components/Select";

import axios from "axios";

export default function UserPetData() {
    const navigate = useNavigate();
    const location = useLocation();
    const [ signupData, setSignupData ] = useState();
    const [ state, setState ] = useState('');

    useEffect(() => {
        setSignupData(location.state.data);
    }, []);

    useEffect(() => {
        console.log(signupData);
    }, [signupData])

    useEffect(() => {
        if(state === '여아') {
            handleInputChange('0', "pet_sex");
        } else {
            handleInputChange('1', "pet_sex");
        }
    }, [state])

    const handleInputChange = (text, field) => {
        setSignupData(prevData => ({
          ...prevData,
          [field]: text
        }));
    }

    const onClickNext = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_KEY}/users/signup`, signupData);
            if (response.status === 201) {
                console.log('회원가입에 성공하였습니다.');
                navigate('/login');
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 409) {
                    alert('중복된 아이디입니다.');
                    console.error('중복된 아이디입니다.', error.response.data?.message || 'No message provided');
                    navigate('/signupData');
                } else {
                    console.error('회원가입에 실패하였습니다.', error.response.data?.message || 'No message provided');
                    console.error('상태:', error.response.status);
                    console.log(signupData);
                }
            } else if (error.request) {
                
                console.error('서버로부터 응답이 없습니다.', error.message);
            } else {
                console.error('요청 중 문제가 발생했습니다.', error.message);
            }
        }
    };
    

    return (
        <>
            <Container>
                <MainContainer>
                    <TextContainer>
                        <Text color={color.Black}>회원가입</Text>
                        <NextButton onClick={() => onClickNext()} />
                    </TextContainer>
                    <TextLabel color={color.Orange[4]} size={'15px'} bold={'medium'}>반려동물 정보 작성</TextLabel>
                    <InputContainer>
                        <Input
                        text={"반려동물 이름"}
                        placeholder={"반려동물의 이름을 입력하세요"}
                        type={'text'}
                        onGetText={(text) => handleInputChange(text, "pet_name")}
                        />
                        <Input
                        text={"상세 종"}
                        placeholder={"상세 종을 선택하세요"}
                        type={'text'}
                        onGetText={(text) => handleInputChange(text, "species")}
                        />
                        <LabelContainer>
                            <TextLabel color={color.Black} size={'1rem'} bold={'bolder'}>성별</TextLabel>
                            <SelectContainer>
                                <Select
                                text={"여아"}
                                color={state==='여아' ? color.Orange[4] : color.Gray[2]}
                                backColor={state==='여아' ? color.Orange[0] : color.White}
                                onClick={() => setState('여아')}
                                />
                                <Select
                                text={"남아"}
                                color={state==='남아' ? color.Orange[4] : color.Gray[2]}
                                backColor={state==='남아' ? color.Orange[0] : color.White}
                                onClick={() => setState('남아')}
                                />
                            </SelectContainer>
                        </LabelContainer>
                        <Input
                        text={"생년월일"}
                        placeholder={"생년월일을 선택하세요"}
                        type={'text'}
                        onGetText={(text) => handleInputChange(text, "pet_birth")}
                        />
                        <Input
                        text={"지역"}
                        placeholder={"사는 지역을 입력하세요 예) 서울특별시"}
                        type={'text'}
                        onGetText={(text) => handleInputChange(text, "region")}
                        />
                    </InputContainer>
                    <Button onClick={() => onClickNext()} text={"회원가입"} />
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

const TextLabel = styled.label`
    font-size: ${props=>props.size};
    font-weight: ${props=>props.bold};
    color: ${props=>props.color};
    user-select: none;
    width: 80%;
`

const MainContainer = styled.div`
    background-color: ${color.White};
    width: 100%;
    max-width: 455px;
    max-height: 860px;
    height: 80%;
    border: solid 1.3px ${color.Gray[2]};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
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
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const LabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
`

const SelectContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`