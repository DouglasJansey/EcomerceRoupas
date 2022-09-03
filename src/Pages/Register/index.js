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
      await axios.post('/users/', {
        name,
        cpf,
        email,
        gender,
        password,
      }).then((res) => {
        const { id } = res.data;
        if (!id) {
          return;
        }
        axios.post('/endereco', {

        });
        console.log(id);
      });
    } catch (err) {
      return console.log(err);
    }
  }

  return (
    <Container>
      <Login>
        <span>
          <h1>Crie sua conta</h1>
        </span>
        <Form onSubmit={handleSubmit} id="formRegister">
          <div>
            <label htmlFor="nome">
              Nome:
              <input
                type="text"
                name="nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
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
            <label htmlFor="cpf">
              CPF:
              <input
                type="text"
                name="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="gender">
              Gênero:
              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option
                  defaultChecked
                  hidden
                  value=" "
                >
                  selecionar
                </option>
                <option
                  value="Masculino"
                >
                  Masculino
                </option>
                <option
                  value="Feminino"
                >
                  Feminino
                </option>
                <option
                  value="Outro..."
                >
                  Outro...
                </option>
              </select>
            </label>
            <label htmlFor="telefone">
              Telefone:
              <input type="text" name="telefone" />
            </label>
            <div>
              <label htmlFor="endereco">
                Endereço:
                <input type="text" name="sobrenome" />
              </label>
              <label htmlFor="estado">
                Estado:
                <input type="text" name="estado" />
              </label>
            </div>
          </div>
          <button type="submit">Criar Conta</button>
        </Form>
        <p>
          Se você já tem uma conta faça o seu
          <Link to="/login"> Login</Link>
        </p>
      </Login>
    </Container>
  );
}
