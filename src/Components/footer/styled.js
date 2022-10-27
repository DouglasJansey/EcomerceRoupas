import styled from 'styled-components';
import { BsCart4, BsPersonCheckFill, BsHeartFill } from 'react-icons/bs';
import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../style/colors';
import bgFooter from '../../img/bgFooter.jpg';

const ChildBorder = (props) => {
  switch (props) {
    case '/': return `:nth-child(1){border-bottom: 5px solid ${darkRedColor};}`;
    case '/home': return `:nth-child(1){border-bottom: 5px solid ${darkRedColor};}`;
    case '/info': return `:nth-child(2){border-bottom: 5px solid ${darkRedColor};}`;
    case '/contato': return `:nth-child(3){border-bottom: 5px solid ${darkRedColor};}`;
    case '/login': return `:nth-child(4){border-bottom: 5px solid ${darkRedColor};}`;

    default: return `border-bottom: 5px solid ${darkGrayColor};`;
  }
};
const ChildBg = (props) => {
  switch (props) {
    case 0: return `:nth-child(${props + 1}){background: ${darkRedColor};}`;
    case 1: return `:nth-child(${props + 1}){background: ${darkRedColor};}`;
    case 2: return `:nth-child(${props + 1}){background: ${darkRedColor};}`;
    case 3: return `:nth-child(${props + 1}){background: ${darkRedColor};}`;
    case 4: return `:nth-child(${props + 1}){background: ${darkRedColor};}`;
    case 5: return `:nth-child(${props + 1}){background: ${darkRedColor};}`;

    default: return '';
  }
};

export const Container = styled.footer`
  width: 100%;
  height: 100px;
  background: #183d5b;
  position: relative;
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
export const SubContainerNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 25px;
    width: auto;
    height: 100%;
    padding: 5px;
    ${({ bgColor }) => ChildBg(bgColor)};
    :hover{
        background: ${darkRedColor};
    }
`;
