/* eslint-disable arrow-body-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable new-cap */
/* eslint-disable no-unused-expressions */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable quotes */

import { useEffect } from 'react';
import axios from '../../services/axios';

export default async function FreteCalc(props) {
  const { produtos } = props;
  const { cep } = props;
  const sCepDestino = cep;
  const sCepOrigem = "21360300";
  const nCdFormato = 1;
  const sCdMaoPropria = "n";
  const CdAvisoRecebimento = "s";
  const nCdServico = "41106";
  const nVlDiametro = 20;

  const getValueData = async (item) => {
    const nVlPeso = item.cartItem.weight;
    const nVlComprimento = item.cartItem.length;
    const nVlAltura = item.cartItem.height;
    const nVlLargura = item.cartItem.width;
    const nVlValorDeclarado = item.cartItem.price;
    const { quantity } = item.subInfo;

    const myPromise = await axios.post('/produtos/frete', {
      sCepDestino,
      sCepOrigem,
      nVlPeso,
      nCdFormato,
      nVlComprimento,
      nVlAltura,
      nVlLargura,
      sCdMaoPropria,
      nVlValorDeclarado,
      CdAvisoRecebimento,
      nCdServico,
      nVlDiametro,
    });

    const result = myPromise.data;
    return { result, quantity };
  };
  const LoadFreteValue = async () => {
    let value = 0;
    let day = 0;
    const message = '';
    const frete = produtos.map(async (item) => getValueData(item)) || 0;
    const allPromise = await Promise.all(frete)
      .then((values) => values.map((value) => +value.result[0][0].Valor.replace(',', '.') * value.quantity));
    for (let key in allPromise) {
      value += allPromise[key];
    }
    console.log(value);
    return value.toFixed(2);
  };
  const valueFinal = await LoadFreteValue();
  return valueFinal;
}
