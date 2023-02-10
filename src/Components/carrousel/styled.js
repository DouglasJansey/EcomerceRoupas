import styled, { keyframes } from 'styled-components';
import { BsCaretLeftFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { darkBlueColor } from '../../style/colors';

const fadeIn = keyframes`
    0%{
        opacity: 0;
        transform: translateX(400px)
    }
    100%{
        opacity: 1;
        transform: translateX(${window.screen.width})
    }
`;
export const LinkPage = styled(Link)`
padding: 7px;
border-radius: 5px;
  p{
    color: #fff;
    font-weight: bold;
  }
`;
export const ArrowRight = styled(BsCaretLeftFill)`
font-size: 50px;
color: #fff;
position: absolute;
transform: rotate(180deg);
z-index: 10;
right: 0;
top: 0;
bottom:0;
margin: auto;
`;
export const ArrowLeft = styled(BsCaretLeftFill)`
font-size: 50px;
color: #fff;
position: absolute;
left: 0;
top: 0;
bottom:0;
margin: auto;
z-index: 10;

`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 0px;
  `;
export const ContainerDesc = styled.div`
  animation: ${fadeIn} 1.5s ease forwards;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 350px;
  padding: 10px;
  height: 120px;
  background: rgba(132,9,41,0.7);
  margin-bottom: 10px;
  position: absolute;
  right: -15px;
  `;
export const Description = styled.p`
    font-size: 1rem;
    color: #fff;
    margin-left: 15px;
`;
export const Titulo = styled.div`
    color: #fff;
    font-size: 2.5rem;
    font-weight: bold;
    width: 100%;
    `;

export const ButtonDesc = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bold;
  margin-right: 20px;
  margin-top: 25px;

`;
export const ContainerImg = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    transform: translateX(${(props) => props.directionX}px);
    transition: all 0.5s ease ;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: #000;
    div{
        width: 100%;
        padding-top: 5px;
        height:100%;
         box-shadow: 0px 0px 10px inset;
        background-image: linear-gradient(rgba(0,0,0,0),transparent, transparent, rgba(0,0,0,1));
        position: absolute;
        z-index: 13;
    }
    img{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        position: relative;

    }
`;
export const ImageWidth = styled.image`
width: 10%;
display: flex;
justify-content: flex-start;
align-items: flex-start;
position: relative;
`;
export const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    label{
        background: red;
        width:10px;
        height:10px;
    }
    input{
        margin: 5px;
        &:before{
            content: '';
            width: 50px;
            height: 50px;
            background: red;
        }
    }

`;
