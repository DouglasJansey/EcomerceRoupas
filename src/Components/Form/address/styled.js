/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../../style/colors';

const InputWidth = (width) => {
  switch (width) {
    case 'numero': return 'width: 25%;';
    case 'estado': return 'width: 40%;';
    default: return 'width: 100%;';
  }
};

export const Form = styled.form`
    margin-top : 25px ;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 70%;
`;
export const Container = styled.div`
   display: flex;
   height: 100%;
   width: 100%;
   flex-wrap: wrap;
   justify-content: center;
`;

export const Label = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 15px;
  color: ${darkRedColor};
  ${({ inputWidth }) => InputWidth(inputWidth)}
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;

  `;
export const SelectForm = styled.select`
  height: 30px;
  width: 100%;
  font-size: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-top: 5px;
  justify-content:center;
  align-items: center;
  text-align: left;
  margin-left: 10px;

  &:focus{
    border: 1px solid ${darkRedColor};
    outline: none;
  }
`;
export const InputForm = styled.input`
  height: 30px;
  width: 100%;
  font-size: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  justify-content:center;
  align-items: center;
  text-align: left;
  margin-left: 10px;
  margin-top: 5px;
  padding-left: 10px;

  &:focus{
    border: 1px solid ${darkRedColor};
    outline: none;
  }
`;

export const ButtonSubmitForm = styled.button`
    width: 250px;
    height: 45px;
    font-weight: bold;
    border-style: none;
    font-size: 15px;
    border-radius: 15px;
    margin-top: 20px;
    background: ${darkRedColor};
    color: #fff;
    cursor: pointer;
    :hover{
        background: ${darkRedColor};
    }
`;
