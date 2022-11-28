/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-bind */
import { useSelector } from 'react-redux';
import { useState } from 'react';
import lodash from 'lodash';

import {
  Container, ContainerTotal, ButtonFinish, ContainerPrices, SubContainer,
  ContainerFrete, ContainerCupom, InputSearch, ButtonSecundary, Label,
} from './styled';

export default function CartFinish() {
  const produtos = useSelector((state) => state.cart.produtos);
  const subTotal = produtos.map((item) => item.subInfo.subTotal);
  const [cupom, setCupom] = useState(0);
  const [descount, setDescount] = useState(0);
  const frete = 22.50;
  const totalPrice = lodash.sum(subTotal);
  const total = (totalPrice + frete) - descount;

  function getValueInput(e) {
    const cupomDesconto = e.target.value;
    setCupom(cupomDesconto);
  }

  function CalcCupom(e) {
    e.preventDefault();
    switch (cupom) {
      case '10%OFF':
        return setDescount((10 * totalPrice) / 100);
      case '20%OFF':
        return setDescount((20 * totalPrice) / 100);
      case '30%OFF':
        return setDescount((30 * totalPrice) / 100);
      default:
        return 0;
    }
  }
  console.log(totalPrice);
  return (
    <Container>
      <ContainerFrete>
        Calcular Frete
        <Label>
          <InputSearch type="text" />
          <ButtonSecundary type="button">Ok</ButtonSecundary>
        </Label>
      </ContainerFrete>
      <ContainerCupom>
        Aplicar Cupom
        <Label>
          <InputSearch type="text" onChange={(e) => getValueInput(e)} />
          <ButtonSecundary type="button" onClick={(e) => CalcCupom(e)}>Ok</ButtonSecundary>
        </Label>
      </ContainerCupom>
      <ContainerTotal>
        <ContainerPrices>
          <p> Subtotal: </p>
          {` ${totalPrice.toFixed(2)}`}
        </ContainerPrices>
        <ContainerPrices>
          <p> Frete: </p>
          {` ${frete.toFixed(2)}`}
        </ContainerPrices>
        <ContainerPrices>
          <p> Desconto: </p>
          {descount ? `- ${descount.toFixed(2)}` : '0.00'}
        </ContainerPrices>
        <SubContainer>
          <p> Total: </p>
          {` ${total.toFixed(2)}`}
        </SubContainer>
        <ButtonFinish type="button">Finalizar</ButtonFinish>
      </ContainerTotal>
    </Container>
  );
}
