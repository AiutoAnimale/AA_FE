import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../../style/theme";
import DataContainer from "../../Main/DataContainer/index";
import PopularDataContainer from "../../Main/PopularDataContainer";

import axios from "axios";

export default function CommunityMain() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  const List = [
    {
      text: "우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ",
      number: "1",
      tag: "일상",
      user: "초코 보호자",
      count: "13",
    },
    {
      text: "우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ",
      number: "2",
      tag: "일상",
      user: "초코 보호자",
      count: "13",
    },
    {
      text: "우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ",
      number: "3",
      tag: "일상",
      user: "초코 보호자",
      count: "13",
    },
    {
      text: "우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ",
      number: "4",
      tag: "일상",
      user: "초코 보호자",
      count: "13",
    },
    {
      text: "우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ",
      number: "5",
      tag: "일상",
      user: "초코 보호자",
      count: "13",
    },
  ];

  const PopularList = [
    {
      text: "우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ",
      tag: "일상",
      user: "초코 보호자",
      count: "13",
      textContent:
        "퍼어어어어어어어ㅓ어어어어어어어ㅓ어어어어어어어어어어ㅓ어어어어어엉",
    },
  ];

/*
  const getViewAllList = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/feeds/viewAllList`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
        }
      });

      const data = response.data;

      setList([{
        title: data.title,
        body: data.body,
        tag: data.tag,
        emergency: data.emergency,
      }]); 
      // 배열로 감싸서 상태 업데이트

      
    }
    catch (error) {
      console.log("전체 게시물을 불러오는데 실패 : ", error.message);
    }
  }

  useEffect(() => {
    getViewAllList();
  }, []);
*/


  return (
    <>
      <Container>
        <PopularDataContainer
          data={PopularList}
          text="인기글"
          color={color.Orange[1]}
          btnText="자세히 보기"
        />
        
        <DataContainer
          data={list}
          text="커뮤니티"
          color={color.Orange[1]}
          subText="서로의 이야기를 나누어봐요"
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  row-gap: 20px;
  padding-bottom: 80px;
  background-color: ${color.White};
`;
