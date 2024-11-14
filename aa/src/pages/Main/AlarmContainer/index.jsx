import { useState } from "react";
import { color } from "../../../style/theme";
import { breakpoints } from "../../../style/device";
import styled from "styled-components";

import Tag from "../../../components/Tag";
import MainText from "../../../components/MainText";

export default function AlarmContainer(props) {

    return (
        <Bottom>
            <Text color={color.Black}>소식</Text>
            {props.data.map((item, index) => (
                <BottomList border={item.number=='1' ? "none" : "solid"}>
                    <Tag type={'tag'} backColor={color.Blue[1]} color={color.Blue[0]} data={item.user} />
                    <MainText data={item.text} size={'16px'}/>
                </BottomList>
            ))}
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