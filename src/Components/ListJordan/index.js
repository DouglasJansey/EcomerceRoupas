/* eslint-disable react/prop-types */
/* eslint-disable no-return-assign */
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../cards';
import axios from '../../services/axios';
import {
  ContainerList, ContainerImages, Container, ContainerOrder,
  ArrowLeft, ArrowRight, ContainerArrow, ContainerSelect,
} from './styled';

export default function List() {
  const products = useSelector((state) => state.products.produtos);
  const dispatch = useDispatch();
  const [scrollX, setScrollX] = useState(0);
  const [priceOrder, setPriceOrder] = useState('');
  const carrousel = useRef(0);
  const cardWidth = 162;
  const containerWidth = products ? products.length * 157 : 0;
  const listShoes = products.filter((item) => item.type === 'Tênis');

  function handleClickRight() {
    let x = scrollX - cardWidth;
    if ((carrousel.current.offsetWidth - containerWidth) >= x) {
      x = (carrousel.current.offsetWidth - containerWidth);
    }
    if (listShoes.length >= 6) setScrollX(x);
  }
  function handleScrollLeft() {
    let x = scrollX + cardWidth;
    if (x > 0) {
      x = 0;
    }
    if (listShoes.length >= 6) setScrollX(x);
  }
  function validateSelect(props) {
    return '';
  }
  const SortByPrice = (e) => {
    e.preventDefault();
    const inputSelect = e.target.value;
    setPriceOrder(inputSelect);
    validateSelect(inputSelect);
  };

  return (
    <Container>
      {products
        ? (
          <>
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
            </ContainerSelect>
            <ContainerArrow>
              <ContainerList ref={carrousel}>
                <ContainerImages directionX={scrollX}>
                  {listShoes.map((item) => (
                    <Card
                      product={item}
                      key={item.id}
                      cartItem={item}
                    />
                  ))}
                </ContainerImages>
              </ContainerList>
              <div>
                <ArrowLeft onClick={() => handleScrollLeft()} />
                <ArrowRight onClick={() => handleClickRight()} />
              </div>
            </ContainerArrow>
          </>
        )
        : ''}
    </Container>
  );
}
