import { useState } from "react";
import { breakpoints } from "../../style/device";
import { color } from "../../style/theme";
import styled from "styled-components";
import { ReactComponent as ViewPwSVG } from "../../assets/icon/ViewPw.svg";

export default function Input(props) {

    return (
        <Container>
            <Text>{props.text}</Text>
            {props.state == 'password' ? (
                <PwConatiner>
                    <InputPassword placeholder={props.placeholder} type={props.type} />
                    <ViewCotainer onClick={props.onClick}>
                      { props.type=='text' ? <></> : <ViewPw /> }
                    </ViewCotainer>
                </PwConatiner>
            ) : (
                <InputContainer placeholder={props.placeholder} type={props.type} />
            )}
            <ErrorText>{props.error}</ErrorText>
        </Container>
    );
}

const Container = styled.form`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    row-gap: 5px;
`

const Text = styled.label`
    font-size: 1rem;
    font-weight: bolder;
    color: ${color.Black};
    user-select: none;
`

const ErrorText = styled.div`
    font-size: 0.8rem;
    font-weight: 500;
    color: ${color.Red};
    user-select: none;
`

const InputContainer = styled.input`
    width: 94%;
    height: 50%;
    padding: 0 3%;
    border: solid 1px ${color.Gray[1]};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: medium;

    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
        border: solid 1px ${color.Orange[1]};
    }
`;

const PwConatiner = styled.div`
    width: 100%;
    height: 50%;
    border: solid 1px ${color.Gray[1]};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
    &:focus-within {
        outline: none;
        border: solid 1px ${color.Orange[1]};
    }
`

const InputPassword = styled.input`
    width: 80%;
    height: 95%;
    border-radius: 5px;
    padding: 0 3%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: medium;
    border: none;

    &:focus {
        outline: none;
    }
`

const ViewCotainer = styled.div`
    width: 14%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: none;

    &:hover {
        cursor: pointer;
    }
`

const ViewPw = styled(ViewPwSVG)``;