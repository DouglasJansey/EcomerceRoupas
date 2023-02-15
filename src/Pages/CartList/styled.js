import styled from 'styled-components';
import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../style/colors';

export const Container = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  height: auto;
  justify-content: center;
  align-items:flex-start;
`;

export const Container2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  `;
export const ContainerCartList = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  background: ${lightGrayColor};
  justify-content: flex-start;
  align-items: center;
  `;
export const ContainerTotal = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 200px;
  display: flex;
  background: #fff;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  padding: 5px;
`;
export const SubContainer = styled.div`
  display: flex;
  width: 25%;
  min-width: 150px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  background: #fff;
`;
