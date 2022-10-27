/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  ContainerCart, ContainerImage, NameConainer,
  DescContainer, ContainerInfo, ProductContainer, QuantContainer,
  PriceContainer, SubTotalContainer, Button, CloseButton,
  ContainerItens, Title, NameProduct, ConainerButtons,
} from './styled';
import * as actionCart from '../../store/modules/cart/actions';

export default function Cart({ item }) {
  const dispatch = useDispatch();
  const { cartItem } = item;
  const { quantity } = item.subInfo;
  const { subTotal } = item.subInfo;

  function handleDeleteCart(e) {
    e.preventDefault();
    dispatch(actionCart.removeCart(cartItem));
  }

  function handleQuantityPlus(e) {
    e.preventDefault();
    dispatch(actionCart.addQuantity(cartItem.id));
  }
  function handleQuantitySub(e) {
    e.preventDefault();
    dispatch(actionCart.removeQuantity(cartItem.id));
  }
  return (
    <ContainerCart>
      <ProductContainer>
        <Title>Produtos</Title>
        <ContainerItens>
          <ContainerImage>
            <img src={cartItem.PhotoProducts[0] ? cartItem.PhotoProducts[0].url : 'https://th.bing.com/th/id/OIP.Q9wGF7gaHP6X5Vl4VlL57gHaHM?pid=ImgDet&rs=1'} alt="batman profile" />
          </ContainerImage>
          <ContainerInfo>
            <NameConainer>
              <NameProduct>
                {cartItem.name}
              </NameProduct>
            </NameConainer>
            <DescContainer>
              <h5> Tipo: { cartItem.type}</h5>
              <h5>Cor: {cartItem.PhotoProducts[0].color ? cartItem.PhotoProducts[0].color : ' tradicional'} </h5>
              {/* tamanho <h5>{cartItem.description}</h5> */}
              <h5>Time: {cartItem.sub_category}</h5>
            </DescContainer>
          </ContainerInfo>
        </ContainerItens>
      </ProductContainer>
      <QuantContainer>
        <Title>Qtd</Title>
        <ContainerItens>
          <Button type="button" onClick={(e) => handleQuantityPlus(e)}>+</Button>
          {quantity}
          <Button type="button" onClick={(e) => handleQuantitySub(e)}>-</Button>
        </ContainerItens>
      </QuantContainer>
      <PriceContainer>
        <Title>Preço</Title>
        <ContainerItens>
          {cartItem.price}
        </ContainerItens>
      </PriceContainer>
      <SubTotalContainer>
        <Title>Subtotal</Title>
        <ContainerItens>
          { subTotal }
        </ContainerItens>
      </SubTotalContainer>
      <ConainerButtons>
        <CloseButton type="button" onClick={(e) => handleDeleteCart(e)} />
      </ConainerButtons>
    </ContainerCart>
  );
}
