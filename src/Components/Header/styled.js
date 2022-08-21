import styled from 'styled-components';

import {
  bgColor, primaryColor, grayColor, bgColorSecondary, secondaryColor,
} from '../../style/colors';

//   rgba(75, 61, 143, 0.3);

export const Container = styled.div`
  max-width: 100%;
  position: fixed;
  width:100%;
  height: 60px;
  ${(props) => (props.opacityNav
    ? 'background: linear-gradient(to top, rgba(75, 61, 143, 0) 0%, rgba(75, 61, 143, 0.7)70%, rgba(75, 61, 143, 10.8)100%)'
    : `background:${bgColor}`)};
  color: ${primaryColor};
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
  color: ${grayColor};
  margin-right: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  :hover{
  opacity: 0.8;
  color:${primaryColor}
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
        color: ${grayColor};
        :hover{
            color: ${secondaryColor};

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
