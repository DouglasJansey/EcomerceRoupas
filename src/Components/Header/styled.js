import styled from 'styled-components';
import { BsCart4, BsPersonCheckFill, BsHeartFill } from 'react-icons/bs';
import {
  darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../style/colors';

const ChildBorder = (props) => {
  switch (props) {
    case '/': return `:nth-child(1){border-bottom: 5px solid ${darkRedColor};}`;
    case '/home': return `:nth-child(1){border-bottom: 5px solid ${darkRedColor};}`;
    case '/info': return `:nth-child(2){border-bottom: 5px solid ${darkRedColor};}`;
    case '/contato': return `:nth-child(3){border-bottom: 5px solid ${darkRedColor};}`;
    case '/login': return `:nth-child(4){border-bottom: 5px solid ${darkRedColor};}`;
    case '/conta': return `:nth-child(4){border-bottom: 5px solid ${darkRedColor};}`;

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

export const Container = styled.div`
  width: 100%;
  height: 130px;
  position: fixed;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  z-index: 11;
`;
export const ContainerTitle = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
        max-height: 70%;
        min-width: 10%;
        margin-left: 10px;
    }
`;
export const SubContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 25px;
    width: auto;
    height: 50%;
    margin-right: 20px;
    ${({ borderColor }) => ChildBorder(borderColor)}
    border-bottom: 5px solid ${lightGrayColor};

    :hover{
        border-bottom: 5px solid ${darkRedColor};
    }

    a{
    font-size: 0.9rem;
    font-weight: bold;
    display: flex;
    color: ${darkGrayColor};
    }
`;
export const SubContainer1 = styled.div`
  width: 100%;
  height: 30%;
  background: ${darkBlueColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  a{
    font-size: 0.9rem;
    display: flex;
    color: #fff;
    }
`;
export const SubContainer = styled.div`
    display: flex;
    height: 100%;
    width: auto;
    margin-left: 20px;
    align-items: center;
    margin-right: 15px;
    justify-content: flex-end;
`;
export const UserInfo = styled.div`
    display: flex;
    width: 100%;
    height:20px;
    align-items: center;
    padding-right: 10px;
    padding-top: 5px;
    justify-content: flex-end;
    color: ${darkGrayColor};
    font-size: 0.8rem;
    button{
        border: none;
        background: ${darkGrayColor};
        border-radius: 5px;
        padding: 3px 5px;
        font-weight: bold;
        font-size: 0.8rem;
        color: #fff;
        margin-left: 10px;
        margin-right: 10px;
        cursor: pointer;
        :hover{
            background: ${darkRedColor};
            transition: 1s all;
        }
    }
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
export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 300px;
    height: 23px;
    margin-right: 50px;
    overflow: hidden;
    input{
        width: 100%;
        height: 100%;
    }
`;
export const CartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 150px;
    padding: 5px;
    font-weight: bold;
    background: ${yellowColor};
    color: ${darkRedColor};
    position: relative;
`;
export const Cart = styled(BsCart4)`
    font-size: 20px;
    color: ${darkRedColor};
    margin-bottom: 5px;
    margin-left: 5px;
`;
export const CartCount = styled.div`
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    display: flex;
    border-radius: 5px;
    padding: 3px;
    margin-left: 5px;
    background: #fff;

    p:nth-child(1) {
        text-align: center;
        font-size: 15px;
        margin-right: 0.5px;
        font-weight: bold;
    }
`;

export const NavBar = styled.nav`
display: flex;
align-items: center;
height: 100%;
width: auto;
overflow: hidden;
`;

export const LoginContainer = styled.div`
    display: flex;
    height: 25px;
    width: 70px;
    border-radius: 2px;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    &:hover{
        opacity: 0.8;
    }
    background: ${darkBlueColor};
    p{
         font-size: 12px;
        font-weight: bold;
        color: ${darkBlueColor} ;
    }

   a{
        display: flex;
        justify-content: center;
        align-items: center;

    }
`;
export const UserLogin = styled(BsPersonCheckFill)`
    font-size: 20px;
    margin-left: 5px;
    color: ${darkBlueColor};
`;
export const ImageUser = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 100%;
    margin-left: 5px;
`;
export const Favorit = styled(BsHeartFill)`
    font-size: 20px;
    color: white;
`;
