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
    div:nth-child(1){
        margin-bottom: 15px;
    }
    a{
        margin-left: 10px;
        cursor: pointer;
    }
`;

export const SubContainer1 = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${bgFooter});
  background-repeat: none;
  background-size: cover;
  opacity: 0.2;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
