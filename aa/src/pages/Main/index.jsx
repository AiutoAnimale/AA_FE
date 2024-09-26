import { useState } from "react";
import MainBackground from "../../assets/image/MainBackground.png";
import Event from "../../assets/image/Event.png";
import { color } from "../../style/theme";
import { breakpoints } from "../../style/device";
import styled from "styled-components";
import DataContainer from "./DataContainer";
import AlarmContainer from "./AlarmContainer";
import MissingContainer from "./MissingContainer";

export default function Main() {

    return (
        <>
            <Container>
                <BannerDiv>
                    <BannerInnerDiv>
                        <BannerLeft>
                            <Gap>
                                <BannerTag>#오늘날씨</BannerTag>
                                <BannerTag>#산책</BannerTag>
                            </Gap>
                            <TempContainer>최저 24° | 최고 33°</TempContainer>
                            <div>
                                <TempText font={'1.7rem'}>성남시 분당구의</TempText>
                                <TempText font={'1.5rem'}>오늘의 날씨는 비가 온다냐~!</TempText>
                            </div>
                            <Ment>오늘은 한 번 우비 & 우산 챙겨도 나쁘지 않을지도?</Ment>
                        </BannerLeft>
                        <Temp>24°</Temp>
                    </BannerInnerDiv>
                </BannerDiv>
                <DataContainer firstText="몽글몽글" secondText="커뮤니티" color={color.Orange[1]} btnText="커뮤니티 더보기" />
                <EventDiv>
                    <TempText font={'1.4rem'}>3월 13일 국제 강아지의 날 맞이 </TempText>
                    <TempText font={'1.5rem'}>강아지숲, 반려견 입장료 50% 할인이벤트</TempText>
                </EventDiv>
                <DataContainer firstText="지식" secondText="톡톡" color={color.Blue[0]} btnText="지식톡톡 더보기" />
                <Div>
                    <AlarmContainer />
                    <MissingContainer />
                </Div>
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    row-gap: 40px;
    padding-bottom: 80px;
`;

const BannerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    background-color: ${color.Black};
`

const BannerInnerDiv = styled.div`
    max-width: 885px;
    width: 100%;
    padding: 0px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${MainBackground});
    
    @media screen and (max-width: ${breakpoints.mobileSmall}) {
        background-image: none;
   }
`

const BannerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    row-gap: 30px;
`

const Gap = styled.div`
    gap: 15px;
    display: flex;
`

const BannerTag = styled.div`
    padding: 5px 15px;
    height: 20px;
    border-radius: 20px;
    font-size: 0.9rem;
    border: solid 1.2px ${color.Orange[0]};
    color: ${color.Orange[0]};
`

const TempContainer = styled.div`
    font-size: 0.9rem;
    font-weight: bolder;
    color: ${color.Gray[4]};
    padding: 5px 15px;
    border-radius: 5px;
    background-color: ${color.Gray[9]};
`

const TempText = styled.div`
    font-size: ${props => props.font};
    font-weight: bolder;
    color: ${color.White};
`

const Temp = styled.div`
    font-size: 5rem;
    font-weight: medium;
    color: ${color.White};
    width: 40%;

    @media screen and (max-width: ${breakpoints.mobileSmall}) {
        display: none;
    }
`

const Ment = styled.div`
    font-size: 0.9rem;
    font-weight: medium;
    color: ${color.Gray[5]};

    @media screen and (max-width: ${breakpoints.mobileSmall}) {
        font-size: 0.8rem;
    }
`

const EventDiv = styled.div`
    max-width: 845px;
    width: 100%;
    height: 150px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${Event});
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 20px;
    row-gap: 10px;

    @media screen and (max-width: ${breakpoints.tabletSmall}) {
        display: none;
    }
`

const Div = styled.div`
    max-width: 885px;
    padding: 0 5%;
    width: 90%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: ${breakpoints.tabletSmall}) {
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
    }
`