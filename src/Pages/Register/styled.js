/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

import {
  grayText,
  darkRedColor,
  yellowColor,
  darkBlueColor,
  lightGrayColor,
  darkGrayColor,
} from '../../style/colors';

const ChildBorder = (props) => {
  if (props.inputError) {
    switch (props.value) {
      case '':
        return 'border: 1px solid red;';

      default:
        return 'border: none;';
    }
  }
  return `border: none;border-bottom: 2px solid ${darkGrayColor};`;
};
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
    width: auto;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${lightGrayColor};
    padding: 10px;
`;
export const RegisterContainer = styled.div`
    animation: ${fadeIn} 1s ease forwards;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    height: auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
    background-color: #fff;
    overflow: hidden;

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${darkRedColor};
        width: 100%;
        height: 15%;
        padding: 15px;
        color: #f9f9f9;
    }

    button {
        width: 250px;
        height: 45px;
        font-weight: bold;
        border-style: none;
        font-size: 15px;
        border-radius: 15px;
        background: ${darkRedColor};
        color: #fff;
        cursor: pointer;
        bottom: 70px;
        :hover {
            background: ${darkRedColor};
        }
    }
`;
export const ContainerLoading = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
 
  div{
    width: 50px;
    height: 40px;
  }
`;
export const TextLogin = styled.p`
    margin-top: 5px;
    margin-bottom: 10px;
    text-align: center;
`;

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 90%;
    width: 100%;
    #password {
        width: 250px;
    }
    div {
        padding: 5px;
        font-weight: bold;
        font-size: 15px;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    label {
        display: flex;
        padding: 5px;
        flex-direction: column;
        margin-left: 5px;
        font-weight: bold;
        font-size: 15px;
        color: ${darkRedColor};
    }
`;
export const InputForm = styled.input`
    height: 30px;
    width: 80%;
    padding-left: 5px;
    margin-top: 5px;
    ${(borderColor) => ChildBorder(borderColor)}
    background: none;

    &:focus {
        outline: none;
        border-bottom: 2px solid ${darkRedColor};
    }
`;
export const SelectForm = styled.select`
    height: 30px;
    width: 95%;
    font-size: 15px;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding-left: 10px;
    ${(borderColor) => ChildBorder(borderColor)};
    background: none;

    &:focus {
        outline: none;
        border-bottom: 2px solid ${darkRedColor};
    }
`;

export const EndForm = styled.div`
    padding: 15px;
    font-weight: bold;
    position: relative;
    display: flex;
    flex-direction: column;
    div:nth-child(2) {
        max-width: 95%;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        label:nth-child(1) {
            width: 50px;
        }
    }
    div:nth-child(1) {
        max-width: 95%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        label:nth-child(1) {
            width: 100%;
        }
        label:nth-child(2) {
            width: 90px;
        }
        label:nth-child(3) {
            width: 250px;
        }
        label:nth-child(4) {
            width: 120px;
        }
    }
`;

export const PhotoContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    height: auto;
    margin-bottom: 10px;
    margin-top: 10px;
    img {
        max-width: 115px;
        max-height: 115px;
    }
    div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    div > div {
        height: 95px;
        width: 95px;
        border-radius: 50%;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        padding: 0%;
        flex: none;
    }
    div > label {
        padding: 15px 25px;
        display: block;
        margin-left: 5px;
        margin-right: 5px;
        background-color: ${darkRedColor};
        border-radius: 10px;
        color: #fff;
        text-align: center;
        cursor: pointer;
    }
    label > input {
        display: none;
    }
`;
export const DefaultImage = styled(FaUserCircle)`
    font-size: 100px;
    max-width: 100px;
    max-height: 100px;
`;
