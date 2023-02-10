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
const ChangeBg = (props) => {
  switch (props) {
    case 'Perfil': return ':nth-child(1){background: #fff;}';
    case 'Produtos': return ':nth-child(2){background: #fff;}';
    case 'Pedidos': return ':nth-child(3){background: #fff;}';

    default: return `background: ${lightGrayColor};`;
  }
};
export const Container = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
    background: ${lightGrayColor};
    overflow: hidden;
`;
export const ContainerForm = styled.div`
    display: flex;
    width: 80%;
    height: auto;
    justify-content: center;

`;
export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 20%;
    min-width: 150px;
    height: 100%;
    background: red;
`;

export const ButtonMenu = styled.button`
    ${({ changeBG }) => ChangeBg(changeBG)}
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    border: none;
    :hover{
        background: #fff;
        transition: 1s all ease;
    }
`;
export const UpdateContainer = styled.div`
    animation: ${fadeIn} 1s ease forwards;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
`;
