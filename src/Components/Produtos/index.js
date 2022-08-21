/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
import validator from 'validator';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../services/axios';
import {
  Container, Login, Form,
} from './styled';

export default function RegisterProducts() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

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
            <label htmlFor="endereco">
              Endereço:
              <input type="text" name="sobrenome" />
            </label>
            <label htmlFor="estado">
              Estado:
              <input type="text" name="estado" />
            </label>
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
// PRODUTO:
// ID
// NOME
// DESCRIÇÃO
// CATEGORIA - MASCULINO - FEMININO - INFANTIL
// SUB_CATEGORIA - VERÃO - INVERNO - OUTONO - PRIMAVERA - CHAVEIROS - ETC... - NULO
// TIPO - TENIS- BLUSAS - CAMISETAS - CASACOS - MEIAS
// PREÇO
// PREÇO_ANTIGO NULO


// TAMANHO - PP - P - M - G - GG - XG - XGG
// QUANTIDADE - NULO
// COR = ARRAY
// FOTO NULO
