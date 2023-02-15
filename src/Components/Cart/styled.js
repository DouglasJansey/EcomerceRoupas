/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { BsXSquareFill } from 'react-icons/bs';
import {
  darkGreenColor, darkRedColor, lightGreenColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../style/colors';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center ;
    width: 100%;
    height: 100%;
    background: red;

    `;
export const ContainerCart = styled.div`
    display: flex;
    width: 95%;
    min-width: 150px;
    height: 100%;
    background: white;
    margin-bottom: 20px;
    border: 1px solid ${darkRedColor};
    `;
export const ContainerItens = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
align-items: center ;
border-top: 1px solid ${darkRedColor};
`;
export const ProductContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 2px;
    align-items: center;
    border-right: 1px solid ${darkRedColor};
    `;
export const QuantContainer = styled.div`
    width: 10%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2px;
    border-right: 1px solid ${darkRedColor};
    span{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    `;
export const PriceContainer = styled.div`
    width: 15%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2px;
    border-right: 1px solid ${darkRedColor};
    div{
        justify-content: space-evenly;
    }
    `;
export const SubTotalContainer = styled.div`
    width: 25%;
    padding: 2px;
    min-height: 100%;
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
    display: flex;
    width: auto;
    height: auto;
    justify-content: center;
    align-items: center;
    margin-right: 2px;
    margin-left: 5px;
    img{
         width: 100%;
         height: 130px;
    }
`;
export const NameConainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: auto;
    margin-left : 5px;
    margin-bottom: 5px;
    `;
export const DescContainer = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      margin-left : 5px;
      h5{
        font-weight: bold;
        font-size: 10px;
      }
      select{
        width: 45px;
        border: none;
        background: ${lightGrayColor};
        font-weight: bold;
        color: ${darkGreenColor};
        option{
            color: ${darkGreenColor};
        }
      }

`;
export const ConainerButtons = styled.div`
    display: flex;
    width: 30px;
    min-height: 100%;
    justify-content: center;
    align-items: center;
    div{
        justify-content: space-evenly;
    }
`;
export const Title = styled.p`
    font-size: 0.8rem;
    text-align: center;
    font-weight: bold;
    width: 100%;
    color: ${darkBlueColor};
    background: ${lightGrayColor};
`;
export const NameProduct = styled.p`
    font-size: 0.8rem;
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
