/* eslint-disable no-confusing-arrow */
import styled, { keyframes } from 'styled-components';
import bg from '../../../img/backgroundGrafite.jpg';

function containerActive(props) {
  const value = props + 1;
  const activateItem = {
    1: `:nth-child(${value}){ img{opacity: 1;}; }`,
    2: `:nth-child(${value}){ img{opacity: 1;}; }`,
    3: `:nth-child(${value}){ img{opacity: 1;};}`,
    4: `:nth-child(${value}){ img{opacity: 1;}; }`,
  };
  return value ? activateItem[value] : 'opacity: 0.5;';
}
function LabelActive(props) {
  const value = props.checked;
  const activateItem = {
    checked: 'darkred;',
  };
  return value ? activateItem[value] : 'gray;';
}
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  `;
export const ContainerImages = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 10px;
  `;
export const ContainerLeft = styled.div`
        justify-content: center;
        align-items: center;
        height: 100%;
        width: auto;
    @media(max-width: 780px) {
        display: flex;
        height: 100%;
        width: 100%;
    }
    `;
export const ImageContainer = styled.div`
        width: 120px;
        height: 120px;
        flex: none;
        overflow: hidden;
        background: #000;
        @media(max-width: 780px) {
        display: flex;
        width: 25%;
        height: 40%;

    }
        ${({ activate }) => containerActive(activate)};
        `;
export const Image = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.5;
`;
export const ContainerRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: none;
    width: 480px;
    height: 100%;
    @media(max-width: 800px) {
        display: flex;
        height: 100%;
        width: 100%;
    }
        img{
            width: 100%;
            height: 100%;
            opacity: 1;
        }
`;
export const InputContainer = styled.div`
    display: flex;
    padding: 10px;
    justify-content: space-around;
    align-items: space-around;
    width: 100%;
    div{
        display: flex;
    }
`;
export const Label = styled.label`
    display: flex;
    padding: 5px;
    justify-content: space-around;
    align-items: space-around;
    :before{
        content:'';
        width: 10px;
        height: 10px;
        display: inline-block;
        background: ${({ children }) => children ? LabelActive(children.props) : 'gray'};
        border-radius: 100%;
    }
`;
export const Input = styled.input`
    display: none;
    cursor: pointer;
`;
