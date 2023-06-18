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
  height: auto;
  background: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  margin-top: 10px;
  z-index: 11;
`;
export const ContainerTitle = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  img{
        width: 160px;
        margin-left: 10px;
        margin-bottom: 10px;
    }
 @media (max-width: 570px) {
    display: flex;
    width: auto;
    align-items: center;
    margin-top: 10px;
    justify-content: space-around;
    img{
        margin-right: 20px;
    }
}
`;
export const SubContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 100%;
    margin-right: 20px;
    ${({ borderColor }) => ChildBorder(borderColor)}
    border-bottom: 5px solid ${lightGrayColor};

    :hover{
        border-bottom: 5px solid ${darkRedColor};
    }

    a{
    font-size: 0.9rem;
    margin-bottom: 15px;
    font-weight: bold;
    display: flex;
    color: ${darkGrayColor};
    }

`;
export const SubContainer1 = styled.div`
  width: 100%;
  height: auto;
  background: ${darkBlueColor};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  a{
    font-size: 0.9rem;
    display: flex;
    color: #fff;
    }
    @media (max-width: 940px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
`;
export const SubContainer = styled.div`
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    width: auto;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 370px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

`;
export const TeamsContainer = styled.div`
    height: auto;
    flex-wrap: wrap;
    width: auto;
    align-items: center;
    justify-content: center;
    `;
export const ContainerTeamMenu = styled.div`
    display: ${(props) => (props.isVisible ? 'flex' : 'none')};;
    transform: translateX(calc(${(props) => props.posX}px/2));
    height: auto;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    background: none;
`;
export const UserInfo = styled.div`
    display: flex;
    width: 100%;
    height: 20px;
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
    flex-wrap: wrap;
    align-items: center;
    width: auto;
    height: 100%;
    padding: 15px;
    color: #fff;
    cursor: pointer;
    ${({ bgColor }) => ChildBg(bgColor)};
    :hover{
        background: ${darkRedColor};
    }
`;
export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 30px;
    margin-right: 50px;
    margin-left: 5px;
    background: none;
    input{
        width: 250px;
        min-width: 150px;
        height: 100%;
        border-radius: 5px;
    }
    @media (max-width: 350px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
    input{
        width: 100%;
    }
}
`;
export const CartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 85%;
    padding: 5px;
    font-weight: bold;
    background: ${yellowColor};
    color: ${darkRedColor};
    position: relative;

`;
export const Cart = styled(BsCart4)`
    font-size: 10px;
    color: ${darkRedColor};
    margin-bottom: 5px;
    margin-left: 5px;
    position: relative;
`;
export const CartCount = styled.div`
    align-items: center;
    justify-content: center;
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
flex-wrap: wrap;
height: auto;
width: auto;
@media (max-width: 390px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
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
