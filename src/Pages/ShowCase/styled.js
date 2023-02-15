/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../style/colors';

const fadeIn = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-70px)
    }
    100%{
        opacity: 1;
        transform: translateY(${window.screen.width})
    }
`;
export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
   flex-wrap: wrap;
    width: 100%;
    height: 100%;
`;
export const ContainerList = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 5px;
    background: ${lightGrayColor};
`;
export const ContainerSelect = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5px;
`;
export const ContainerOrder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 15px;
    background: #fff;
    width: 100%;
    height: auto;
    padding: 10px 5px;
        p{
            font-size: 0.8rem;
            margin-right: 5px;
            font-weight: bold;
            color: #000;
        }
        select{
            border-radius: 5px;
            height: 25px;
            font-size: 0.8rem;
            font-weight: bold;
            border: none;
            background: ${lightGrayColor};
            :focus{
                outline: none;
            }
        }
`;
export const ContainerImages = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 70%;
    min-width: 350px;
    height: 100%;
`;
export const ContainerPagesValue = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 5px;
    color: ${darkGrayColor};
`;
export const ContainerPrice = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;
    padding: 5px;
    font-size: 14px;
    font-weight: bold;
    label{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    p{
            font-size: 0.7rem;
            font-weight: bold;
            color: #fff;
    }
    input{
        width: 55%;
        height: 17px;
        border: none;
        border-radius: 5px;
        padding: 2px;
        background: ${lightGrayColor};
        :focus{
            border: none;
        }
    }
`;
export const ContainerFilter = styled.div`
    width: 20%;
    min-width: 340px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    padding: 5px;
`;
export const ButtonSubmit = styled.button`
    background: none;
    border: none;
    padding: 5px 5px;
    border-radius: 5px;
    color: ${darkBlueColor};
    opacity: 0.7;
    cursor: pointer;
    :hover{
        opacity: 1;
        color: ${darkBlueColor};
        transition: ease;
    }
`;
export const CleanButton = styled.button`
    border: none;
    background: none;
    border-radius: 5px;
    color: ${darkBlueColor};
    margin-left: 10px;
    opacity: 0.7;
    cursor: pointer;
    :hover{
        opacity: 1;
        color: ${darkBlueColor};
        transition: ease;
    }
`;
export const ArrowLeft = styled(BsCaretLeftFill)`
    font-size: 30px;
    color: ${darkRedColor};
    bottom:10px;
`;
export const ArrowRight = styled(BsCaretRightFill)`
    font-size: 30px;
    color: ${darkRedColor};
    z-index: 10;
`;
