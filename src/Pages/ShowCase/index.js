/* eslint-disable no-shadow */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
/* eslint-disable no-return-assign */
import { set } from 'lodash';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  const dispatch = useDispatch();
  const { count, rows } = useSelector((state) => state.showCase.produtos);
  const teamSubMenu = useSelector((state) => state.showCase.team);
  const typeHeader = useSelector((state) => state.showCase.type);
  const [maxPages, setMaxPages] = useState(Math.floor(count / 10));
  const [page, setPages] = useState(1);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [type, setType] = useState(typeHeader);
  const [team, setTeam] = useState(teamSubMenu);
  const [priceOrder, setPriceOrder] = useState('');
  const list = Object.values(listTeams);
  const products = rows;
  const objData = {
    team, type, value: { value1, value2 },
  };
  function MaxValuePages(value) {
    (Math.floor(value / 10) < 1) ? setMaxPages(1) : setMaxPages(Math.floor(value / 10));
  }

  function SearchProducts(props) {
    const { team, value, type } = props;
    if (props) {
      if (team) {
        return `search=team&teamname=${team}`;
      }
      if (type) {
        return `search=type&type=${type}`;
      }
      if (value && value.value1 > 0 && value.value2 > 0) {
        return `search=price&value1=${value.value1}&value2=${value.value2}`;
      }
    }
    return '';
  }
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`/produtos?page=${page}&max=10&${SearchProducts(objData)}`);
      if (response.data.rows.length === 0) setPages(1);
      dispatch(actionProducts.showProducts(response.data));
      MaxValuePages(count);
    }
    if (typeHeader) {
      dispatch(actionProducts.showOrderTeam(''));
      setTeam('');
      setType(typeHeader);
      dispatch(actionProducts.filterType(''));
    }
    if (teamSubMenu) {
      dispatch(actionProducts.filterType(''));
      setType('');
      setTeam(teamSubMenu);
      dispatch(actionProducts.showOrderTeam(''));
    }
    getData();
  }, [page, value1, value2, count, team, type, typeHeader, teamSubMenu]);
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
    if (type) setType('');
  }
  function handleSubmitTeam(e) {
    e.preventDefault();
    setType('');
    dispatch(actionProducts.filterType(''));
    dispatch(actionProducts.showOrderTeam(''));
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
    if (e.target.innerText === 'Limpar tudo') e.target.value = '';
    if (team) setTeam('');
    setTeam('');
    setType('');
    console.log(e);
    dispatch(actionProducts.filterType(''));
    dispatch(actionProducts.showOrderTeam(''));
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
                  <select
                    onChange={(e) => {
                      setTeam(e.target.value);
                    }}
                  >
                    <option value="" defaultChecked hidden>Selecione seu time</option>
                    {list.map((item, index) => (
                      <option key={index}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </label>
              </form>
            </ContainerPrice>
            <CleanButton
              type="reset"
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
