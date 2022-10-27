/* eslint-disable react/jsx-no-bind */
import { useSelector } from 'react-redux';
import lodash from 'lodash';

import { Container, ContainerTotal, ButtonFinish } from './styled';

export default function CartFinish() {
  const produtos = useSelector((state) => state.cart.produtos);
  const subTotal = produtos.map((item) => item.subInfo.subTotal);
  const totalPrice = lodash.sum(subTotal);
  return (
    <Container>
      <p>Total:</p>
      <ContainerTotal>
        <h2>
          {`R$: ${totalPrice.toFixed(2)}`}
        </h2>
        <ButtonFinish type="button">Finalizar</ButtonFinish>
      </ContainerTotal>
    </Container>
  );
}
