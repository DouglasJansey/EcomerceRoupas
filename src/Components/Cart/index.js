/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  ContainerCart, ContainerImage, NameConainer,
  DescConainer, ContainerInfo, ProductContainer, QuantContainer,
  PriceContainer, SubTotalContainer, Button, CloseButton,
  ContainerItens, Title, NameProduct, ConainerButtons,
} from './styled';
import * as actionCart from '../../store/modules/cart/actions';

export default function Cart({ item }) {
  const [quantidade, setQuantidade] = useState(1);
  const [subTotal, setSubTotal] = useState(item.price);
  const dispatch = useDispatch();

  function handleDeleteCart(e) {
    e.preventDefault();
    dispatch(actionCart.removeCart(item.id));
  }
  useEffect(() => {
    function getTotal() {
      setSubTotal(quantidade * item.price);
    }
    getTotal();
  }, [quantidade]);

  function handleQuantityPlus(e) {
    e.preventDefault();
    setQuantidade(quantidade + 1);
  }
  function handleQuantitySub(e) {
    e.preventDefault();
    setQuantidade(quantidade - 1);
  }
  return (
    <ContainerCart>
      <ProductContainer>
        <Title>Produtos</Title>
        <ContainerItens>
          <ContainerImage>
            <img src={item.PhotoProducts[0] ? item.PhotoProducts[0].url : 'https://th.bing.com/th/id/OIP.Q9wGF7gaHP6X5Vl4VlL57gHaHM?pid=ImgDet&rs=1'} alt="batman profile" />
          </ContainerImage>
          <ContainerInfo>
            <NameConainer>
              <NameProduct>
                {item.description}
              </NameProduct>
            </NameConainer>
            <DescConainer>
              <h5>
                Tipo:
                { item.type}
              </h5>
            </DescConainer>
            <DescConainer>
              <h5>
                Cor:
                {item.PhotoProducts[0].color ? item.PhotoProducts[0].color : ' tradicional'}
              </h5>
            </DescConainer>
            <DescConainer>
              <h5>{item.name}</h5>
            </DescConainer>
            <DescConainer>
              <h5>{item.sub_category}</h5>
            </DescConainer>
          </ContainerInfo>
        </ContainerItens>
      </ProductContainer>
      <QuantContainer>
        <Title>Qtd</Title>
        <ContainerItens>
          <Button type="button" onClick={(e) => handleQuantityPlus(e)}>+</Button>
          {quantidade || setQuantidade(1)}
          <Button type="button" onClick={(e) => handleQuantitySub(e)}>-</Button>
        </ContainerItens>
      </QuantContainer>
      <PriceContainer>
        <Title>Preço</Title>
        <ContainerItens>
          {item.price}
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
