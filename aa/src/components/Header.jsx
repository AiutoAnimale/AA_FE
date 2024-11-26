import { useState, useEffect } from "react";
import { breakpoints } from "../style/device";
import { color } from "../style/theme";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LogoSVG } from "../assets/Logo.svg";

import axios from "axios";

// 완료

export default function Header() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [nickname, setNickname] = useState('');

  const MainList = [
    { name: "커뮤니티", path: "/communitymain" },
    { name: "실종", path: "/missingmain" },
  ];
  
  const onInfo = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/users/info`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
        },
      });

      if (response.data && response.data.nickname) {
        console.log(response.data.nickname);
        setNickname(response.data.nickname);
        setIsLogin(true); 
      }
    }
    catch (error) {
      console.error("사용자 정보 가져오기 오류:", error.message);
    }
  }

  useEffect(() => {
    console.log('실시간')
    if (!isLogin) {
      onInfo();
    }
  }, [isLogin]);



  return (
    <>
      <Container>
        <List>
          <DataContainer>
            <TextLogo onClick={() => navigate("/")} />
            {MainList.map((item, index) => (
              <Data key={index} onClick={() => navigate(item.path)}>
                {item.name}
              </Data>
            ))}
          </DataContainer>
          {isLogin ? (
            <Data>{nickname} 님</Data>
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
  color: ${color.Gray[8]};
  border: none;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: ${breakpoints.mobileSmall}) {
    display: none;
  }
`;

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
`;

const TextLogo = styled(LogoSVG)``;
