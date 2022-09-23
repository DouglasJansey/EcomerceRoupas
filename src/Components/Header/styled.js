import styled from 'styled-components';
import { BsCart4, BsPersonCheckFill } from 'react-icons/bs';

import {
  bgColor, primaryColor, grayColor, bgColorSecondary, secondaryColor,
} from '../../style/colors';
import Login from '../../Pages/login';

//   rgba(75, 61, 143, 0.3);

const OpacityNavColor = (props) => {
  if (props) {
    return (
      `background: linear-gradient(to bottom, rgba(75, 61, 143, 0.8), rgba(75, 61, 143, 0.4), rgba(75, 61, 143, 0));
      nav > a, p{
        color: ${bgColorSecondary};
      }`
    );
  }
  return (
    `background:${bgColor};
    nav > a, p{
        color: ${grayColor};
      }
  `);
};

export const Container = styled.div`
   width: 100%;
  position: fixed;
  width:100%;
  height: 60px;
  ${({ opacityNav }) => OpacityNavColor(opacityNav)};
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 11;
  transition: all 0.5s ease;

  input{
    border-radius: 7px;
    border: none;
    height: 100%;
    width: 100%;
    :focus{
      border: none;
      outline: none;
    }
  }
`;
export const InputContainer = styled.div`
    display: flex;
    width: 50%;
    height: 30px;
`;

export const NavBar = styled.nav`
display: flex;
max-width: 30%;
min-width: 250px;
justify-content: space-evenly;
padding: 5px;

a{
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  :hover{
  color:${primaryColor};

  }
}
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
    background: ${grayColor};
    p{
         font-size: 15px;
        font-weight: bold;
        color: ${bgColorSecondary} ;
    }

   a{
        display: flex;
        justify-content: center;
        align-items: center;

    }
`;
export const UserLogin = styled(BsPersonCheckFill)`
    font-size: 20px;
    color: ${bgColorSecondary};
`;
export const Cart = styled(BsCart4)`
    font-size: 25px;
    color: white;
    margin-top: 15px;
`;
export const SubContainer = styled.div`
    display: flex;
    height: 100%;
    width: 180px;
    min-width: 135px;
    align-items: center;
    justify-content: space-evenly;

`;
export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
`;
export const CartCount = styled.div`
    align-items: center;
    justify-content: center;
    width: 10px;
    height: 11px;
    display: flex;
    border-radius: 100%;
    padding: 3px;
    z-index: 5;
    right: -6px;
    top: 12px;
    position: absolute;
    background: ${primaryColor};
    color: ${bgColorSecondary};
    p:nth-child(1) {
        color: ${bgColorSecondary};
        text-align: center;
        font-size: 15px;
        margin-left: 1px;
        font-weight: bold;
    }
`;
