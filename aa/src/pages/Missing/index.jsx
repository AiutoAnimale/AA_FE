import { useState } from "react";
import styled from "styled-components";
import { color } from "../../style/theme";

import UserName from "../../components/UserName";
import MainText from "../../components/MainText";
import Tag from "../../components/Tag";
import ContentsText from "../../components/ContentsText";

import CreateContainer from "../../components/CreateContainer";

export default function Missing() {

    const List = [
        { text: "우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ", number: "1", tag: "실종", user: "초코 보호자", count: "13", state: "대전광역시 쏼라쏼ㄹ라", time: "오전 6시 23분", unique: "새침함. 눈 동그래" },
        { text: "우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ", number: "2", tag: "실종", user: "초코 보호자", count: "13", state: "대전광역시 쏼라쏼ㄹ라", time: "오전 6시 23분", unique: "새침함. 눈 동그래" },
        { text: "우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ", number: "3", tag: "실종", user: "초코 보호자", count: "13", state: "대전광역시 쏼라쏼ㄹ라", time: "오전 6시 23분", unique: "새침함. 눈 동그래" },
        { text: "우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ", number: "4", tag: "실종", user: "초코 보호자", count: "13", state: "대전광역시 쏼라쏼ㄹ라", time: "오전 6시 23분", unique: "새침함. 눈 동그래" },
        { text: "우리 푕힁이가 대덕SW고 대마냥이랑 만나서 싸움 ㄷㄷ", number: "5", tag: "실종", user: "초코 보호자", count: "13", state: "대전광역시 쏼라쏼ㄹ라", time: "오전 6시 23분", unique: "새침함. 눈 동그래" },
     ];

    return (
        <>
            <Container>
                <CreateContainer />
                <Center>
                    <PostContainer>
                        <BoldText>실종</BoldText>
                        <MediumText>저희 아이가 사라졌어요! 함께 찾아주세요</MediumText>
                        <PostBox>
                            {List.map((item, index) => (
                                <PopularPost>
                                    <PostTop>
                                        <Tag type={'tag'} backColor={color.Orange[3]} color={color.Orange[2]} data={`#${item.tag}`} />
                                        <MainText data={item.text} />
                                    </PostTop>
                                    <PostMid>
                                        <ContentsText data={`실종 위치 : ${item.state}`} font={'14.8px'} />
                                        <ContentsText data={`실종 시간 : ${item.time}`} font={'14.8px'} />
                                        <ContentsText data={`특징 : ${item.unique}`} font={'14.8px'} />
                                    </PostMid>
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

const PostMid = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 5px;
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