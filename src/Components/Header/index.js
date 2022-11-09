/* eslint-disable dot-notation */
/* eslint-disable prefer-const */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { render } from 'react-dom';
import * as actionAuth from '../../store/modules/auth/actions';
import logo from '../../img/logo.png';

import {
  Container, NavBar, CartContainer, ContainerTitle,
  InputContainer, Cart, CartCount, SubContainer, UserInfo,
  SubContainer1, SubContainerNav, SubContainerTitle,
} from './styled';

export default function Header() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [bgIndex, setbgIndex] = useState('');
  const length = useSelector((state) => state.cart.produtos.length);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const linksNav = ['Times', 'Feminino', 'Masculino', 'Infantil', 'Ofertas'];
  const titleLinks = ['home', 'info', 'contato', 'login'];

  if (isLoggedIn) {
    const loginIndex = titleLinks.findIndex((item) => item === 'login');
    titleLinks[loginIndex] = 'conta';
  }
  function handleLogout(e) {
    e.preventDefault();
    dispatch(actionAuth.userLogout());
  }

  return (
    <Container>
      {isLoggedIn
        ? (
          <UserInfo>
            {user.email}
            <button type="button" onClick={(e) => handleLogout(e)}>Logout</button>
          </UserInfo>
        )
        : ''}
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
