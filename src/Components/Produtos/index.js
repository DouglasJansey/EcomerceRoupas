/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
import validator from 'validator';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../services/axios';
import {
  Container, Register, Form, ContainerPic,
  ContainerImg, LabelPic, DefaultImage,
} from './styled';

export default function RegisterProducts() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [sub_category, setSubCategory] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState(0);
  const [old_price, setOldPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [photo, setPhoto] = useState();
  const [profilePic, setProfilePic] = useState();
  const hiddenInput = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post();
    } catch (err) {
      return console.log(err);
    }
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
  return (
    <Container>
      <Register>
        <Form onSubmit={handleSubmit} id="formRegister">
          <ContainerPic>
            <ContainerImg>
              {profilePic
                ? (
                  <img
                    src={profilePic}
                    alt="foto perfil"
                  />
                )
                : <DefaultImage />}
            </ContainerImg>
            <LabelPic
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
              {photo.name}
            </LabelPic>
          </ContainerPic>
          <label htmlFor="nome">
            Nome:
            <input
              type="text"
              name="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="category">
            Categoria:
            <input
              type="text"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
          <label htmlFor="subCategory">
            Sub-Categoria:
            <input
              type="text"
              name="subCategory"
              value={sub_category}
              onChange={(e) => setSubCategory(e.target.value)}
            />
          </label>
          <label htmlFor="type">
            Tipo:
            <input
              type="text"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </label>
          <label htmlFor="price">
            preço:
            <input
              type="text"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label htmlFor="oldPrice">
            Preço antigo:
            <input
              type="text"
              name="oldPrice"
              value={old_price}
              onChange={(e) => setOldPrice(e.target.value)}
            />
          </label>
          <label htmlFor="quantity">
            quantidade:
            <input
              type="text"
              name="quantity"
              value={quantity}
              onChange={(e) => setOldPrice(e.target.value)}
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <textarea
              name="description"
              rows="5"
              cols="50"
            />
          </label>
        </Form>
      </Register>
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
