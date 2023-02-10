/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../style/colors';

const fadeIn = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-50px)
    }
    100%{
        opacity: 1;
        transform: translateY(${window.screen.width})
    }
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    height: 5%;
`;
export const Image = styled.img`
    width: 37px;
    height: auto;
    position: relative;
    margin-left: 2px;
    opacity: 0.7;
       :hover {
        opacity: 1;
    }
    `;
export const SubContainer = styled.div`
    display: flex;
    height: auto;
    width: auto;
    margin-left: 5px;
    justify-content: center;
    align-items: center;

`;
