/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';
import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../style/colors';

const fadeIn = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-50px)
    }
    100%{
        opacity: 1;
        transform: translateY(${window.screen.width})
    }
`;

export const Container = styled.section`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #d9d9d9;
`;
export const LoginContainer = styled.div`
    animation: ${fadeIn} 1s ease forwards;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    min-width: 340px;
    height: 70%;
    box-shadow: 0 0 5px rgba(0,0,0,0.6) ;
    background: #fff;
    overflow: hidden;

    span{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${darkRedColor};
        width: 100%;
        position: relative;
        height: 10%;
        font-size: 10px;
        color: #f9f9f9;
    }
    p{
    margin-top: 5px;
    color: gray;
    margin-bottom: 15px;
    text-align: center;
    }
    button{
    width: 150px;
    height: 35px;
    font-weight: bold;
    border-style: none;
    font-size: 15px;
    border-radius: 15px;
    background: ${darkRedColor};
    color: #fff;
    cursor: pointer;

    :hover{
        background: ${darkRedColor};
    }

  }
`;

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-bottom: 5px;
flex-wrap: wrap;
div{
        padding: 15px;
        font-weight: bold;
        font-size: 25px;
        margin-top: 35px;
        display: flex;
        flex-direction: column;
        width: 350px;
}
label{
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 15px;
  color: ${darkRedColor};
}

input {
  height: 35px;
  width: 100%;
  font-size: 18px;
  border: 1px solid #ddd;
  padding: 0;
  border-radius: 10px;
  margin-top: 5px;

  &:focus{
    border: 1px solid ${darkRedColor};
    outline: none;
  }
}
`;
