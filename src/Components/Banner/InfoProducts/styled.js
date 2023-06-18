/* eslint-disable no-confusing-arrow */
import styled, { keyframes } from 'styled-components';
import bg from '../../../img/backgroundGrafite.jpg';

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
function containerActive(props) {
  const value = props + 1;
  const activateItem = {
    1: `:nth-child(${value}){ opacity: 1; }`,
    2: `:nth-child(${value}){ opacity: 1; }`,
    3: `:nth-child(${value}){ opacity: 1; }`,
    4: `:nth-child(${value}){ opacity: 1; }`,
  };

  return value ? activateItem[value] : 'opacity: 0.5;';
}
export const Container = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: flex-start;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  `;
export const ContainerImages = styled.div`
  display: flex;
  width: 80%;
  height: 90%;
  justify-content: center;
  `;
export const ContainerLeft = styled.div`
    background: #000;
    height: 100%;
    width: auto;
    flex-wrap: wrap;
`;
export const ImageContainer = styled.div`
        width: 140px;
        height: 170px;
        position: relative;
        opacity: 0.5;
        display: block;
        ${({ activate }) => containerActive(activate)};
        `;
export const Image = styled.img`
    width: 100%;
    height: 100%;
`;
export const ContainerRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    div{
        width: 600px;
        height: 100%;
        background: red;
        img{
            width: 100%;
            overflow: hidden;
        }
    }
`;
export const InputContainer = styled.div`
    display: flex;
    padding: 10px;
    justify-content: space-around;
    align-items: space-around;
`;
export const Input = styled.input`
    justify-content: center;
    align-items: center;
    margin-left: 5px;
`;
