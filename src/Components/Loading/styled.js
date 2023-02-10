import styled, { keyframes } from 'styled-components';
import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../style/colors';

const Rotate = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
   display: flex;
   width: 100%;
   height: 100%;
   position: relative;
   background: none;
   opacity: 0.6;
`;
export const SubContainer = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    background: ${darkBlueColor};
`;
export const Loading = styled.div`
    animation: ${Rotate} 0.8s ease infinite;
    width: 50px;
    height: 50px;
    background: none;
    border-radius: 100%;
    border: 5px solid ${lightGrayColor};
    border-top: 5px solid ${darkRedColor};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
`;
