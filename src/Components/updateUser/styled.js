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
    case 'foto': return ':nth-child(1){background: #fff;}';
    case 'perfil': return ':nth-child(2){background: #fff;}';
    case 'endereço': return ':nth-child(3){background: #fff;}';
    case 'telefone': return ':nth-child(4){background: #fff;}';

    default: return `background: ${lightGrayColor};`;
  }
};
export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;
export const ContainerForm = styled.div`
    width: 100%;
    height: 100%;
`;
export const SubContainer = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    background: ${darkBlueColor};
`;

export const ButtonMenu = styled.button`
    ${({ changeBG }) => ChangeBg(changeBG)}
    width: 30%;
    height: 100%;
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
    background: #fff;
`;
