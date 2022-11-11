/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
import validator from 'validator';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../../services/axios';
import {
  Container, RegisterContainer, Form, EndForm,
  PhotoContainer, DefaultImage, TextLogin,
} from './styled';
import inputMask from '../../Util';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [street, setStreet] = useState('');
  const [street_number, setStreetNumber] = useState('');
  const [city, setCity] = useState('');
  const [ddd_cel, setDdd] = useState('');
  const [cel_number, setCelPhone] = useState('');
  const [photo, setPhoto] = useState();
  const [profilePic, setProfilePic] = useState();
  const hiddenInput = useRef(null);
  const form = useRef(null);

  let error = false;

  function validateInput() {
    if (name.length < 4 || !name) {
      error = true;
    }
    if (password.length < 8 || !password) error = true;
    if (!validator.isEmail(email)) error = true;
    if (cpf.length > 0 && cpf.length < 11) error = true;
    if (!street || !street_number || !city) error = true;
    if (!cel_number || !ddd_cel) error = true;
    if (photo && (photo.type !== 'image/png' || photo.type !== 'image/jpeg')) error = true;
  }
  function validateImage(e) {
    const reader = new FileReader();
    const imagePic = e.target.files[0];
    if (!imagePic || imagePic.length > 0) return;
    setPhoto(imagePic);
    reader.onload = () => {
      setProfilePic(reader.result);
    };
    reader.readAsDataURL(imagePic);
  }
  function handleClick(e) {
    hiddenInput.current.click();
  }
  async function handleSubmit(e) {
    e.preventDefault();
    validateInput();
    const formData = new FormData();
    if (error) return toast.error('FAIULURE REGISTER');
    try {
      await axios.post('/users/', {
        name,
        cpf,
        email,
        gender,
        password,
      }).then(async (res) => {
        const { id } = res.data;
        const id_user = id;

        await axios.post('/endereco', {
          street,
          city,
          street_number,
          id_user,
        }).then(async () => {
          await axios.post('/telefones', {
            ddd_cel,
            cel_number,
            id_user,
          });
        }).then(async () => {
          formData.append('photo', photo);
          formData.append('user_id', id_user);
          await axios.post('/fotos', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },

          });
        });
      });
      toast.success('SUCCESS!');
    //   alert('Usuário criado com sucesso!');
    } catch (err) {
      toast.error('FAIULURE REGISTER');
    }
  }

  return (
    <Container>
      <RegisterContainer>
        <span>
          <h1>Crie sua conta</h1>
        </span>
        <Form onSubmit={handleSubmit} id="formRegister" ref={form}>
          <div>
            <PhotoContainer>
              <div>
                <div>
                  {profilePic
                    ? (
                      <img
                        src={profilePic}
                        alt="foto perfil"
                      />
                    ) : <DefaultImage />}
                </div>
                <label
                  htmlFor="foto"
                  onClickCapture={(e) => handleClick(e)}
                >
                  Foto
                  <input
                    type="file"
                    name="foto"
                    accept="image/png, image/jpeg"
                    ref={hiddenInput}
                    onChange={(e) => validateImage(e)}
                  />
                </label>
                <p>{photo ? photo.name : 'File' }</p>

              </div>
            </PhotoContainer>
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
            <label htmlFor="password" id="password">
              Password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div>
            <EndForm>
              <div>
                <label htmlFor="endereco">
                  Endereço:
                  <input
                    type="text"
                    name="endereco"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </label>
                <label htmlFor="numero">
                  Número:
                  <input
                    type="text"
                    name="numero"
                    value={street_number}
                    onChange={(e) => setStreetNumber(e.target.value)}
                  />
                </label>
                <label htmlFor="estado">
                  Estado:
                  <input
                    type="text"
                    name="estado"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </label>
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
                <label htmlFor="cpf">
                  CPF:
                  <input
                    type="text"
                    name="cpf"
                    value={inputMask(cpf, 'cpf')}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="ddd">
                  DDD:
                  <input
                    type="text"
                    name="ddd"
                    value={ddd_cel}
                    onChange={(e) => setDdd(e.target.value)}
                  />
                </label>
                <label htmlFor="celular">
                  Celular:
                  <input
                    type="text"
                    name="celular"
                    value={inputMask(cel_number, 'cel')}
                    onChange={(e) => setCelPhone(e.target.value)}
                  />
                </label>

              </div>
            </EndForm>
          </div>
          <button type="submit">Criar Conta</button>
        </Form>
        <TextLogin>
          Se você já tem uma conta faça o seu
          <Link to="/login"> Login</Link>
        </TextLogin>
      </RegisterContainer>
    </Container>
  );
}
