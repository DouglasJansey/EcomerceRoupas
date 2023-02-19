/* eslint-disable react/prop-types */
/* eslint-disable no-return-assign */
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Card from '../cards';
import axios from '../../services/axios';
import {
  ContainerList, ContainerImages, Container, ContainerOrder,
  ArrowLeft, ArrowRight, ContainerArrow, ContainerSelect,
} from './styled';

export default function List() {
  const [products, setProducts] = useState();
  const dispatch = useDispatch();
  const [scrollX, setScrollX] = useState(0);
  const [priceOrder, setPriceOrder] = useState('');
  const carrousel = useRef(0);
  const cardWidth = 162;
  const containerWidth = products ? products.length * 157 : 0;
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/produtos?page=1&max=10&search=type&type=Tênis');
      if (!priceOrder) setProducts(response.data.rows);
      if (priceOrder === 'menor') setProducts(response.data.rows.sort((a, b) => a.price - b.price));
      if (priceOrder === 'maior') setProducts(response.data.rows.sort((a, b) => b.price - a.price));
    }
    getData();
    setPriceOrder(priceOrder);
  }, [priceOrder]);

  function handleClickRight() {
    let x = scrollX - cardWidth;
    if ((carrousel.current.offsetWidth - containerWidth) >= x) {
      x = (carrousel.current.offsetWidth - containerWidth);
    }
    setScrollX(x);
  }
  function handleScrollLeft() {
    let x = scrollX + cardWidth;
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
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
                  {products.map((item) => (
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
