import { useState, useEffect } from "react";
import { color } from "../../../style/theme";
import styled from "styled-components";
import UserName from "../../../components/UserName";
import Tag from "../../../components/Tag";
import MainText from "../../../components/MainText";


import { useNavigate } from "react-router-dom";
import { getViewAllList } from "../../../apis/getViewAllList";



export default function DataContainer(props) {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  /*

  // api 태그 안가져왔을 때.
  const getViewAllList = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/feeds/viewAllList`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });

      setList(response.data);
    } catch (error) {
      console.log("전체 게시물을 불러오는데 실패 : ", error.message);
    }
  };*/

  useEffect(() => {
    const getView = async () => {
      try {
        const data = await getViewAllList();
        setList(data);
        console.log("바뀐거임");
      }
      catch (error) {
        console.error("게시물 내용 가져오는데 실패 : ", error.message);
        // console.error("게시물 내용 가져오는데 실패 : ", error.message);
      }
    }
    getView();
  }, []);


  const handleClick = (idx) => {
    navigate('/communityview', { state: { idx } }); // 클릭 시 idx를 state로 전달
  };

  return (
    <Div>
      <TextDiv>
        <Text>{props.text}</Text>
        {props.subText && <SubText>{props.subText}</SubText>}{" "}
        <MoreBtn onClick={props.event}>{props.btnText}</MoreBtn>
      </TextDiv>
      <Bottom>
        {list.length > 1 && (
          list.slice(0, -1).slice(-5).map((item, index) => (
            <BottomList key={index} onClick={() => handleClick(item.idx)} >
               {/* <BottomList key={index} > */}
              <Number>{index + 1}</Number>
              <Column>
                <Tag
                  type={"tag"}
                  backColor={color.Orange[0]}
                  color={color.Orange[3]}
                  data={item.emergency === 0 ? "#일상" : "#실종"}
                />
                <MainText data={item.title} size={"18px"} />
                <UserName data={item.nickname} />
              </Column>
            </BottomList>
          ))
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
  font-size: 12px;
  font-weight: bold;
  color: ${color.Gray[5]};
  margin-top: 10px;
  user-select: none;
`;

const TextDiv = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-bottom: solid 1px ${color.Gray[1]};
  width: 100%;
  padding-bottom: 10px;
`;

const Bottom = styled.div`
  width: 100%;
  height: 630px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BottomList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
  gap: 30px;
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
`;
