import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { color } from "../../../style/theme";
import { breakpoints } from "../../../style/device";
import styled from "styled-components";

import UserName from "../../../components/UserName";
import Tag from "../../../components/Tag";
import MainText from "../../../components/MainText";

import axios from "axios";
// import { getViewAllList } from "../../../apis/getViewAllList";

// 커뮤니티 인기 게시물

export default function PopularDataContainer(props) {
  const location = useLocation();

  const isCommunityView = location.pathname === "/communityview";

  const [list, setList] = useState([]);

  const getViewAllList = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/feeds/viewAllList`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });

      setList(response.data);
    }
    catch (error) {
      console.log("전체 게시물을 불러오는데 실패 : ", error.message);
    }
  }

  useEffect(() => {
    getViewAllList();
  }, []);



  return (
    <Div>
      {!isCommunityView && (
        <TextDiv>
          <Text>{props.text}</Text>
          <MoreBtn onClick={props.event}>{props.btnText}</MoreBtn>
        </TextDiv>
      )}
      {props.subText && <SubText>{props.subText}</SubText>}
      <Bottom>
        {list.length > 0 && ( 
          <>
            <BottomList key={list.length - 1}>
              <Column>
                <Tag
                  type={"tag"}
                  backColor={color.Orange[0]}
                  color={color.Orange[3]}
                  data={"#일상"} 
                  width="102px"
                  height="53px"
                  fontSize="20px"
                  fontWeight="bold"
                />
                <MainText data={list[list.length - 1].title} size={"25px"} fontWeight={"bold"} />
              </Column>
              <UserNameWrapper>
                <UserName data={list[list.length - 1].nickname} />
              </UserNameWrapper>
            </BottomList>
            <InnerText>{list[list.length - 1].body || "내용이 없습니다."}</InnerText>
            <Image />
          </>
        )}

      </Bottom>
    </Div>
  );
}

const Div = styled.div`
  max-width: 920px;
  width: 90%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

const Text = styled.div`
  font-size: 22px;
  font-weight: bolder;
  color: ${color.Black};
  user-select: none;
`;

const SubText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${color.Gray[5]};
  margin-top: 10px;
  user-select: none;
`;

const TextDiv = styled.div`
  height: 94px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px ${color.Gray[1]};
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BottomList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
  gap: 30px;
  flex-wrap: wrap;
`;

const MoreBtn = styled.button`
  background-color: ${color.White};
  border: none;
  font-size: 18px;
  font-weight: medium;
  color: ${color.Gray[7]};
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

const Number = styled.div`
  font-size: 24px;
  font-weight: medium;
  color: ${color.Orange[4]};
  user-select: none;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  row-gap: 10px;
  flex: 1;
`;

const UserNameWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

const InnerText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${color.Black};
  /* margin-top: 20px; */
  padding: 25px 0;
  text-align: left;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  /* margin-left: 20px; */
  
`;

const Image = styled.div`
  width: 280px;
  height: 380px;
  border: solid 1px ${color.Orange[3]};
  border-radius: 10px;
  /* margin-left: 20px; */
`;

