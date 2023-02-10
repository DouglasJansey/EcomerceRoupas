/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable dot-notation */
/* eslint-disable prefer-const */
/* eslint-disable react/no-array-index-key */
import { useState, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import * as actionAuth from '../../store/modules/auth/actions';
import * as showcaseAction from '../../store/modules/showcase/actions';
import logo from '../../img/logo.png';
import {
  Container, NavBar, CartContainer, ContainerTitle,
  InputContainer, Cart, CartCount, SubContainer, UserInfo,
  SubContainer1, SubContainerNav, SubContainerTitle, TeamsContainer,
  ContainerTeamMenu,
} from './styled';

export default function Header() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [bgIndex, setbgIndex] = useState(-1);
  const length = useSelector((state) => state.cart.produtos.length);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const linksNav = ['Times', 'Feminino', 'Masculino', 'Infantil', 'Ofertas'];
  const titleLinks = ['home', 'info', 'contato', 'login'];
  const [menuTeam, setMenuTeam] = useState('');
  const [leave, setLeave] = useState(false);

  if (isLoggedIn) {
    const loginIndex = titleLinks.findIndex((item) => item === 'login');
    titleLinks[loginIndex] = 'conta';
  }

  function handleLogout(e) {
    e.preventDefault();
    dispatch(actionAuth.userLogout());
  }

  const componentsTeams = {
    Times: lazy(() => import('../Teams/index')),
  };

  function SetTeam(e, index) {
    if (bgIndex !== -1) setbgIndex(-1);
    if (menuTeam === 'Times') return setMenuTeam('');
    setbgIndex(index);
    setMenuTeam(e.target.innerText);
  }
  function ComponentMenuTeams() {
    const ComponentMount = componentsTeams[menuTeam];
    return (
      <ContainerTeamMenu>
        <TeamsContainer>
          <Suspense fallback={<div />}>
            {menuTeam === 'Times' ? <ComponentMount /> : ''}
          </Suspense>
        </TeamsContainer>
      </ContainerTeamMenu>
    );
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
              <Link name={links} to={links}>
                {links.toUpperCase()}
              </Link>
            </SubContainerTitle>
          ))}
        </NavBar>
      </ContainerTitle>
      <SubContainer1>
        <NavBar>
          {linksNav.map((link, index) => (
            <SubContainerNav
              onClick={(e) => {
                SetTeam(e, index);
                setLeave(!leave);
              }}
              bgColor={bgIndex}
              key={index}
            >
              {link}
            </SubContainerNav>

          ))}
        </NavBar>
        <SubContainer>
          <InputContainer>
            <input type="text" name="search" placeholder=" Pesquisar..." />
          </InputContainer>
          <Link to="/cart">
            <CartContainer>
              CARRINHO
              <Cart />
              <CartCount>
                <p>
                  {length || 0}
                </p>
              </CartCount>
            </CartContainer>
          </Link>
        </SubContainer>
      </SubContainer1>
      <ComponentMenuTeams />
    </Container>
  );
}
