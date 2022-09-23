/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { BsCaretLeftFill } from 'react-icons/bs';
import {
  bgColor, primaryColor, grayColor, bgColorSecondary, secondaryColor,
} from '../../style/colors';

export const Container = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    width: 100%;
    `;
export const ContainerList = styled.div`
    display: flex;
    justify-content: center;
    width: 95%;
   overflow : hidden; 
    `;
export const ContainerImages = styled.div`
    display: flex;
    transform: translateX(${(props) => props.directionX}px);
    width: 100%;
    height: 100%;
    transition: all 0.5s ease ;
`;
export const ContainerArrow = styled.div`
     width: 85%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
`;
export const ArrowLeft = styled(BsCaretLeftFill)`
font-size: 50px;
color: ${bgColorSecondary};
position: absolute;
left: 0;
top: 0;
bottom:0;
margin: auto;
z-index: 10;

`;
export const ArrowRight = styled(BsCaretLeftFill)`
font-size: 50px;
position: absolute;
color: ${bgColorSecondary};
transform: rotate(180deg);
z-index: 10;
right: 0;
top: 0;
bottom:0;
margin: auto;
`;
