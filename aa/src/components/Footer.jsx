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
                        <Data>주소 : 대전광역시 유성구 가정북로 76 (대덕소프트웨어마이스터고등학교)</Data>
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

const Container = styled.header`
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${color.White};
`;

const List = styled.div`
    max-width: 885px;
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
    color: ${color.Black};
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
    background-color: ${color.Black};
`

const TextLogo = styled(LogoSVG)``;
const GitLogo = styled(GitSVG)``;