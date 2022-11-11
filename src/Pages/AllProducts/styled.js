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
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 100vw;
    height: 100%;
`;
export const ContainerList = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 5px;
    background: ${lightGrayColor};
`;
export const ContainerSelect = styled.div`
    display: flex;
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
    background: ${darkRedColor};
    width: 85%;
    height: 45px;
        p{
            font-size: 0.8rem;
            margin-right: 5px;
            font-weight: bold;
            color: #fff;
        }
        select{
            border-radius: 5px;
            height: 25px;
            font-size: 0.8rem;
            font-weight: bold;
            border: none;
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
    width: 100%;
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
    width: 80%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    background: ${darkRedColor};
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    padding: 5px;
    p{
            font-size: 0.8rem;
            font-weight: bold;
            color: #fff;
    }
    input{
        width: 30%;
        height: 20px;
        margin-left: 5px;
        margin-right: 5px;
        border: none;
        border-radius: 5px;
        padding: 2px;
    }
`;
export const ContainerFilter = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
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
