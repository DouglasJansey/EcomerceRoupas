import styled, { keyframes } from 'styled-components';
import { BsCaretLeftFill } from 'react-icons/bs';

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  `;
export const ContainerDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  width: auto;
  height: auto;
  padding: 10px;
  z-index: 3;
  position: absolute;
  left: 10px;
  bottom: 5px;
  `;

export const Description = styled.p`
    font-size: 1rem;
    color: #fff;
    margin-left: 15px;
`;
export const Titulo = styled.div`
    color: #fff;
    font-size: 2.6rem;
    width: 100%;
    background: none;
    margin-left: 20px;
    p{
      font-family: 'Ebrima Bold', sans-serif;
      font-weight: 800;
      text-shadow: 4px 2px 0px rgba(0,0,0,0.6);
      stroke-width: 5px;
      -webkit-text-stroke: 1px;
      -webkit-text-stroke-color: #0756cc ;
     }
     h6{
        font-size: 1.2rem;
        color: #fff ;
        filter: drop-shadow(1px 1px black);

     }
    `;

export const ButtonDesc = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: #fff;
  margin-top: 5px;
  background: #0756cc;
  padding: 5px;
  a{
    color: #fff;
  }
`;
export const ContainerImg = styled.div`
    width:  100%;
    height: auto;
    display: flex;
    margin-bottom: 10px;
    transform: translateX(${(props) => props.directionX}px);
    transition: all 0.5s ease ;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img{
        height: auto;
        width: 100%;
        padding-bottom: 25px;
    }
    div{
        width: 100%;
        height: 100%;
    }
`;
export const ImageWidth = styled.div`
    width: 50%;
    height: 500px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    background-size: cover;
    background-position: top;
    overflow: hidden;
    position: relative;
    &:hover{
        background-repeat: none;
        background-size: 110%;
        &:after{
        content: "";
        background: black;
        opacity: 0.4;
        padding: 15px;
        width: 100%;
        height: 100%;
        position: absolute;
    }
    }
`;
