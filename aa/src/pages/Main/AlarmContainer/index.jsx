import { useState } from "react";
import { color } from "../../../style/theme";
import { breakpoints } from "../../../style/device";
import styled from "styled-components";

export default function AlarmContainer(props) {
    return (
        <Bottom>
            <Text color={color.Black}>소식</Text>
            <BottomList border={"none"}>
                <Tag backColor={color.Blue[1]} color={color.Blue[0]}>운영자</Tag>
                <MainText>우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ</MainText>
            </BottomList>
            <BottomList border={"solid"}>
                <Tag backColor={color.Blue[1]} color={color.Blue[0]}>운영자</Tag>
                <MainText>우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ</MainText>
            </BottomList>
            <BottomList border={"solid"}>
                <Tag backColor={color.Blue[1]} color={color.Blue[0]}>운영자</Tag>
                <MainText>우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ</MainText>
            </BottomList>
            <BottomList border={"solid"}>
                <Tag backColor={color.Blue[1]} color={color.Blue[0]}>운영자</Tag>
                <MainText>우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ</MainText>
            </BottomList>
        </Bottom>
    );
}

const Text = styled.div`
    width: 90%;
    padding: 10px 0px;
    font-size: 1.5rem;
    font-weight: bolder;
    color: ${props => props.color};
    user-select: none;
`

const Bottom = styled.div`
    width: 55%;
    padding: 20px 30px;
    background-color: ${color.White};
    border-radius: 20px;
    border: solid 1px ${color.Gray[1]};
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: ${breakpoints.tabletSmall}) {
        padding: 2% 5%;
        width: 90%;
    }
`

const BottomList = styled.div`
    display: flex;
    align-items: center;
    width: 95%;
    padding: 10px 0;
    border-top: ${props => props.border} 1.2px ${color.Gray[1]};
    gap: 30px;
`

const Tag = styled.div`
    padding: 3px 7px;
    border-radius: 5px;
    background-color: ${props => props.backColor};
    font-size: 0.9rem;
    font-weight: medium;
    color: ${props => props.color};
    white-space: nowrap;
    user-select: none;
`

const MainText = styled.div`
    font-size: 0.9rem;
    font-weight: medium;
    color: ${color.Black};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    user-select: none;
`