/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';

import { bgColor, grayColor, bgColorSecondary } from '../../style/colors';

const defaultImage = 'https://wegoboard.com/img/p/fr-default-large_default.jpg';

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
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: ${grayColor};
    p{
        margin-bottom: 10px;
    }

`;
export const Register = styled.div`
    animation: ${fadeIn} 1s ease forwards;
    display: flex;
    max-width: 600px;
    height: 75vh;
    box-shadow: 0 0 5px rgba(0,0,0,0.6) ;
    background-color: #d9d9d9;
    border-radius: 5%;
    overflow: hidden;
    padding: 5px;

    button{
    width: 250px;
    height: 45px;
    font-weight: bold;
    border-style: none;
    font-size: 15px;
    border-radius: 15px;
    background: ${bgColor};
    color: ${grayColor};
    cursor: pointer;
    bottom: 55px;
    :hover{
        background: ${bgColorSecondary};
    }

  }
`;
export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: center;

    label{
        display: flex;
        flex-direction: column;
        margin-left: 10px;
    }
    textarea{
        width:100% ;
        padding-left: 5px;
        border-radius: 5px;
        border: none;
        margin-top: 5px;
        margin-bottom: 10px;
        &:focus{
           box-shadow: 1px 1px 8px ${bgColorSecondary};
           outline: none;
        }
    }
    input {
        height: 20px;
        width: 100%;
        padding-left: 5px;
        border-radius: 5px;
        border: none;
        margin-top: 5px;

         &:focus{
            box-shadow: 1px 1px 8px ${bgColorSecondary};
            outline: none;
         }
    }
`;
export const LabelPic = styled.label`
        height: 55px;
        width: 80%;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
        margin-right: 5px;
        background-color: ${bgColor};
        border-radius: 10px;
        color:  ${grayColor};
        text-align: center;
         cursor: pointer;
    input{
        display: none;
    }

`;
export const ContainerPic = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    width: 100%;
    `;
export const ContainerLabel = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
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
