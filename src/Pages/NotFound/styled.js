/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';
import bg from '../../img/bg.jpg';

const space = keyframes`
    0%{
        transform: translateX(-340px)
        rotate(0deg)
    }
    100%{
        transform: translateX(calc(100vw - 360px))
         rotate(360deg)

    }
`;
const fadeIn = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

export const ContainerBg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    font-size: 5rem;
    font-weight: bold;
    `;

const fade = keyframes`
    0%{
        width:0;
    }
    100%{
        width: 100%;
    }
`;
