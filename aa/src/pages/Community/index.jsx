import { useState } from "react";
import styled from "styled-components";
import { color } from "../../style/theme";

import UserName from "../../components/UserName";
import MainText from "../../components/MainText";
import Tag from "../../components/Tag";
import ContentsText from "../../components/ContentsText";
import Title from "../../components/Title";

import DataContainer from "./DataContainer";
import CreateContainer from "../../components/CreateContainer";

export default function Community() {
    const [ state, setState ] = useState('일상');

    const onPressData = (item) => {
        setState(item);
    };

    const Popular = {
        text: "우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ",
        number: "1",
        tag: "일상",
        user: "초코 보호자",
        count: "13",
        contents: "아무말 이건 그냥 상세내용의 일부분일 뿐입니다. 아무말 아무말 쏼라쏼라 유후~",
    }

    const TagList = [
        { data: '전체', en: '' },
        { data: '일상', en: '' }, 
        { data: '취미', en: '' }, 
        { data: '경험', en: '' }, 
        { data: '나눔', en: '' }, 
        { data: '동네', en: '' }, 
        { data: '먹방', en: '' }, 
        { data: '건강', en: '' }, 
        { data: '훈련', en: '' }, 
        { data: '쇼핑', en: '' }, 
        { data: '노하우', en: '' }, 
        { data: '입양', en: '' }, 
        { data: '친구', en: '' }, 
        { data: '여행', en: '' }, 
        { data: '자랑', en: '' }, 
        { data: '생일', en: '' }, 
        { data: '미용', en: '' }, 
        { data: '추천', en: '' }, 
        { data: 'SOS', en: '' }, 
        { data: '경고', en: '' }, 
    ]

    return (
        <>
            <Container>
                <CreateContainer />
                <Center>
                    <SelectContainer>
                        {TagList.map((item, index) => (
                                <MarginDiv>
                                    <Title data={item.data} state={state} onPress={() => onPressData(item.data)} />
                                    <MarginBox></MarginBox>
                                </MarginDiv>
                        ))}
                    </SelectContainer>
                    <PostContainer>
                        <BoldText>인기 게시글</BoldText>
                        <PopularPost>
                            <PostTop>
                                <Tag type={'tag'} backColor={color.Orange[3]} color={color.Orange[2]} data={`#${Popular.tag}`} />
                                <MainText data={Popular.text} />
                            </PostTop>
                            <ContentsText data={Popular.contents} />
                            <PostBottom>
                                <UserName data={Popular.user} />
                                <Tag backColor={color.Gray[0]} color={color.Gray[7]} data={`댓글 ${Popular.count}`} />
                            </PostBottom>
                        </PopularPost>
                    </PostContainer>
                    <PostContainer>
                        <BoldText>커뮤니티</BoldText>
                        <MediumText>서로의 이야기를 나눠봐요</MediumText>
                        <DataContainer />
                    </PostContainer>
                </Center>
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: ${color.Gray[11]};
`;

const Center = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    padding: 5px 20px 50px 20px;
    min-width: 370px;
    max-width: 673px;
    background-color: ${color.White};
`;

const BoldText = styled.div`
    font-size: 22px;
    font-weight: bolder;
    color: ${color.Black};
`

const MediumText = styled.div`
    font-size: 17px;
    font-weight: medium;
    color: ${color.Gray[4]};
`

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    row-gap: 10px;
`

const PopularPost = styled.div`
    border-radius: 10px;
    border: solid 1px ${color.Gray[1]};
    width: 50%;
    min-width: 350px;
    min-height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
    padding: 10px 15px;
`

const PostTop = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
`

const PostBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
`

const SelectContainer = styled.div`
    display: flex;
    border-bottom: solid 1px ${color.Gray[1]};
    overflow-x: scroll;
    white-space: nowrap;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const MarginDiv = styled.div`
    display: flex;
`

const MarginBox = styled.div`
    width: 18px;
    height: 46px;
`