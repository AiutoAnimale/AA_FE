import { useState } from "react";
import { color } from "../../../style/theme";
import { breakpoints } from "../../../style/device";
import styled from "styled-components";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import NextButton from "../../../components/Next";
import Select from "../../../components/Select";

export default function UserPetData() {
    const [ state, setState ] = useState('');

    return (
        <>
            <Container>
                <MainContainer>
                    <TextContainer>
                        <Text color={color.Black}>회원가입</Text>
                        <NextButton onClick={() => console.log("다음")} />
                    </TextContainer>
                    <InputContainer>
                        <Input text={"반려동물 이름"} placeholder={"반려동물의 이름을 입력하세요"} type={'text'} />
                        <Input text={"상세 종"} placeholder={"상세 종을 선택하세요"} type={'text'} />
                        <LabelContainer>
                            <TextLabel>성별</TextLabel>
                            <SelectContainer>
                                <Select
                                text={"여아"}
                                color={state=='여아' ? color.Orange[1] : color.Gray[1]}
                                backColor={state=='여아' ? color.Orange[5] : color.White}
                                onClick={() => setState('여아')}
                                />
                                <Select
                                text={"남아"}
                                color={state=='남아' ? color.Blue[2] : color.Gray[1]}
                                backColor={state=='남아' ? color.Blue[3] : color.White}
                                onClick={() => setState('남아')}
                                />
                            </SelectContainer>
                        </LabelContainer>
                        <Input text={"생년월일"} placeholder={"생년월일을 선택하세요"} type={'text'} />
                        <Input text={"지역"} placeholder={"사는 지역을 입력하세요 예) 서울특별시"} type={'text'} />
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

const TextLabel = styled.label`
    font-size: 1rem;
    font-weight: bolder;
    color: ${color.Black};
    user-select: none;
`

const MainContainer = styled.div`
    background-color: ${color.White};
    width: 100%;
    max-width: 455px;
    max-height: 860px;
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
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 20px;
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