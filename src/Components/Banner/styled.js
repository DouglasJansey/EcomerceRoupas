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
  margin-top: 50px;
  margin-bottom: 155px;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  align-items: center;
  width: 100%;
  max-width: 1080px;
  height: 400px;
  max-height: 550px;
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
export const ContainerAzul = styled.div`
  display: flex;
  width: 100%;
  transform: rotate(15deg);
  padding: 10px;
  height: 200px;
  background: #0756cc;
  opacity: 0.6;
  position: absolute;
  bottom: -100px;
  left: -100px;
  z-index: 1;
  `;
export const ContainerAmarelo = styled.div`
  display: flex;
  width: 105%;
  transform: rotate(5deg);
  padding: 10px;
  height: 120px;
  background: #f1c100;
  position: absolute;
  z-index: 2;
  bottom: -50px;
  border: 2px solid #0756cc;
  right: -15px;
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
      -webkit-text-stroke: 2px;
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
  margin-top: 15px;
  background: #0756cc;
  padding: 5px;
`;
export const ContainerImg = styled.div`
    width:  80%;
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.directionX}px);
    transition: all 0.5s ease ;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;
export const ImageWidth = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    background-image: url(${(props) => props.imageBg});
    background-repeat: none;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    position: relative;
`;
