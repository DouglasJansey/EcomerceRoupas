/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../../style/colors';

export const ImageContainer = styled.div`
        max-width: 70%;
        max-height: 70%;
        padding: 5px;
`;
export const ImageProfile = styled.img`
        width: 100%;
        height: 100%;
`;
export const Label = styled.label`
        padding: 15px 55px;
        display: block;
        margin-left: 5px;
        margin-right: 5px;
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
flex-direction: column;
height: 78%;
width: 100%;
`;
export const ButtonSubmitForm = styled.button`
    width: 50%;
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
    flex-direction: column;
    align-items: center;
    height: 85%;
`;
