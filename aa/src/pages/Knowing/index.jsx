import { useState } from "react";
import styled from "styled-components";
import { color } from "../../style/theme";

import UserName from "../../components/UserName";
import MainText from "../../components/MainText";
import Tag from "../../components/Tag";
import ContentsText from "../../components/ContentsText";
import Title from "../../components/Title";

import CreateContainer from "../../components/CreateContainer";

export default function Knowing() {
    const [ state, setState ] = useState('전체');

    const onPressData = (item) => {
        setState(item);
    };

    const List = [
        { text: "우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ", number: "1", tag: "일상", user: "초코 보호자", count: "13", contents: "아무말 이건 그냥 상세내용의 일부분일 뿐입니다. 아무말 아무말 쏼라쏼라 유후~ 쏴롸ㅗㄹ아ㅗㄹ아ㅗㅇ로알ㅇㅇ라와론ㅇㄹㅁㄴㄹ 나라 옵서예 이게 무슨ㄴ 소리 =인가 ㅇㅅㅇㅅㅇ아니 디자인 쉽알", },
        { text: "우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ", number: "2", tag: "일상", user: "초코 보호자", count: "13", contents: "아무말 이건 그냥 상세내용의 일부분일 뿐입니다. 아무말 아무말 쏼라쏼라 유후~ 쏴롸ㅗㄹ아ㅗㄹ아ㅗㅇ로알ㅇㅇ라와론ㅇㄹㅁㄴㄹ 나라 옵서예 이게 무슨ㄴ 소리 =인가 ㅇㅅㅇㅅㅇ아니 디자인 쉽알",  },
        { text: "우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ", number: "3", tag: "일상", user: "초코 보호자", count: "13", contents: "아무말 이건 그냥 상세내용의 일부분일 뿐입니다. 아무말 아무말 쏼라쏼라 유후~ 쏴롸ㅗㄹ아ㅗㄹ아ㅗㅇ로알ㅇㅇ라와론ㅇㄹㅁㄴㄹ 나라 옵서예 이게 무슨ㄴ 소리 =인가 ㅇㅅㅇㅅㅇ아니 디자인 쉽알",  },
        { text: "우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ", number: "4", tag: "일상", user: "초코 보호자", count: "13", contents: "아무말 이건 그냥 상세내용의 일부분일 뿐입니다. 아무말 아무말 쏼라쏼라 유후~ 쏴롸ㅗㄹ아ㅗㄹ아ㅗㅇ로알ㅇㅇ라와론ㅇㄹㅁㄴㄹ 나라 옵서예 이게 무슨ㄴ 소리 =인가 ㅇㅅㅇㅅㅇ아니 디자인 쉽알",  },
        { text: "우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ", number: "5", tag: "일상", user: "초코 보호자", count: "13", contents: "아무말 이건 그냥 상세내용의 일부분일 뿐입니다. 아무말 아무말 쏼라쏼라 유후~ 쏴롸ㅗㄹ아ㅗㄹ아ㅗㅇ로알ㅇㅇ라와론ㅇㄹㅁㄴㄹ 나라 옵서예 이게 무슨ㄴ 소리 =인가 ㅇㅅㅇㅅㅇ아니 디자인 쉽알",  },
     ];

    const TagList = [
        { data: '전체', en: '' }, 
        { data: '종별 정보', en: '' }, 
        { data: '추천', en: '' }, 
        { data: '건강', en: '' }, 
        { data: '훈련', en: '' }, 
        { data: '질병과 치료', en: '' }, 
        { data: '행동 이해', en: '' }, 
        { data: '동물 심리', en: '' }, 
        { data: '자연환경', en: '' }, 
        { data: '입양 가이드', en: '' }, 
        { data: '전문가 상담', en: '' }, 
        { data: '응급 처치', en: '' }, 
        { data: '예방 접종', en: '' }, 
        { data: '영양 정보', en: '' }, 
        { data: '동물 복지', en: '' },
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
                            <BoldText>지식 톡톡</BoldText>
                            <MediumText>우리 함께 서로의 반려동물 지식을 나눠요</MediumText>
                            <PostBox>
                                {List.map((item, index) => (
                                    <PopularPost>
                                        <PostTop>
                                            <Tag type={'tag'} backColor={color.Orange[3]} color={color.Orange[2]} data={`#${item.tag}`} />
                                            <MainText data={item.text} />
                                        </PostTop>
                                        <ContentsText data={item.contents} font={'14.8px'} />
                                        <PostBottom>
                                            <UserName data={item.user} />
                                            <Tag backColor={color.Gray[0]} color={color.Gray[7]} data={`댓글 ${item.count}`} />
                                        </PostBottom>
                                    </PopularPost>
                                ))}
                            </PostBox>
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
    width: 90%;
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

const PostBox = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 25px;
`