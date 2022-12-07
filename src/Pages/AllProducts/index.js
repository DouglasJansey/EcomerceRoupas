/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
/* eslint-disable no-return-assign */
import { set } from 'lodash';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../Components/cards';
import axios from '../../services/axios';
import * as actionProducts from '../../store/modules/showcase/actions';
import {
  ContainerList, ContainerImages, Container, ContainerOrder, ContainerPrice,
  ArrowLeft, ArrowRight, ContainerSelect, ContainerFilter, ContainerPagesValue,
  ButtonSubmit, CleanButton,
} from './styled';

export default function ListProducts() {
  const { count, rows } = useSelector((state) => state.showCase.produtos);
  const products = rows;
  const dispatch = useDispatch();
  const [maxPages, setMaxPages] = useState(Math.floor(count / 10));
  const [page, setPages] = useState(1);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const time = '';
  const [priceOrder, setPriceOrder] = useState('');

  function MaxValuePages(value) {
    (Math.floor(value / 10) < 1) ? setMaxPages(1) : setMaxPages(Math.floor(value / 10));
  }

  function SearchProducts() {
    if (value1 && value2) return `&value1=${value1}&value2=${value2}`;
    if (time) return `&timename=${time}`;
    return '';
  }
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`/produtos?page=${page}&max=10${SearchProducts()}`);
      dispatch(actionProducts.showProducts(response.data));
      MaxValuePages(count);
    }
    getData();
  }, [page, value1, value2, count]);

  function handleClickRight() {
    if (page < maxPages) setPages(page + 1);
  }
  function handleScrollLeft() {
    if (page > 1) setPages(page - 1);
  }
  function validateSelect(props) {
    if (props === 'menor') return dispatch(actionProducts.showOrderPriceDown());
    if (props === 'maior') return dispatch(actionProducts.showOrderPriceUp());
    return '';
  }
  function handleSubmitPrices(e) {
    e.preventDefault();
    setValue1(e.target[0].value);
    setValue2(e.target[1].value);
  }
  function CleanSearch(e) {
    if (value1 && value2) {
      setValue1('');
      setValue2('');
    }
  }

  const SortByPrice = (e) => {
    e.preventDefault();
    const inputSelect = e.target.value;
    setPriceOrder(inputSelect);
    validateSelect(inputSelect);
  };

  return (
    <Container>
      <ContainerList>
        <ContainerFilter>
          <ContainerSelect>
            <ContainerOrder>
              <p>Ordernar:</p>
              <select value={priceOrder} onChange={(e) => SortByPrice(e)}>
                <option value="" defaultChecked hidden>
                  Selecionar
                </option>
                <option value="menor">
                  Menor preço
                </option>
                <option value="maior">
                  Maior preço
                </option>
              </select>
            </ContainerOrder>
            <ContainerPrice>
              <form onSubmit={(e) => handleSubmitPrices(e)}>
                <label htmlFor="value1">
                  Preço de:
                  <input type="text" name="value1" placeholder="Min" />
                </label>
                <label htmlFor="value2">
                  até:
                  <input type="text" name="value2" placeholder="Máx" />
                </label>
                <ButtonSubmit type="submit">Aplicar</ButtonSubmit>
                <CleanButton type="reset" onClick={(e) => CleanSearch(e)}>Limpar</CleanButton>
              </form>
            </ContainerPrice>
          </ContainerSelect>
        </ContainerFilter>
        <ContainerImages>
          {products ? products.map((item) => (
            <Card
              product={item}
              key={item.id}
              cartItem={item}
            />
          )) : ''}
        </ContainerImages>
      </ContainerList>
      <ContainerPagesValue>
        <ArrowLeft onClick={() => handleScrollLeft()} />
        {`${page} / ${maxPages}`}
        <ArrowRight onClick={() => handleClickRight()} />
      </ContainerPagesValue>
    </Container>
  );
}
