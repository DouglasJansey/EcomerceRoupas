import styled from 'styled-components';
import { BsCart3 } from 'react-icons/bs';

import {
  bgColor, primaryColor, grayColor, bgColorSecondary, secondaryColor,
} from '../../style/colors';

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
  max-width: 100%;
  position: fixed;
  width:100%;
  height: 60px;
  ${({ opacityNav }) => OpacityNavColor(opacityNav)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 11;
  transition: all 0.5s ease;

  input{
    border-radius: 7px;
    border: none;
    height: 100%;
    width: 100%;
    z-index: 10;
    :focus{
      border: none;
      outline: none;
    }
  }
  
  button{
    margin-left: -35px;
    text-decoration: none;
    border-radius: 100%;
    border: none;
    background: none;
    padding: 5px;
    cursor: pointer;
  }
`;
export const InputContainer = styled.div`
    display: flex;
    width: 70vmin;
    height: 30px;
`;

export const NavBar = styled.nav`
display: flex;
min-width: 40%;
width: 40vmax;
margin-left: 15px;
z-index: 10;

a{
  margin-right: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover{
  color:${primaryColor};      
 
  }
}
`;
export const LoginContainer = styled.div`
    display: flex;
    height: 100% ;
    margin-left: 25px;
    align-items: center;
    justify-content: flex-end;
    padding: 15px;
    p{
        margin-left: 10px;
        font-size: 11px;
        font-weight: bold;
        :hover{
            color: ${primaryColor};

        }
    }
    div{
        height: 55%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`;
export const Cart = styled(BsCart3)`
    font-size: 30px;
    color: white;
`;
export const CartContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    
`;
export const CartCount = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    border-radius: 5px;
    top: 8px;
    right: -5px;
    z-index: 5;
    width: 10px;
    height: 14px;
    background: ${primaryColor};
    padding: 2.5px;
    color: ${bgColorSecondary};    
`;
