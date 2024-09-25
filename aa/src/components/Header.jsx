import { useState } from "react";
import { breakpoints } from "../style/device";
import { color } from "../style/theme";
import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../assets/Logo.svg";

export default function Header() {

    return (
        <>
            <Container>
                <List>
                    <TextLogo />
                    <Data>실종</Data>
                    <Data>커뮤니티</Data>
                    <Data>지식공유</Data>
                </List>
                <Btn>로그인하기</Btn>
            </Container>
        </>
    );
}

const Container = styled.header`
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${color.White};
`;

const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: ${breakpoints.tabletLarge}) {
        gap: 30px;
    }
    @media screen and (max-width: ${breakpoints.tabletSmall}) {
        gap: 20px;
   }
   @media screen and (max-width: ${breakpoints.mobileSmall}) {
        gap: 10px;
   }
`

const Data = styled.button`
    background-color: ${color.White};
    border: none;
    font-size: 1rem;

    &:hover {
        cursor: pointer;
    }
`

const Btn = styled.button`
    padding: 6px 16px;
    background-color: ${color.White};
    border: solid 1px ${color.Gray[2]};
    font-size: 0.8rem;
    font-weight: bolder;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }
`

const TextLogo = styled(LogoSVG)``;