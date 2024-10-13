import { useState } from "react";
import { color } from "../../../style/theme";
import { breakpoints } from "../../../style/device";
import styled from "styled-components";

export default function DataContainer(props) {
    return (
                <Div>
                    <TextDiv>
                        <Text color={color.Black}>{props.firstText}</Text>
                        <Text color={props.color}>{props.secondText}</Text>
                    </TextDiv>
                    <Bottom>
                        <BottomList border={"none"}>
                            <Number color={color.Orange[1]}>1</Number>
                            <Column>
                                <MainDiv state={"flex-start"}>
                                    <Tag backColor={color.Orange[3]} color={color.Orange[2]}>#일상</Tag>
                                    <MainText>우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ</MainText>
                                </MainDiv>
                                <MainDiv state={"space-between"}>
                                    <UserName>초코 보호자</UserName>
                                    <Tag backColor={color.Gray[0]} color={color.Gray[7]}>댓글 13</Tag>
                                </MainDiv>
                            </Column>
                        </BottomList>
                        <BottomList border={"solid"}>
                            <Number color={color.Orange[1]}>2</Number>
                            <Column>
                                <MainDiv state={"flex-start"}>
                                    <Tag backColor={color.Orange[3]} color={color.Orange[2]}>#일상</Tag>
                                    <MainText>우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ</MainText>
                                </MainDiv>
                                <MainDiv state={"space-between"}>
                                    <UserName>초코 보호자</UserName>
                                    <Tag backColor={color.Gray[0]} color={color.Gray[7]}>댓글 13</Tag>
                                </MainDiv>
                            </Column>
                        </BottomList>
                        <BottomList border={"solid"}>
                            <Number color={color.Orange[1]}>3</Number>
                            <Column>
                                <MainDiv state={"flex-start"}>
                                    <Tag backColor={color.Orange[3]} color={color.Orange[2]}>#일상</Tag>
                                    <MainText>우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ</MainText>
                                </MainDiv>
                                <MainDiv state={"space-between"}>
                                    <UserName>초코 보호자</UserName>
                                    <Tag backColor={color.Gray[0]} color={color.Gray[7]}>댓글 13</Tag>
                                </MainDiv>
                            </Column>
                        </BottomList>
                        <BottomList border={"solid"}>
                            <Number color={color.Black}>4</Number>
                            <Column>
                                <MainDiv state={"flex-start"}>
                                    <Tag backColor={color.Orange[3]} color={color.Orange[2]}>#일상</Tag>
                                    <MainText>우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ</MainText>
                                </MainDiv>
                                <MainDiv state={"space-between"}>
                                    <UserName>초코 보호자</UserName>
                                    <Tag backColor={color.Gray[0]} color={color.Gray[7]}>댓글 13</Tag>
                                </MainDiv>
                            </Column>
                        </BottomList>
                        <BottomList border={"solid"}>
                            <Number color={color.Black}>5</Number>
                            <Column>
                                <MainDiv state={"flex-start"}>
                                    <Tag backColor={color.Orange[3]} color={color.Orange[2]}>#일상</Tag>
                                    <MainText>우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ</MainText>
                                </MainDiv>
                                <MainDiv state={"space-between"}>
                                    <UserName>초코 보호자</UserName>
                                    <Tag backColor={color.Gray[0]} color={color.Gray[7]}>댓글 13</Tag>
                                </MainDiv>
                            </Column>
                        </BottomList>
                        <MoreBtn>{props.btnText}</MoreBtn>
                    </Bottom>
                </Div>
    );
}

const Div = styled.div`
    max-width: 885px;
    padding: 0 5%;
    width: 90%;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
`

const Text = styled.div`
    font-size: 1.5rem;
    font-weight: bolder;
    color: ${props => props.color};
    user-select: none;
`

const TextDiv = styled.div`
    gap: 5px;
    display: flex;
    align-items: center;
`

const Bottom = styled.div`
    width: 100%;
    height: 630px;
    background-color: ${color.White};
    border-radius: 20px;
    border: solid 1px ${color.Gray[1]};
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BottomList = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    height: 18%;
    border-top: ${props => props.border} 1.2px ${color.Gray[1]};
    gap: 30px;
`

const MoreBtn = styled.button`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${color.White};
    border: none;
    border-top: solid 1.2px ${color.Gray[1]};
    font-size: 1.1rem;
    font-weight: medium;
    color: ${color.Gray[7]};
    border-radius: 0px 0px 20px 20px;
    user-select: none;

    &:hover {
        cursor: pointer;
    }
`

const Number = styled.div`
    font-size: 1.3rem;
    font-weight: medium;
    color: ${props => props.color};
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
    font-size: 1.1rem;
    font-weight: medium;
    color: ${color.Black};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    user-select: none;
`

const MainDiv = styled.div`
    gap: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-content: ${props => props.state};

    @media screen and (min-width: ${breakpoints.tabletLarge}) {
        width: 95%;
    }
    @media screen and (max-width: ${breakpoints.tabletSmall}) {
        width: 90%;
    }
    @media screen and (max-width: ${breakpoints.mobileSmall}) {
        width: 80%;
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    row-gap: 10px;
`

const UserName = styled.div`
    font-size: 1rem;
    font-weight: medium;
    color: ${color.Gray[8]};
    user-select: none;
`