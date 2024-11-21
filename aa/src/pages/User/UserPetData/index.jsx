import { useState } from "react";
import { color } from "../../../style/theme";
import { breakpoints } from "../../../style/device";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import NextButton from "../../../components/Next";
import Select from "../../../components/Select";

export default function UserPetData() {
    const navigate = useNavigate();
    const [ state, setState ] = useState('');

    const onClickNext = () => {
        navigate("/login");
    }

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
                        <Input text={"반려동물 이름"} placeholder={"반려동물의 이름을 입력하세요"} type={'text'} />
                        <Input text={"상세 종"} placeholder={"상세 종을 선택하세요"} type={'text'} />
                        <LabelContainer>
                            <TextLabel color={color.Black} size={'1rem'} bold={'bolder'}>성별</TextLabel>
                            <SelectContainer>
                                <Select
                                text={"여아"}
                                color={state=='여아' ? color.Orange[4] : color.Gray[2]}
                                backColor={state=='여아' ? color.Orange[0] : color.White}
                                onClick={() => setState('여아')}
                                />
                                <Select
                                text={"남아"}
                                color={state=='남아' ? color.Orange[4] : color.Gray[2]}
                                backColor={state=='남아' ? color.Orange[0] : color.White}
                                onClick={() => setState('남아')}
                                />
                            </SelectContainer>
                        </LabelContainer>
                        <Input text={"생년월일"} placeholder={"생년월일을 선택하세요"} type={'text'} />
                        <Input text={"지역"} placeholder={"사는 지역을 입력하세요 예) 서울특별시"} type={'text'} />
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