import styled from 'styled-components';
import { BsCart4, BsPersonCheckFill, BsHeartFill } from 'react-icons/bs';
import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../style/colors';
import bgFooter from '../../img/bgFooter.jpg';

export const Container = styled.footer`
  width: 100%;
  height: auto;
  background: #183d5b;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
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
    margin-top: 20px;
  }
`;
