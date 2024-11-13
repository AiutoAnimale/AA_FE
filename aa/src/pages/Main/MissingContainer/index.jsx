import { useState } from "react";
import { color } from "../../../style/theme";
import { breakpoints } from "../../../style/device";
import styled from "styled-components";
import MissingBackground from "../../../assets/image/MissingBackground.png";
import { ReactComponent as SpeakerSVG } from "../../../assets/icon/MissingSpeaker.svg";

import ConfirmBtn from "../../../components/ConfirmBtn";

export default function MissingContainer(props) {
    return (
        <Bottom>
            <BottomContainer>
                <Speaker />
                <Text color={color.Black} weight={'bolder'} size={'1.1rem'}>우리 애가 사라졌어요!</Text>
                <TextContainer>
                    <Text color={color.Gray[5]} weight={'medium'} size={'1rem'}>사라진 동물들의 정보를</Text>
                    <Text color={color.Gray[5]} weight={'medium'} size={'1rem'}>업데이트하고 확인해보세요</Text>
                </TextContainer>
            </BottomContainer>
            <ConfirmBtn text={'실종 동물 확인하러가기'} font={'16px'} />
        </Bottom>
    );
}

const Text = styled.div`
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    color: ${props => props.color};
    user-select: none;
`

const Bottom = styled.div`
    width: 25%;
    padding: 20px 30px;
    background-color: ${color.White};
    border-radius: 20px;
    border: solid 1px ${color.Orange[4]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${MissingBackground});
    row-gap: 40px;

    @media screen and (max-width: ${breakpoints.tabletSmall}) {
        background-position: center;
        padding: 2% 5%;
        width: 90%;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 5px;
`

const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
`

const Speaker = styled(SpeakerSVG)``;