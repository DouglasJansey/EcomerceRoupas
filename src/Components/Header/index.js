import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from '../../Pages/login';

import {
  Container, NavBar, CartContainer, LoginContainer,
  InputContainer, Cart, CartCount, UserLogin, SubContainer,
} from './styled';

export default function Header() {
  const [NavOpaci, setNavOpaci] = useState(false);
  const length = useSelector((state) => state.cart.produtos.length);
  const visible = false;
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 20) {
        setNavOpaci(true);
      } else {
        setNavOpaci(false);
      }
    };
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);
  return (
    <Container opacityNav={NavOpaci}>
      <NavBar>
        <Link to="/">
          Página Inicial
        </Link>
        <Link to="/contato"> Contato</Link>
        <a href="/"> Galeria</a>
      </NavBar>
      <InputContainer>
        <input type="text" name="search" placeholder=" Pesquisar..." />

      </InputContainer>
      <SubContainer>
        <CartContainer>
          <Link to="/cart">
            <CartCount>
              <p>
                { length }
              </p>
            </CartCount>
            <Cart />
          </Link>
        </CartContainer>
        <Link to="/login">
          <LoginContainer>
            <p>
              Login
            </p>
            <UserLogin />
          </LoginContainer>
        </Link>
      </SubContainer>
    </Container>
  );
}
