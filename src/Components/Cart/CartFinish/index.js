/* eslint-disable no-shadow */
/* eslint-disable no-return-assign */
/* eslint-disable no-multi-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-array-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-const */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable quotes */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-bind */
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import lodash from 'lodash';
import FreteCalc from '../../../Util/FreteCalculator';
import InputMask from '../../../Util';

import {
  Container, ContainerTotal, ButtonFinish, ContainerPrices, SubContainer,
  ContainerFrete, ContainerCupom, InputSearch, ButtonSecundary, Label,
} from './styled';

export default function CartFinish() {
  const { produtos } = useSelector((state) => state.cart);
  const [cupom, setCupom] = useState(0);
  const [discount, setDescount] = useState(0);
  const [cep, setCep] = useState('');
  const subTotal = produtos.map((item) => item.subInfo.subTotal);
  const totalPrice = lodash.sum(subTotal);
  let [freteValue, setFreteValue] = useState(0);
  let [total, setTotal] = useState(totalPrice);

  function HandleSubmitCep(e) {
    e.preventDefault();
    setCep(e.target.cep.value);
  }
  const GetFinalValue = (totalPrice, freteValue, discount) => {
    let totalValue = 0;
    console.log(totalPrice, freteValue, discount);
    if (totalPrice > 0) {
      if (+freteValue > 0 && !discount) {
        totalValue = totalPrice + +freteValue;
        setTotal(totalValue.toFixed(2));
      } else if (+freteValue > 0 && discount) {
        totalValue = (totalPrice + +freteValue) - discount;
        setTotal(totalValue.toFixed(2));
      } else if (discount) {
        totalValue = totalPrice - discount;
        setTotal(totalValue.toFixed(2));
      } else {
        totalValue = totalPrice;
        setTotal(totalValue.toFixed(2));
      }
    }
    setTotal(totalValue.toFixed(2));
  };
  useEffect(() => {
    GetValueFrete();
    GetFinalValue(totalPrice, freteValue, discount);
  }, [produtos, cep, discount, freteValue]);

  function getValueInput(e) {
    const cupomDesconto = e.target.value;
    setCupom(cupomDesconto);
  }

  function submitOrder(e) {
    e.preventDefault();
  }

  async function GetValueFrete() {
    const obj = {
      produtos,
      cep,
    };
    if (!cep) return '';
    const value = await FreteCalc(obj);
    setFreteValue(value);
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
        <form onSubmit={(e) => HandleSubmitCep(e)}>
          <Label>
            <InputSearch type="text" name="cep" />
            <ButtonSecundary type="submit">Ok</ButtonSecundary>
          </Label>
        </form>
      </ContainerFrete>
      <ContainerCupom>
        Aplicar Cupom
        <form onSubmit={(e) => getValueInput(e)}>
          <Label>
            <InputSearch type="text" onChange={(e) => getValueInput(e)} />
            <ButtonSecundary type="button" onClick={(e) => CalcCupom(e)}>Ok</ButtonSecundary>
          </Label>
        </form>
      </ContainerCupom>
      <ContainerTotal>
        <ContainerPrices>
          <p> Subtotal: </p>
          {` ${totalPrice.toFixed(2)}`}
        </ContainerPrices>
        <ContainerPrices>
          <p> Frete: </p>
          { total ? ` ${freteValue}` : ' '}
        </ContainerPrices>
        <ContainerPrices>
          <p> Desconto: </p>
          {subTotal !== 0 ? `- ${discount.toFixed(2)}` : '0,00'}
        </ContainerPrices>
        <SubContainer>
          <p> Total: </p>
          { produtos ? ` ${total}` : '0,00'}
        </SubContainer>
        <ButtonFinish type="button" onClick={(e) => submitOrder(e)}>Finalizar</ButtonFinish>
      </ContainerTotal>
    </Container>
  );
}
