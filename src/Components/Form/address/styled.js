/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../../style/colors';

const InputWidth = (width) => {
  switch (width) {
    case 'numero': return 'width: 5%;min-width: 40px;';
    case 'estado': return 'width: 5%;min-width: 250px;';
    default: return 'width: 100%;';
  }
};

export const Form = styled.form`
    margin-top : 5px ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    min-height: 50vh;
    padding: 10px;
    div{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
    `;
export const Container = styled.div`
   display: flex;
   min-height: 100%;
   width: 80vw;
   justify-content: center;

`;

export const Label = styled.div`
  width: auto;
  font-weight: bold;
  font-size: 15px;
  color: ${darkRedColor};
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;

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
    ${({ inputWidth }) => InputWidth(inputWidth)}
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
    width: 250px;
    height: 45px;
    font-weight: bold;
    border-style: none;
    font-size: 15px;
    border-radius: 15px;
    margin-top: 10px;
    background: ${darkRedColor};
    color: #fff;
    cursor: pointer;
    :hover{
        background: ${darkRedColor};
    }
`;
