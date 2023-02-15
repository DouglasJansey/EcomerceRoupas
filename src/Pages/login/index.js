/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
import { useDispatch } from 'react-redux';
import validator from 'validator';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Container, LoginContainer, Form,
} from './styled';
import * as action from '../../store/modules/auth/actions';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let error = false;

  function validateInput() {
    if (password.length < 8 || !password) error = true;
    if (!validator.isEmail(email)) error = true;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    validateInput();
    if (error) {
      return toast.error('LOGIN FAILURE', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    dispatch(action.loginRequest({ email, password }));
  }

  return (
    <Container>
      <LoginContainer>
        <span>
          <h1>Login</h1>
        </span>
        <Form onSubmit={handleSubmit} id="formRegister">
          <div>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">Entrar</button>
        </Form>
        <p>
          Se você não tem uma conta,
          <br />
          <Link to="/register"> Registre-se </Link>
          agora!
        </p>
      </LoginContainer>
    </Container>
  );
}
