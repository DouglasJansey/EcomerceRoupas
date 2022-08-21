import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch, BsPersonCircle } from 'react-icons/bs';

import {
  Container, NavBar, LoginContainer, InputContainer,
} from './styled';

export default function Header() {
  const [NavOpaci, setNavOpaci] = useState(false);

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
        <Link to="/"> Página Inicial</Link>
        <Link to="/contato"> Contato</Link>
        <a href="/"> Galeria</a>
      </NavBar>
      <InputContainer>
        <input type="text" name="search" placeholder=" Pesquisar..." />
        <button type="submit">
          <BsSearch size={15} color="#d0d1d3" />
        </button>
      </InputContainer>

      <LoginContainer>
        <BsPersonCircle size={30} color="#f9f9f9" />
        <div>
          <Link to="/register">
            <p>
              Cadastrar
            </p>
          </Link>
          <Link to="/login">
            <p>
              Login
            </p>
          </Link>
        </div>
      </LoginContainer>
    </Container>
  );
}
