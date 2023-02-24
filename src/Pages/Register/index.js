/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable radix */
/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
import validator from 'validator';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../../services/axios';
import {
  Container,
  RegisterContainer,
  Form,
  EndForm,
  PhotoContainer,
  DefaultImage,
  TextLogin,
  InputForm,
  SelectForm,
  ContainerLoading,
} from './styled';
import inputMask from '../../Util';
import Loading from '../../Components/Loading';
import urlStorage from '../../services/urlStoragePhoto';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inputError, setInputError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [flagClick, setflagClick] = useState(false);
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
    setInputError(true);
    if (!validator.isEmail(email)) {
      error = true;
    }
    if (name.length < 4 || !name) {
      error = true;
    }
    if (password.length < 8 || !password) {
      error = true;
    }
    if (cpf.length > 0 && cpf.length < 11) {
      error = true;
    }
    if (!street || !street_number || !city) {
      error = true;
    }
    if (!cel_number || !ddd_cel) {
      error = true;
    }
    if (!gender) {
      error = true;
    }
    // if (photo && (photo.type !== 'image/png' || photo.type !== 'image/jpeg')) error = true;
  }

  async function validateImage(e) {
    const reader = new FileReader();
    const imagePic = e.target.files[0];
    if (!imagePic || imagePic.length > 0) return;
    setPhoto(imagePic);
    reader.onload = (fileReader) => {
      setProfilePic(fileReader.target.result);
    };
    reader.readAsDataURL(imagePic);
  }

  function handleClick(e) {
    hiddenInput.current.click();
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const newcpf = cpf.replace(/\D/g, '');
    validateInput(e);
    if (error) return '';
    setflagClick(true);
    if (flagClick) return;
    const formData = new FormData();
    try {
      setLoading(true);
      await axios
        .post('/users', {
          name,
          cpf: newcpf,
          email,
          gender,
          password,
        })
        .then(async (res) => {
          const { id } = res.data;
          const id_user = id;
          await axios
            .post('/endereco', {
              street,
              city,
              street_number,
              id_user,
            })
            .then(async () => {
              const dddCel = parseInt(ddd_cel);
              const celNumber = +cel_number.replace(/\D/g, '');
              await axios.post('/telefones', {
                ddd_cel: dddCel,
                cel_number: celNumber,
                id_user,
              });
            })
            .then(async () => {
              formData.append('image', photo);
              await axios.post(`${urlStorage}`, formData, {
                Content_Type: 'multipart/form-data',
                method: 'POST',
              }).then(async (resp) => {
                const { data } = resp.data;
                const { display_url } = data;
                await axios.post('/fotos', {
                  originalname: data.id,
                  filename: data.image.filename,
                  display_url,
                  user_id: id_user,
                });
              });
            });
        });
      toast.success('SUCESSO!');
      setLoading(false);
      setflagClick(false);
    } catch (err) {
      toast.error('ERRO');
      setLoading(false);
      setflagClick(false);
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
                  {profilePic ? (
                    <img
                      src={profilePic}
                      alt="foto perfil"
                    />
                  ) : (
                    <DefaultImage />
                  )}
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
                <p>{photo ? photo.name : 'File'}</p>
              </div>
            </PhotoContainer>
            <label htmlFor="nome">
              Nome*:
              <InputForm
                inputError={inputError}
                type="text"
                name="nome"
                value={name}
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label
              htmlFor="email"
            >
              Email*:
              <InputForm
                inputError={inputError}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="password" id="password">
              Password*:
              <InputForm
                inputError={inputError}
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
                  Endereço*:
                  <InputForm
                    inputError={inputError}
                    type="text"
                    name="endereco"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </label>
                <label htmlFor="numero">
                  Número*:
                  <InputForm
                    inputError={inputError}
                    type="text"
                    name="numero"
                    value={street_number}
                    onChange={(e) => setStreetNumber(e.target.value)}
                  />
                </label>
                <label htmlFor="estado">
                  Estado*:
                  <InputForm
                    inputError={inputError}
                    type="text"
                    name="estado"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </label>
                <label htmlFor="gender">
                  Gênero*:
                  <SelectForm
                    inputError={inputError}
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    name="genero"
                  >
                    <option defaultChecked hidden value=" ">
                      selecionar
                    </option>
                    <option value="Masculino">
                      Masculino
                    </option>
                    <option value="Feminino">
                      Feminino
                    </option>
                    <option value="Outro...">
                      Outro...
                    </option>
                  </SelectForm>
                </label>
                <label htmlFor="cpf">
                  CPF*:
                  <InputForm
                    inputError={inputError}
                    type="text"
                    name="cpf"
                    value={cpf}
                    onChange={(e) => setCpf(inputMask(e.target.value, 'cpf'))}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="ddd">
                  DDD*:
                  <InputForm
                    inputError={inputError}
                    type="text"
                    name="ddd"
                    value={ddd_cel}
                    onChange={(e) => setDdd(e.target.value)}
                  />
                </label>
                <label htmlFor="celular">
                  Celular*:
                  <InputForm
                    inputError={inputError}
                    type="text"
                    name="celular"
                    value={cel_number}
                    onChange={(e) => setCelPhone(inputMask(e.target.value, 'cel'))}
                  />
                </label>
              </div>
            </EndForm>
          </div>
          <button type="submit">Criar Conta</button>
        </Form>
        <ContainerLoading>
          {loading ? <Loading /> : ''}
        </ContainerLoading>
        <TextLogin>
          Se você já tem uma conta faça o seu
          <Link to="/login"> Login</Link>
        </TextLogin>
      </RegisterContainer>
    </Container>
  );
}
