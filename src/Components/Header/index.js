/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable dot-notation */
/* eslint-disable prefer-const */
/* eslint-disable react/no-array-index-key */
import {
  useState, lazy, Suspense, useEffect,
} from 'react';
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
  const [bgIndex, setbgIndex] = useState();
  const length = useSelector((state) => state.cart.produtos.length);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const linksNav = ['Times', 'Feminino', 'Masculino', 'Tênis', 'Infantil', 'Ofertas'];
  const titleLinks = ['home', 'info', 'contato', 'login'];
  const [visible, setVisible] = useState();

  if (isLoggedIn) {
    const loginIndex = titleLinks.findIndex((item) => item === 'login');
    titleLinks[loginIndex] = 'conta';
  }
  useEffect(() => {
    setVisible(false);
    setbgIndex(-1);
  }, [pathname]);

  function handleLogout(e) {
    e.preventDefault();
    dispatch(actionAuth.userLogout());
  }

  const componentsTeams = {
    Times: lazy(() => import('../Teams')),
  };
  function CleanColorBgSubMenu() {
    if (visible) return setbgIndex(-1);
  }
  function SetTeam(e, index) {
    if (e.target.innerText === 'Times' && pathname === '/home') {
      setbgIndex(index);
      setVisible(!visible);
    }
  }

  function ComponentMenuTeams() {
    const ComponentMount = componentsTeams['Times'];
    return (
      <Suspense fallback={<div />}>
        <ContainerTeamMenu isVisible={visible}>
          <ComponentMount />
        </ContainerTeamMenu>
      </Suspense>
    );
  }
  function handleMenuSearch(props) {
    if (props !== 'Times') {
      dispatch(showcaseAction.filterType(props));
      console.log('header', props);
    }
    return props;
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
                handleMenuSearch(link);
                CleanColorBgSubMenu();
              }}
              bgColor={bgIndex}
              key={index}
            >
              {link !== 'Times' ? <Link to="/produtos">{link}</Link> : link}
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
      {pathname === '/home' ? <ComponentMenuTeams /> : ''}
    </Container>
  );
}
