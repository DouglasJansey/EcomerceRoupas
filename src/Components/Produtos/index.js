/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
import validator from 'validator';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../services/axios';
import {
  Container, Register, Form, ContainerPic,
  ContainerImg, LabelPic, DefaultImage, ContainerLabel,
} from './styled';

export default function RegisterProducts() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [sub_category, setSubCategory] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState();
  const [old_price, setOldPrice] = useState(0);
  const [quantity, setQuantity] = useState();

  const [photo, setPhoto] = useState();
  const [profilePic, setProfilePic] = useState();

  const hiddenInput = useRef(null);
  const form = useRef(null);
  const error = false;
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    try {
      await axios.post('/produtos', {
        name,
        description,
        category,
        sub_category,
        type,
        price,
        old_price,
        quantity,
      }).then(async (res) => {
        const { id } = res.data;
        console.log(id);
        formData.append('photoProduct', photo);
        formData.append('product_id', id);
        if (!error) {
          await axios.post('/produtos/fotos', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        }
      });
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
        <Form onSubmit={handleSubmit} id="formRegister" ref={form}>
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
            <ContainerLabel>
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
              </LabelPic>
              {photo ? photo.name : 'Nenhuma arquivo selecionado!' }
            </ContainerLabel>
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
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label htmlFor="oldPrice">
            Preço antigo:
            <input
              type="number"
              name="oldPrice"
              value={old_price}
              onChange={(e) => setOldPrice(e.target.value)}
            />
          </label>
          <label htmlFor="quantity">
            quantidade:
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <textarea
              name="description"
              rows="5"
              cols="50"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <button type="submit"> Cadastrar </button>
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
