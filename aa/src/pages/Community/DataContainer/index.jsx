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
            {props.data.map((item, index) => (
            <BottomList>
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
        </Div>
    );
}

const Div = styled.div`
    margin: 5% 0;
    max-width: 885px;
    padding: 0 5%;
    width: 90%;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
`

const BottomList = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 18%;
    padding-bottom: 3%;
    border-bottom: solid 1.2px ${color.Gray[1]};
    gap: 30px;
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