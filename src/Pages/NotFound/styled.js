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
export const Blackout = styled.div`
    background: rgba(0,0,0,0.6);
    height: 100vh ;
    width: 100%;
`;

export const ContainerBg = styled.div`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh ;
    width: 100%;
    overflow-x: hidden;
        p:nth-child(3){
            animation: ${fadeIn} 5s 15s linear forwards;
            color: #FFF;
            filter: drop-shadow(0 0 2px #000);
            font-size: 80px;
            font-weight: bold ;
            text-align: center;
            margin-top: 35px;
            opacity: 0;
        }
        `;

export const ContainerImg = styled.img`
    animation: ${space} 20s cubic-bezier(0.85, 0.85, 0.85, 1)  forwards;
    width: 360px;
    height: 350px;
    top: 20px;
    filter: drop-shadow(0 0 10px #00ffff);
    position: relative;
    z-index: 10;

    `;
const fade = keyframes`
    0%{
        width:0;
    }
    100%{
        width: 100%;
    }
`;

export const Text = styled.p`
    animation: ${fade} 6.5s 13s linear forwards;
    color: #FFF;
    filter: drop-shadow(0 0 2px #000);
    width: 0;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 25%;
    text-align: center;
    font-size: 65px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;

`;
