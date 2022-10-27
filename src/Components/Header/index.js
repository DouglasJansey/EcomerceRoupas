/* eslint-disable dot-notation */
/* eslint-disable prefer-const */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Login from '../../Pages/login';
import logo from '../../img/logo.png';

import {
  Container, NavBar, CartContainer, LoginContainer, ContainerTitle,
  InputContainer, Cart, CartCount, UserLogin, SubContainer,
  Favorit, ImageUser, SubContainer1, SubContainerNav, SubContainerTitle,
} from './styled';

export default function Header() {
  const { pathname } = useLocation();
  const linksNav = ['Times', 'Feminino', 'Masculino', 'Infantil', 'Ofertas'];
  const titleLinks = ['home', 'info', 'contato', 'login'];
  const [bgIndex, setbgIndex] = useState('');
  const length = useSelector((state) => state.cart.produtos.length);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  if (isLoggedIn) {
    const loginIndex = titleLinks.findIndex((item) => item === 'login');
    titleLinks[loginIndex] = 'conta';
  }

  return (
    <Container>
      {/* <div>{user.name}</div> */}
      <ContainerTitle>
        <img src={logo} alt="logo" />
        <NavBar>
          {titleLinks.map((links, index) => (
            <SubContainerTitle borderColor={pathname} key={index}>
              <Link to={links}>
                {links.toUpperCase()}
              </Link>
            </SubContainerTitle>
          ))}
        </NavBar>
      </ContainerTitle>
      <SubContainer1>
        <NavBar>
          {linksNav.map((link, index) => (
            <SubContainerNav bgColor={bgIndex} key={index}>
              <Link to="/" onClick={() => setbgIndex(index)}>
                {link}
              </Link>
            </SubContainerNav>
          ))}
        </NavBar>
        <SubContainer>
          <InputContainer>
            <input type="text" name="search" placeholder=" Pesquisar..." />
          </InputContainer>
          <CartContainer>
            CARRINHO
            <Link to="/cart">
              <Cart />
            </Link>
            <CartCount>
              <p>
                {length || 0}
              </p>
            </CartCount>
          </CartContainer>
        </SubContainer>
      </SubContainer1>
    </Container>
  );
}
