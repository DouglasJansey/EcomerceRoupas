import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { MdLogin } from 'react-icons/md';

import {
  Container, NavBar, CartContainer, LoginContainer,
  InputContainer, Cart, CartCount,
} from './styled';

export default function Header() {
  const [NavOpaci, setNavOpaci] = useState(false);
  const length = useSelector((state) => state.reducers.produtos.length);

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
          <div />
        </Link>
        <Link to="/contato"> Contato</Link>
        <a href="/"> Galeria</a>
      </NavBar>
      <InputContainer>
        <input type="text" name="search" placeholder=" Pesquisar..." />
        <button type="submit">
          <BsSearch size={15} color="#d0d1d3" />
        </button>
      </InputContainer>
      <CartContainer>
        <Link to="/cart">
          <CartCount>
            <p>
              {length}
            </p>
          </CartCount>
          <Cart />
        </Link>
      </CartContainer>
      <LoginContainer>
        <Link to="/register">
          <p>
            Cadastrar
          </p>
        </Link>
        <Link to="/login">
          <MdLogin size={20} color="#fff" />
          <p>
            Login
          </p>
        </Link>
      </LoginContainer>
    </Container>
  );
}
