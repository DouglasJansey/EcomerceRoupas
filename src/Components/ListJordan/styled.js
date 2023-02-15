/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';
import { BsCaretLeftFill } from 'react-icons/bs';
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
    width: 100%;
    position: relative;
    background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0,0));
    `;
export const ContainerList = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
    padding: 5px;
    `;
export const ContainerSelect = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 96%;
    padding: 5px;
    `;
export const ContainerOrder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: ${lightGrayColor};
    width: 165px;
    height: 25px;
    padding: 5px;
        p{
            font-size: 0.8rem;
            margin-right: 5px;
            font-weight: bold;
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
    transform: translateX(${(props) => props.directionX}px);
    width: auto;
    height: 100%;
    transition: all 0.5s ;
    `;

export const ContainerArrow = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
export const ArrowLeft = styled(BsCaretLeftFill)`
    font-size: 25px;
    color: ${darkRedColor};

`;
export const ArrowRight = styled(BsCaretLeftFill)`
    font-size: 25px;
    color: ${darkRedColor};
    transform: rotate(180deg);
    margin-left: 25px;
`;
