import styled from 'styled-components';
import { BsCart3 } from 'react-icons/bs';

import { bgColor, grayColor, bgColorSecondary } from '../../style/colors';

export const ContainerCard = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:190px;
    height: 250px;
    position: relative;
    background: white;
    border-radius: 10px;
    text-align: center;
    overflow: hidden;
    flex: none;
    table, th, tr{
        border: 1px solid gray;
        border-collapse: collapse;
        padding: 5px;
        margin-top: 4px;
        th:hover{
            background: rgba(0,0,0,0.2);
            cursor: pointer;
        }
    }
    :hover{
        button{
            visibility: visible;
        }

        box-sizing: border-box;
        border: 1px solid rgba(0,0,0,0.2);
    }
`;
export const ButtonBuy = styled.button`
    width: 150px;
    height: 25px;
    font-weight: bold;
    position: absolute;
    border-style: none;
    font-size: 15px;
    border-radius: 15px;
    background: ${bgColor};
    color: ${grayColor};
    cursor: pointer;
    bottom: 5px;
    visibility: hidden;
    :hover{
        background: ${bgColorSecondary};
    }

`;
export const ContainerImg = styled.div`
    width: 100%;
    height: 60%;
    background: #f6f6f6;
    position: relative;
    button:nth-child(1){
        background: none;
        border: none;
        position: absolute;
        right: 15px;
        top: 13px;
        cursor: pointer;
    }
    button:nth-child(2){
        background: none;
        border: none;
        position: absolute;
        left: 10px;
        top: 10px;
        cursor: pointer;
    }

`;
export const ColorShirt = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    width: 100%;
    input:nth-child(1){
        background: #002244;
    }
    input:nth-child(2){
        background: #69BE28;
    }
    input:nth-child(3){
        background: #A5ACAF;
    }

    input{
        display: flex;
        justify-content: center;
        align-items: center;
        appearance: none;
        border-radius: 50%;
        cursor: pointer;
        width: 20px;
        height: 20px;

        :before{
            content: '';
            height: 20px;
            width: 20px;
            border-radius: 50%;
            opacity: 0;
        }
        :checked:before{
            opacity: 1;
            border: 2px solid black;
            box-sizing: border-box;
        }
    }
`;
export const Image = styled.img`
    width: 80%;
    height: 100%;
`;
export const Text = styled.p`
    font-weight: bold;
    font-size: 15px;
    color: #3c3c3c
`;
export const BoxPrice = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-wrap: nowrap;
    background: white;
    font-weight: bold;
    padding: 4px;
    height: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 14px;
`;
export const Cart = styled(BsCart3)`
    font-size: 25px;
    color: ${bgColor};

`;
