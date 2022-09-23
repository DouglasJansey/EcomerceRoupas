/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';
import { bgColor, grayColor, bgColorSecondary } from '../../style/colors';

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

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: ${grayColor};
    p{
        margin-bottom: 10px;
    }
`;
export const LoginContainer = styled.div`
    animation: ${fadeIn} 1s ease forwards;
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 35vw;
    height: 75vh;
    max-width: 90vmax;
    max-height: 85vmax;
    box-shadow: 0 0 5px rgba(0,0,0,0.6) ;
    background-color: #d9d9d9;
    border-radius: 5%;
    overflow: hidden;
    position: absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    margin: auto;

    span{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${bgColor};
        width: 100%;
        position: relative;
        height: 20%;
        font-size: 15px;
        color: #f9f9f9;
    }
    p{
    margin-top: 10px;
    color: gray;
    margin-bottom: 10px;
    text-align: center;
    }
    button{
    width: 250px;
    height: 45px;
    position:absolute;
    font-weight: bold;
    border-style: none;
    font-size: 15px;
    border-radius: 15px;
    background: ${bgColor};
    color: ${grayColor};
    cursor: pointer;
    bottom: 35px;
    :hover{
        background: ${bgColorSecondary};
    }

  }
`;

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-bottom: 5px;

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
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 15px;
  color: ${bgColorSecondary};
}

input {
  height: 35px;
  width: 100%;
  font-size: 18px;
  border: 1px solid #ddd;
  padding: 0;
  border-radius: 10px;
  margin-top: 5px;
  padding-left: 10px;

  &:focus{
    border: 1px solid ${bgColorSecondary};
    outline: none;
  }
}
`;
export const CheckSuccess = styled(BsCheckCircleFill)`
    font-size: 30px;
    color: white;
`;
const CheckFailure = styled(BsXCircleFill)`
    font-size: 30px;
    color: blue;
`;
const LoginCheked = ({ cheked }) => {
  switch (cheked) {
    case 'success': {
      return `background: green; visibility:visible; &:after{content: "LOGIN SUCCESS" ; margin-left: 15px;}; &:before{content: " "; ${CheckFailure}} ; `;
    }
    case 'failure': {
      return `background: red; visibility:visible; &:after{content: "LOGIN FAILURE" ; margin-left: 15px;}; &:before{content: " "; ${CheckFailure}} ; `;
    }
    default: return console.log(cheked);
  }
};
