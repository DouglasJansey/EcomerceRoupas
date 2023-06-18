/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';

import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
}
  from '../../style/colors';

const defaultImage = 'https://www.ofertadia.com.br/wp-content/themes/deals/images/store-default.png';

const fadeIn = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-50px)
    }
    100%{
        opacity: 1;
     }
`;

export const Container = styled.section`
    animation: ${fadeIn} 1s ease forwards;
    display: flex;
    width: 80vw;
    min-height: 80vh;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #fff;
    margin-bottom: 10px;
    h1{
        display: flex;
        width: 100%;
    }
`;
export const Register = styled.div`
    display: flex;
    max-width: 98%;
    flex-wrap: wrap;
    height: auto;
    background-color: #fff;
    padding: 5px;
    `;
export const Label = styled.label`
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        `;
export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

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
        width: 100px;
        display:flex;
        flex-wrap: wrap;
        font-weight: bold ;
        justify-content: center;
        align-items: center;
        background-color: ${darkBlueColor};
        border-radius: 10px;
        color: #fff;
         cursor: pointer;
    input{
        display: none;
    }
    :hover{
        background-color: ${darkRedColor};
    }

`;
export const ContainerPic = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
    width: 100%;
    padding-left: 10px;
    margin-bottom: 15px;
    `;
export const ContainerLabel = styled.div`
    display: flex;
    flex: none;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 90%;
    overflow: hidden;
    span{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    `;
export const ContainerImg = styled.div`
    display: flex;
    flex: none;
    overflow: hidden;
    border-radius: 20px;
    width: 250px;
    border: 2px solid ${darkGrayColor};
    margin-bottom: 5px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    img{
        width: 50%;
    }
`;
export const DefaultImage = styled.img`
    width: 150px;
    height: 150px;
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
    height: 65px;
    font-weight: bold;
    border-style: none;
    font-size: 15px;
    border-radius: 15px;
    background: ${darkBlueColor};
    color: #fff;
    cursor: pointer;
    bottom: 55px;
    margin-left: 50px;;
    :hover{
        background: ${darkRedColor};
    }
`;
export const InputForm = styled.input`
    height: 30px;
    width: 80%;
    padding-left: 5px;
    margin-top: 5px;
    border: none;
    background: none;
    border-bottom: 2px solid ${darkGrayColor};

    &:focus{
        outline: none;
        border-bottom: 2px solid ${darkRedColor};
     }
`;
