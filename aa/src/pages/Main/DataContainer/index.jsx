import { useState } from "react";
import { color } from "../../../style/theme";
import { breakpoints } from "../../../style/device";
import styled from "styled-components";

import UserName from "../../../components/UserName";
import Tag from "../../../components/Tag";
import MainText from "../../../components/MainText";

export default function DataContainer(props) {

    return (
                <Div>
                    <TextDiv>
                        <Text color={color.Black}>{props.firstText}</Text>
                        <Text color={props.color}>{props.secondText}</Text>
                    </TextDiv>
                    <Bottom>
                        {props.data.map((item, index) => (
                            <BottomList border={item.number == 1 ? "none" : "solid"}>
                                <Number color={item.number <= 3 ? color.Orange[1] : color.Black}>{item.number}</Number>
                                <Column>
                                    <MainDiv state={"flex-start"}>
                                        <Tag type={'tag'} backColor={color.Orange[3]} color={color.Orange[2]} data={`#${item.tag}`} />
                                        <MainText data={item.text} />
                                    </MainDiv>
                                    <MainDiv state={"space-between"}>
                                        <UserName data={item.user} />
                                        <Tag backColor={color.Gray[0]} color={color.Gray[7]} data={`댓글 ${item.count}`} />
                                    </MainDiv>
                                </Column>
                            </BottomList>
                        ))}
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

const MainDiv = styled.div`
    gap: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-content: ${props => props.state};

    @media screen and (max-width: ${breakpoints.mobileSmall}) {
        width: 87%;
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