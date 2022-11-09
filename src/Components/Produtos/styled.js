/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';

import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
}
  from '../../style/colors';

const defaultImage = '';

const fadeIn = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-50px)
    }
    100%{
        opacity: 1;
     }
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background: #fff;
`;
export const Register = styled.div`
    animation: ${fadeIn} 1s ease forwards;
    display: flex;
    max-width: 98%;
    height: 98%;
    background-color: #fff;
    overflow: hidden;
    padding: 5px;
`;
export const Label = styled.label`
        display: flex;
        flex-direction: column;
`;
export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    width: 100%;
    justify-content: center;
    align-items: space-between;


    textarea{
        width:100% ;
        padding-left: 5px;
        border-radius: 5px;
        border: none;
        margin-top: 5px;
        padding-bottom: 20px;
        background: ${lightGrayColor};
        &:focus{
           outline: 1px solid ${darkRedColor};
        }
    }
`;
export const LabelPic = styled.label`
        height: 55px;
        width: 60%;
        display:flex;
        font-weight: bold ;
        justify-content: center;
        align-items: center;
        background-color: ${darkRedColor};
        border-radius: 10px;
        color: #fff;
         cursor: pointer;
    input{
        display: none;
    }

`;
export const ContainerPic = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 100%;
    padding-left: 50px;
    `;
export const ContainerLabel = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    `;
export const ContainerImg = styled.div`
    display: flex;
    flex: none;
    overflow: hidden;
    border-radius: 20px;
    height: 200px;
    width: 200px;
    img{
        width: 100%;
        height: 100%;
    }
`;
export const DefaultImage = styled.img`
    width: 250px;
    height: 250px;
`;
DefaultImage.defaultProps = {
  src: defaultImage,
};
export const ContainerCol = styled.div`
        display: flex;
        height: 90px;
        flex-direction: column;
        justify-content: space-between;
        label{
            width: 90%;
        }

`;
export const ButtonSubmit = styled.button`
    width: 250px;
    height: 45px;
    font-weight: bold;
    border-style: none;
    font-size: 15px;
    border-radius: 15px;
    background: ${darkRedColor};
    color: #fff;
    cursor: pointer;
    bottom: 55px;
    :hover{
        background: ${darkRedColor};
    }
`;
export const InputForm = styled.input`
    height: 30px;
    width: 80%;
    padding-left: 25px;
    border-radius: 5px;
    margin-top: 5px;
    border: none;
    background: ${lightGrayColor};

     &:focus{
        outline: 1px solid ${darkRedColor};
     }
`;
