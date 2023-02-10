/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../../style/colors';

const InputWidth = (width) => {
  switch (width) {
    case 'celular': return 'width: 50%;min-width: 100px;';
    case 'telefone': return 'width: 50%;min-width: 100px;';
    case 'ddd': return 'width: 30px;';
    default: return 'width: 100%;';
  }
};

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
    padding: 10px;
`;
export const SubContainer = styled.div`
   display: flex;
   margin-top: 10px;
   height: 100%;
   width: 80vw;
   justify-content: center;
   align-items: center;

`;
export const Container = styled.div`
   display: flex;
   height: auto;
   width: 100%;
   justify-content: center;
   align-items: center;

`;

export const Label = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 15px;
  width: auto;
  color: ${darkRedColor};
  justify-content: center;
  align-items: center;
  margin-top: 15px;

    `;

export const InputForm = styled.input`
  height: 30px;
  ${({ inputWidth }) => InputWidth(inputWidth)};
  font-size: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-top: 5px;
  margin-left: 5px;

  &:focus{
    border: 1px solid ${darkRedColor};
    outline: none;
  }
`;

export const ButtonSubmitForm = styled.button`
    width: 50%;
    height: 45px;
    font-weight: bold;
    border-style: none;
    font-size: 15px;
    border-radius: 15px;
    background: ${darkRedColor};
    color: #fff;
    margin-top: 10px;
    cursor: pointer;
    left: 0;
    right: 0;
    margin: auto;
    :hover{
        background: ${darkRedColor};
    }
`;
