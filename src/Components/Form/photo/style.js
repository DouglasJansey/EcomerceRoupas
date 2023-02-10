/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../../style/colors';

export const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80vw;
        margin-bottom: 15px;
      
`;

export const ImageContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin-top: 10px;
`;
export const ImageProfile = styled.img`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        min-width: 200px;
        height: auto;
`;
export const Label = styled.label`
        display: block;
        padding: 15px 70px;
        background-color: ${darkRedColor};
        border-radius: 10px;
        color:  #fff;
        text-align: center;
        width: auto;
        margin-top: 10px;
         cursor: pointer;

         input {
        display: none;
    }
`;
export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
height: 80%;
width: 100vmin;
padding: 5px;
`;
export const ButtonSubmitForm = styled.button`
    width: 15%;
    min-width: 100px;
    height: 50px;
    font-weight: bold;
    border-style: none;
    font-size: 15px;
    border-radius: 15px;
    margin-top: 20px;
    background: ${darkRedColor};
    color: #fff;
    cursor: pointer;
    :hover{
        background: ${darkRedColor};
    }
`;
export const PhotoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction:  column;
    height: 30%;
    width: 30%;
`;
