/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
import validator from 'validator';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../services/axios';
import {
  Container, Login, Form,
} from './styled';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  let error = false;
  function validateInput() {
    if (name.length < 4 || !name) {
      error = true;
    }
    if (password.length < 8 || !password) error = true;
    if (!validator.isEmail(email)) error = true;
    if (cpf.length > 0 && cpf.length < 11) error = true;
  }
  console.log(error);
  async function handleSubmit(e) {
    e.preventDefault();
    validateInput();
    console.log(error);
    try {
      await axios.post('/client/', {
        name,
        cpf,
        email,
        gender,
        password,
      });
    } catch (err) {
      return console.log(err);
    }
  }

  return (
    <Container>
      <Login>
        <span>
          <h1>Faça seu Login</h1>
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
      </Login>
    </Container>
  );
}
