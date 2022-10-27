import styled from 'styled-components';
import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../../style/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  align-items: center;
  justify-content: center;
  `;
export const ButtonFinish = styled.button`
    width: 100%;
    height: 45px;
    margin-top: 15px;
    font-weight: bold;
    border-style: none;
    font-size: 25px;
    border-radius: 15px;
    background: ${darkRedColor};
    color: ${darkRedColor};
    cursor: pointer;
    :hover{
        background: ${darkRedColor};
    }
  `;
export const ContainerTotal = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
  height: 500px;
  display: flex;
  border-radius: 10px;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
`;
