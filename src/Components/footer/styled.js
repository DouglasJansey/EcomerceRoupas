import styled from 'styled-components';
import { BsCart4, BsPersonCheckFill, BsHeartFill } from 'react-icons/bs';
import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../style/colors';
import bgFooter from '../../img/bgFooter.jpg';

export const Container = styled.footer`
  width: 100%;
  height: 100px;
  background: #183d5b;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  bottom: 0;
  margin: auto;
  width: 100%;
  bottom: 0;
  left: 0;

  div:nth-child(1){
    background: transparent;
  }
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background: #183d5b;
    position: relative;
    align-items: center;
    justify-content: center;
    color: #fff;
    a{
        margin-left: 10px;
        color: #fff;
    }
`;

export const SubContainer1 = styled.div`
  display: flex;
  background: red;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  a{
    margin-left: 15px;
  }
`;
