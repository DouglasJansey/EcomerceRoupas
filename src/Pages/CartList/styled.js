import styled from 'styled-components';
import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../style/colors';

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: flex-start;
`;

export const Container2 = styled.div`
  width: 100%;
  min-width: 242px;
  height: 100%;
  display: flex;
  padding: 5px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  `;
export const ContainerCartList = styled.div`
  width: 80%;
  height: 100%;
  min-height: 480px;
  display: flex;
  padding: 5px;
  background: ${lightGrayColor};
  padding: 10px;
  justify-content: center;
  align-items: center;
  `;
export const ContainerTotal = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 200px;
  display: flex;
  background: #fff;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
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
  padding: 5px;
`;
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  display: flex;
  border-left: 1px solid ${darkRedColor};
  background: #fff;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
`;
