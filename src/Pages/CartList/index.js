/* eslint-disable react/jsx-no-bind */
import { useSelector } from 'react-redux';

import { Container, Container2 } from './styled';
import Cart from '../../Components/Cart';

export default function CartList() {
  const cart = useSelector((state) => state.cart.produtos);

  return (
    <Container>
      <Container2>
        { cart.map((produto) => (
          <Cart item={produto} key={produto.id} />
        )) }
      </Container2>
    </Container>
  );
}
