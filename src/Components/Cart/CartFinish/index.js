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
  const [cep, setCep] = useState('');
  const [descount, setDescount] = useState(0);
  const [frete, setFrete] = useState(0);
  const totalPrice = lodash.sum(subTotal);
  const total = (totalPrice + frete) - descount;

  function getValueInput(e) {
    const cupomDesconto = e.target.value;
    setCupom(cupomDesconto);
  }
  function submitOrder(e) {
    e.preventDefault();
  }
  function handleSubmitCep(e) {
    e.preventDefault();
    if (cep) return setFrete(22.50);
    return setFrete(0);
  }

  function CalcCupom(e) {
    e.preventDefault();
    if (produtos) {
      switch (cupom) {
        case '10%OFF':
          return setDescount((10 * totalPrice) / 100);
        case '20%OFF':
          return setDescount((20 * totalPrice) / 100);
        case '30%OFF':
          return setDescount((30 * totalPrice) / 100);
        default:
          return setDescount(0);
      }
    }
  }

  return (
    <Container>
      <ContainerFrete>
        Calcular Frete
        <Label>
          <InputSearch type="text" onChange={(e) => setCep(e.target.value)} />
          <ButtonSecundary type="button" onClick={(e) => handleSubmitCep(e)}>Ok</ButtonSecundary>
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
          { subTotal !== 0 ? ` ${frete.toFixed(2)}` : '0,00'}
        </ContainerPrices>
        <ContainerPrices>
          <p> Desconto: </p>
          {subTotal !== 0 ? `- ${descount.toFixed(2)}` : '0,00'}
        </ContainerPrices>
        <SubContainer>
          <p> Total: </p>
          { produtos ? ` ${total.toFixed(2)}` : '0,00'}
        </SubContainer>
        <ButtonFinish type="button" onClick={(e) => submitOrder(e)}>Finalizar</ButtonFinish>
      </ContainerTotal>
    </Container>
  );
}
