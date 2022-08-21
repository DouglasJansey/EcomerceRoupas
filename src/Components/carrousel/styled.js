import styled from 'styled-components';
import { BsCaretLeftFill } from 'react-icons/bs';

export const ArrowRight = styled(BsCaretLeftFill)`
font-size: 100px;
position: absolute;
transform: rotate(180deg);
z-index: 10;
right: 0;
`;
export const ArrowLeft = styled(BsCaretLeftFill)`
font-size: 100px;
position: absolute;
left: 0;
`;
export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background: #fdfd96;
  padding: 5px;
  display: flex;
  justify-content: center;
`;

export const Container2 = styled.div`
  width: 900px;
  height: 250px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;

`;
export const ContainerImg = styled.div`
    width: ${(props) => props.width}px;
    display: flex;
    gap: 5px;
    height: 100%;
    transform: translateX(${(props) => props.directionX}px);
    transition: all 0.5s ease ;

  img{
      width: 290px;
      height: 250px;
      opacity: 0.6;
      z-index: 10;
      cursor: pointer;
      :hover{
      opacity: 1;
  }
  }
`;
