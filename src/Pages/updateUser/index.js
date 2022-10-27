/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
import validator from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../../services/axios';
import {
  Container, UpdateContainer, Form, EndForm, SubContainer,
  PhotoContainer, DefaultImage, TextLogin, ButtonMenu, ButtonSubmitForm,
} from './styled';
import * as userAction from '../../store/modules/auth/actions';

export default function UpdateUser() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState();
  const [cpf, setCpf] = useState();
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState();
  const [street, setStreet] = useState();
  const [street_number, setStreetNumber] = useState();
  const [city, setCity] = useState();
  const [ddd_cel, setDdd] = useState();
  const [cel_number, setCelPhone] = useState();
  const [photo, setPhoto] = useState();
  const [profilePic, setProfilePic] = useState();
  const hiddenInput = useRef(null);
  const form = useRef(null);

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
    //  const formData = new FormData();
    try {
      await axios.put('/users/', {
        name,
      }).then((res) => dispatch(userAction.userRequest(res.data)));
      //   formData.append('photo', photo);
      //   await axios.post(`/fotos/${user.id}`, formData, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //     },

      //   });

      toast.success('SUCCESS!');
    //   alert('Usuário criado com sucesso!');
    } catch (err) {
      toast.error('FAIULURE REGISTER');
      console.log(err);
    }
  }

  return (
    <Container>
      <UpdateContainer>
        <SubContainer>
          <ButtonMenu type="button">
            Foto
          </ButtonMenu>
          <ButtonMenu type="button">
            Perfil
          </ButtonMenu>
          <ButtonMenu type="button">
            Endereço
          </ButtonMenu>
          <ButtonMenu type="button">
            Telefone
          </ButtonMenu>
        </SubContainer>
        <Form onSubmit={handleSubmit} id="formRegister" ref={form}>
          <div>
            <PhotoContainer>
              <div>
                <div>
                  <img
                    src={profilePic}
                    alt="foto perfil"
                  />
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
                      value={gender}
                    >
                      selecionar
                    </option>
                  </select>
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
                    value={cel_number}
                    onChange={(e) => setCelPhone(e.target.value)}
                  />
                </label>

              </div>
            </EndForm>
          </div>
          <ButtonSubmitForm type="submit">Salvar</ButtonSubmitForm>
        </Form>
        {/* <TextLogin>
          Se você já tem uma conta faça o seu
          <Link to="/login"> Login</Link>
        </TextLogin> */}
      </UpdateContainer>
    </Container>
  );
}
