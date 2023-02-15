import styled from 'styled-components';
import { BsCart3, BsXSquareFill } from 'react-icons/bs';

import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../style/colors';

export const ContainerCard = styled.div`
    margin: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 230px;
    background: white;
    border-radius: 10px;
    text-align: center;
    border: 1px solid${darkGrayColor};
    span{
        width: 100%;
        height: 50%;
    }

`;
export const DeleteProduct = styled(BsXSquareFill)`
    color: red;
    font-size: 15px;
    &:hover{
        opacity: 0.4;
    }
`;

export const ContainerImg = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    margin-bottom: 5px;
    button{
        position: absolute;
        border: none;
        top: 10px;
        left: 10px;
    }
`;
export const Image = styled.img`
    height: 90%;
    width: auto;

`;
export const Text = styled.div`
    font-weight: bold;
    font-size: 13px;
    color: ${darkBlueColor};
`;
export const Description = styled.div`
    font-weight: bold;
    font-size: 10px;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: ${darkGrayColor};
    display: flex;
    flex-wrap: wrap;
`;
export const ContainerDesc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-around;
    width: 100%;
`;
export const BoxPrice = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    color: #000;
    padding: 4px;
    margin-left: 5px;
    font-size: 14px;
    font-weight: bold;
    p:nth-child(2){
        color: green;
        font-size: 10px;
        margin-left: 20px;
    }
`;
export const ButtonBuy = styled.button`
    width: 120px;
    height: 25px;
    display: flex;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    border-style: none;
    font-size: 15px;
    border-radius: 5px;
    background: ${darkBlueColor};
    color: ${lightGrayColor};
    cursor: pointer;
    padding: 2px;
    margin-top: 5px;
    :hover{
        opacity: 0.5;
    }
`;
export const Cart = styled(BsCart3)`
    font-size: 20px;
    margin-left: 5px;
    color: ${lightGrayColor};

`;
