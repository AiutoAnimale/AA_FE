import { useState } from "react";
import { breakpoints } from "../style/device";
import { color } from "../style/theme";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LogoSVG } from "../assets/Logo.svg";

export default function Header() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState();

    return (
        <>
            <Container>
                <List>
                    <DataContainer>
                        <TextLogo onClick={() => navigate("/main")} />
                        <Data onClick={() => navigate("/missing")}>실종</Data>
                        <Data onClick={() => navigate("/community")}>커뮤니티</Data>
                        <Data onClick={() => navigate("/knowing")}>지식톡톡</Data>
                    </DataContainer>
                    {isLogin ? (
                        <Data onClick={() => navigate("/info")}>님</Data>
                    ) : (
                        <Btn onClick={() => navigate("/login")}>로그인하기</Btn>
                    )}
                </List>
            </Container>
        </>
    );
}

const Container = styled.header`
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${color.White};
`;

const List = styled.div`
    width: 885px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const DataContainer = styled.div`
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
    color: ${color.Black};
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
    color: ${color.Black};
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }
`

const TextLogo = styled(LogoSVG)``;