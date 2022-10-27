/* eslint-disable react/prop-types */
/* eslint-disable no-return-assign */
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../cards';
import getProducts from '../../services/produtos';
import * as actionProducts from '../../store/modules/products/actions';
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
  const imageWidth = carrousel.current.offsetWidth;
  const cardWidth = 205;
  const containerWidth = products.length * 196;

  useEffect(() => {
    setPriceOrder(priceOrder);
    console.log(priceOrder);
  }, [priceOrder]);

  getProducts();
  function handleClickRight() {
    let x = scrollX - cardWidth;
    if ((imageWidth - containerWidth) >= x) {
      x = (imageWidth - containerWidth);
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
    if (props === 'menor') return dispatch(actionProducts.orderPriceDown());
    if (props === 'maior') return dispatch(actionProducts.orderPriceUp());
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
          <ContainerImages directionX={scrollX} containerW={containerWidth}>
            {products.map((item) => (
              <Card
                product={item}
                key={item.id}
                cartItem={item}
              />
            ))}
          </ContainerImages>
        </ContainerList>
        <ArrowLeft onClick={() => handleScrollLeft()} />
        <ArrowRight onClick={() => handleClickRight()} />
      </ContainerArrow>
    </Container>
  );
}
