import styled from 'styled-components';
import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../style/colors';

export const Container = styled.section`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: flex-start;
  background: ${lightGrayColor};
  padding-bottom: 8px;
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
  max-height: 100%;
  display: flex;
  background: ${lightGrayColor};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  `;
export const ContainerTotal = styled.div`
  display: flex;
  flex-direction: column;
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
  flex-direction: column;
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
`;
