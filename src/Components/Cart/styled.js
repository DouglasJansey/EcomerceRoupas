/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { BsXSquareFill } from 'react-icons/bs';
import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../style/colors';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center ;
    width: 100%;
    height: 100%;
    `;
export const ContainerCart = styled.div`
    display: flex;
    margin-bottom: 10px;
    width: 100%;
    height: auto;
    background: white;
    padding: 5px;

    `;
export const ContainerItens = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: flex-start;
align-items: center ;
border-top: 1px solid ${darkRedColor};
`;
export const ProductContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid ${darkRedColor};
    `;
export const QuantContainer = styled.div`
    width: 10%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid ${darkRedColor};
    div{
        justify-content: space-evenly;
    }
    `;
export const PriceContainer = styled.div`
    width: 15%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid ${darkRedColor};
    div{
        justify-content: space-evenly;
    }
    `;
export const SubTotalContainer = styled.div`
    width: 15%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid ${darkRedColor};
    div{
        justify-content: space-evenly;
    }
    `;
export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
`;
export const ContainerImage = styled.div`
    width: 140px;
    height: 110px;
    justify-content: center;
    align-items: center;
    img{
         height: 100%;
         width: 100%;
    }
`;
export const NameConainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 30px;
    margin: 5px;
    `;
export const DescContainer = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 100%;
      height: 100%;
      margin-left : 10px;
      h5{
        font-weight: bold;
      }

`;
export const ConainerButtons = styled.div`
    display: flex;
    width: 5%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
        justify-content: space-evenly;
    }
`;
export const Title = styled.p`
    font-size: 1rem;
    text-align: center;
    font-weight: bold;
    width: 100%;
    color: ${darkBlueColor};
`;
export const NameProduct = styled.p`
    font-size: 1rem;
    width: 100%;
    font-weight: bold;
    color: ${darkBlueColor};
`;
export const Button = styled.button`
    font-size: 1rem;
    display: flex;
    flex: none;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    width: 15px;
    height: 15px;
    color: ${lightGrayColor};
    border: none;
    margin: 5px;
    padding: 3px;
    background-color: ${darkBlueColor};
    &:hover{
        opacity: 0.4;
    }

`;
export const CloseButton = styled(BsXSquareFill)`
    font-size: 15px;
    font-weight: bold;
    color: #bb0a1e;
    margin-top: 20px;
    &:hover{
        opacity: 0.4;
    }

`;
