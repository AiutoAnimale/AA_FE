import { useState } from "react";
import { breakpoints } from "../style/device";
import { color } from "../style/theme";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LogoSVG } from "../assets/Logo.svg";
import { ReactComponent as GitSVG } from "../assets/icon/github.svg";

export default function Footer() {
    const navigate = useNavigate();

    return (
        <>
            <Container>
                <List>
                    <RowGap>
                        <TextLogo />
                        <Data>© 2024 AiutoAnimale</Data>
                    </RowGap>
                    <RowGap>
                        <Div>
                            <Data>주소 : 대전광역시 유성구 가정북로 76</Data>
                            <Data>(대덕SW마이스터고등학교)</Data>
                        </Div>
                        <GapContainer>
                            <GitLogo/>
                            <Data>github.com/AiutoAnimale</Data>
                        </GapContainer>
                    </RowGap>
                    <GapContainer>
                        <Data>이용약관</Data>
                        <Border />
                        <Data>개인정보처리방침</Data>
                    </GapContainer>
                </List>
            </Container>
        </>
    );
}

const Container = styled.footer`
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${color.Gray[0]};
`;

const List = styled.div`
    max-width: 885px;
    padding: 0px 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    row-gap: 20px;
`

const Data = styled.div`
    font-size: 1rem;
    user-select: none;
    color: ${color.Gray[9]};

    @media screen and (max-width: ${breakpoints.tabletSmall}) {
        font-size: 0.9rem;
    }
    @media screen and (max-width: ${breakpoints.mobileSmall}) {
        font-size: 0.8rem;
    }
`

const GapContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const RowGap = styled.div`
    row-gap: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Border = styled.div`
    width: 1px;
    height: 25px;
    background-color: ${color.Gray[9]};
`

const Div = styled.div`
    display: flex;

    @media screen and (max-width: ${breakpoints.mobileSmall}) {
        flex-direction: column;
    }
`

const TextLogo = styled(LogoSVG)``;
const GitLogo = styled(GitSVG)``;