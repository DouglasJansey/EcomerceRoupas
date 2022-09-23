import styled from 'styled-components';
import { BsCaretLeftFill } from 'react-icons/bs';

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
  height:  100%;
`;
export const ContainerDesc = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 450px;
  max-height: 30%;
  z-index: 11;
  top: 300px;
  left: 30px;
  bottom: 0;
  `;
export const Description = styled.p`
    font-size: 20px;
    font-weight: bold;
      margin: 10px;
      color: white;
`;
export const Titulo = styled.p`
    width: 100%;
    p{
      font-weight: bold;
      font-size: 40px;
      color: white;
    }
`;

export const ButtonDesc = styled.button`
  min-width: 190px;
  min-height: 60px;
  flex-wrap: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  background: green;
  margin-left: 25px;
  position: relative;
  border: none;
  cursor: pointer;
   &:after{
    content: '';
    border: 2px solid green;
    position: absolute;
    width: 100%;
    height:  100%;
    left: 5px;
    top: 6px;
   }
  p{
    font-size: 1.5rem;
    font-family: 'Rubik Dirt', cursive;
    color: white;
  }

`;
export const ContainerImg = styled.div`
    width:  100%;
    height: 100%;
    position: relative;
    display: flex;
    transform: translateX(${(props) => props.directionX}px);
    transition: all 0.5s ease ;
`;
export const ImagenWidth = styled.img`
      min-width: 100%;
      opacity: 0.9;

`;
