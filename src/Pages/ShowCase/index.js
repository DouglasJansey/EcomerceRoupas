/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
/* eslint-disable no-return-assign */
import { set } from 'lodash';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../Components/cards';
import axios from '../../services/axios';
import Loading from '../../Components/Loading';
import listTeams from '../../Components/Teams/ListTeams';
import * as actionProducts from '../../store/modules/showcase/actions';
import {
  ContainerList, ContainerImages, Container, ContainerOrder, ContainerPrice,
  ArrowLeft, ArrowRight, ContainerSelect, ContainerFilter, ContainerPagesValue,
  ButtonSubmit, CleanButton,
} from './styled';

export default function ListProducts() {
  const { count, rows } = useSelector((state) => state.showCase.produtos);
  const regex = /(_)/g;
  const list = Object.values(listTeams);
  const teamSubMenu = useSelector((state) => state.showCase.team);
  const type = useSelector((state) => state.showCase.type);
  const products = rows;
  const dispatch = useDispatch();
  const [maxPages, setMaxPages] = useState(Math.floor(count / 10));
  const [page, setPages] = useState(1);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [team, setTeam] = useState(teamSubMenu || type);
  const [priceOrder, setPriceOrder] = useState('');

  function MaxValuePages(value) {
    (Math.floor(value / 10) < 1) ? setMaxPages(1) : setMaxPages(Math.floor(value / 10));
  }

  function SearchProducts() {
    if (value1 && value2) return `search=price&value1=${value1}&value2=${value2}`;
    if (team && teamSubMenu) return `search=team&teamname=${team}`;
    if (team === type) return `search=type&type=${type}`;
    if (team === type && type === 'Masculino') return `search=type&type=${type.replace('o', 'a')}`;
    return '';
  }
  useEffect(() => {
    type === 'Masculino' ? console.log(type.replace('o', 'a')) : '';
    async function getData() {
      const response = await axios.get(`/produtos?page=${page}&max=10&${SearchProducts()}`);
      dispatch(actionProducts.showProducts(response.data));
      MaxValuePages(count);
    }
    getData();
  }, [page, value1, value2, count, team, type]);
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
    setValue1(e.target.value1.value);
    setValue2(e.target.value2.value);
    if (team) setTeam('');
  }
  function handleSubmitTeam(e) {
    e.preventDefault();
    setTeam(e.target.team.value);
    if (value1 && value2) {
      setValue1('');
      setValue2('');
    }
  }
  function CleanSearch(e) {
    if (value1 && value2) {
      setValue1('');
      setValue2('');
    }
    if (team) setTeam('');
    if (team === teamSubMenu) setTeam('');
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
            <ContainerPrice>
              <form onSubmit={(e) => handleSubmitTeam(e)}>
                <label htmlFor="value1">
                  Selecione seu time:
                  <select onChange={(e) => setTeam(e.target.value)}>
                    <option value="" defaultChecked hidden>Selecione seu time</option>
                    {list.map((item, index) => (
                      <option key={index}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </label>
                <ButtonSubmit type="submit">Aplicar</ButtonSubmit>
              </form>
            </ContainerPrice>
            <CleanButton
              type="button"
              onClick={(e) => CleanSearch(e)}
            >
              Limpar tudo

            </CleanButton>
          </ContainerSelect>
        </ContainerFilter>
        <ContainerImages>
          {products ? products.map((item) => (
            <Card
              product={item}
              key={item.id}
              cartItem={item}
            />
          )) : <Loading />}
        </ContainerImages>
      </ContainerList>
      <ContainerPagesValue>
        <ArrowLeft onClick={() => handleScrollLeft()} />
        {`${page} / ${maxPages || 1}`}
        <ArrowRight onClick={() => handleClickRight()} />
      </ContainerPagesValue>
    </Container>
  );
}
