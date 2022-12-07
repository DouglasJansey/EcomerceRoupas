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
export const Container = styled.div`
    padding-top: 130px;
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: ${lightGrayColor};
`;
export const ContainerForm = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
`;
export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: ${darkBlueColor};
`;

export const ButtonMenu = styled.button`
    ${({ changeBG }) => ChangeBg(changeBG)}
    width: 100%;
    height: 10%;
    border: none;
    :hover{
        background: #fff;
        transition: 1s all ease;
    }
`;
export const UpdateContainer = styled.div`
    animation: ${fadeIn} 1s ease forwards;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
