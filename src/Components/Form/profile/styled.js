/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../../style/colors';

const InputWidth = (width) => {
  switch (width) {
    case 'cpf': return 'width: 40%;';
    case 'Gênero': return 'width: 40%;';
    case 'password': return 'width: 50%;';
    default: return 'width: 100%;';
  }
};

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-top: 15px;
    min-width: 100%;
    min-height: 80%;
    padding: 10px;
`;
export const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
`;

export const Label = styled.label`
  display: flex;
  font-weight: bold;
  font-size: 15px;
  color: ${darkRedColor};
  ${({ inputWidth }) => InputWidth(inputWidth)}
  justify-content: flex-start;
  align-items: center;
  margin-right: 5px;
  margin-left: 10px;
  padding: 20px;
  `;
export const SelectForm = styled.select`
    height: 30px;
    width: 80%;
    padding-left: 5px;
    margin-top: 5px;
    border: none;
    background: none;
    border-bottom: 2px solid ${darkGrayColor};

    &:focus{
        outline: none;
        border-bottom: 2px solid ${darkRedColor};
     }
`;
export const InputForm = styled.input`
    height: 30px;
    width: 80%;
    padding-left: 5px;
    margin-top: 5px;
    border: none;
    background: none;
    border-bottom: 2px solid ${darkGrayColor};

    &:focus{
        outline: none;
        border-bottom: 2px solid ${darkRedColor};
     }
`;

export const ButtonSubmitForm = styled.button`
    width: 50%;
    height: 55px;
    font-weight: bold;
    border-style: none;
    font-size: 15px;
    border-radius: 15px;
    background: ${darkRedColor};
    color: #fff;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    cursor: pointer;
    :hover{
        background: ${darkRedColor};
    }
`;
