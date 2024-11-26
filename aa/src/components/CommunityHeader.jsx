import { useState } from "react";
import { breakpoints } from "../style/device";
import { color } from "../style/theme";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LogoSVG } from "../assets/Logo.svg";

export default function Header() {
  const navigate = useNavigate();

  const MainList = [
    { name: "커뮤니티", path: "/communitymain" },
    { name: "실종", path: "/missingmain" },
  ];

  return (
    <>
      <Container>
        <List>
          <DataContainer>
            <TextLogo onClick={() => navigate("/")} />
            {MainList.map((item, index) => (
              <Data
                key={index}
                onClick={() => navigate(item.path)}
                isCommunity={item.name === "커뮤니티"}
              >
                {item.name}
              </Data>
            ))}
          </DataContainer>
          <CreatePostButton onClick={() => navigate("/communitycreate")}>
            커뮤니티 글 작성하기
          </CreatePostButton>
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
  max-width: 885px;
  padding: 0px 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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
`;

const Data = styled.button`
  background-color: ${color.White};
  color: ${(props) => (props.isCommunity ? "#FF823F" : color.Gray[8])};
  border: none;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: ${breakpoints.mobileSmall}) {
    display: none;
  }
`;

const CreatePostButton = styled.button`
  padding: 6px 16px;
  background-color: #ff823f;
  color: white;
  border: none;
  font-size: 0.8rem;
  font-weight: bolder;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const TextLogo = styled(LogoSVG)``;
