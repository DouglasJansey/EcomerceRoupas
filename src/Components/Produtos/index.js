/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import axiosV from 'axios';
import axios from '../../services/axios';
import {
  Container, Register, ContainerCol, Form, ContainerPic, ButtonSubmit,
  ContainerImg, Label, LabelPic, DefaultImage, ContainerLabel, InputForm,
} from './styled';
import urlStorage from '../../services/urlStoragePhoto';
import Loading from '../Loading';

export default function ShowCase() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [sub_category, setSubCategory] = useState('');
  const [type, setType] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [price, setPrice] = useState('');
  const [old_price, setOldPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [color, setColor] = useState('');
  let loading = false;

  const [photo, setPhoto] = useState();
  const [profilePic, setProfilePic] = useState('');

  const hiddenInput = useRef(null);
  const form = useRef(null);
  let error = false;

  function autoComplementPrice(props) {
    if (props) {
      if (props === 'Masculino' || props === 'Feminino') {
        setWeight('0.2');
        setHeight('2');
        setWidth('10');
        setLength('25');
      }
      if (props === 'Tênis') {
        setWeight('1');
        setHeight('12');
        setWidth('21');
        setLength('33');
      }
      if (props === 'Infantil') {
        setWeight('0.1');
        setHeight('6');
        setWidth('11');
        setLength('17');
      }
    }
  }
  useEffect(() => {
    autoComplementPrice(type);
  }, [type, category]);

  function validateInput() {
    if (name.length < 4 || !name) {
      error = true;
    }
    if (!category) error = true;
    if (!sub_category) error = true;
    if (!type) error = true;
    // eslint-disable-next-line max-len
  }

  function validateImage(e) {
    const reader = new FileReader();
    const imagePic = e.target.files[0];
    if (!imagePic || imagePic.length > 0) return;
    setPhoto(imagePic);
    reader.onload = (fileReader) => {
      setProfilePic(fileReader.target.result);
    };
    reader.readAsDataURL(imagePic);
  }

  async function handleSubmit(e) {
    validateInput();
    e.preventDefault();
    loading = true;
    const formData = new FormData();
    if (error) return console.log('error');
    try {
      await axios.post('/produtos', {
        name,
        description,
        category,
        sub_category,
        type,
        height,
        width,
        length,
        weight,
        price,
        old_price,
        quantity,
      }).then(async (res) => {
        const product_id = res.data.id;
        formData.append('image', photo);
        await axiosV.post(`${urlStorage}`, formData, {
          Content_Type: 'multipart/form-data',
          method: 'POST',
        }).then(async (resp) => {
          const { data } = resp.data;
          const { display_url } = data;
          await axios.post('produtos/fotos', {
            originalname: data.id,
            filename: data.image.filename,
            display_url,
            product_id,
            color,
          });
        });
      });
      loading = false;
      toast.success('SUCCESS!');
    } catch (err) {
      toast.error('FAILURE');
      console.log(err);
    }
  }
  function handleClick() {
    hiddenInput.current.click();
  }
  return (
    <Container>
      <div>
        <h1>Cadastrar Produtos</h1>
      </div>
      <Register>
        {loading ? <Loading />
          : (
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
                      accept="image/png, image/jpeg, image/jpg"
                      name="foto"
                      ref={hiddenInput}
                      onChange={(e) => validateImage(e)}
                    />
                  </LabelPic>
                  <span>
                    {photo ? photo.name : 'Nenhum arquivo selecionado!'}
                  </span>
                </ContainerLabel>
              </ContainerPic>
              <Label htmlFor="nome">
                Nome:
                <InputForm
                  type="text"
                  name="nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nome*"
                />
              </Label>
              <Label htmlFor="category">
                Categoria:
                <InputForm
                  type="text"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Categoria*"
                />
              </Label>
              <Label htmlFor="subCategory">
                Sub-Categoria:
                <InputForm
                  type="text"
                  name="subCategory"
                  value={sub_category}
                  onChange={(e) => setSubCategory(e.target.value)}
                  placeholder="Sub-Categoria"
                />
              </Label>
              <Label htmlFor="type">
                Tipo:
                <InputForm
                  type="text"
                  name="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  placeholder="Tipo*"
                />
              </Label>
              <Label htmlFor="price">
                Preço:
                <InputForm
                  type="number"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Preço*"
                />
              </Label>
              <Label htmlFor="weight">
                Peso:
                <InputForm
                  type="text"
                  name="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Peso*"
                />
              </Label>
              <Label htmlFor="height">
                Altura:
                <InputForm
                  type="text"
                  name="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Altura*"
                />
              </Label>
              <Label htmlFor="width">
                Largura:
                <InputForm
                  type="text"
                  name="width"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  placeholder="Largura*"
                />
              </Label>
              <Label htmlFor="length">
                Comprimento:
                <InputForm
                  type="text"
                  name="length"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  placeholder="Comprimento*"
                />
              </Label>
              <Label htmlFor="oldPrice">
                Preço antigo:
                <InputForm
                  type="number"
                  name="oldPrice"
                  value={old_price}
                  onChange={(e) => setOldPrice(e.target.value)}
                  placeholder="Preço antigo"
                />
              </Label>
              <Label htmlFor="color">
                Cor:
                <InputForm
                  type="text"
                  name="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="Cor"
                />
              </Label>
              <Label htmlFor="quantity">
                Quantidade:
                <InputForm
                  type="number"
                  name="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Quantidade"
                />
              </Label>
              <Label htmlFor="descricao">
                Descrição:
                <textarea
                  rows="5"
                  cols="50"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Descrição*"
                />
              </Label>
              <ButtonSubmit type="submit"> Cadastrar </ButtonSubmit>
            </Form>
          )}
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
