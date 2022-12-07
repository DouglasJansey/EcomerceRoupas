/* eslint-disable react/jsx-no-bind */
import { useSelector } from 'react-redux';
import lodash from 'lodash';

import {
  Container, Container2, ContainerTotal, ContainerCartList, SubContainer, ContainerInfo,
} from './styled';
import Cart from '../../Components/Cart';
import CartFinish from '../../Components/Cart/CartFinish';

export default function CartList() {
  const produtos = useSelector((state) => state.cart.produtos);

  return (
    <Container>
      <ContainerCartList>
        <Container2>
          {produtos.length !== 0 ? produtos.map((produto) => (
          // eslint-disable-next-line react/no-array-index-key
            <Cart item={produto} key={produto.cartItem.id} />
          )) : 'Você ainda não tem itens no carrinho de compras!'}
        </Container2>
      </ContainerCartList>
      <SubContainer>
        <ContainerTotal>
          <CartFinish />
        </ContainerTotal>
      </SubContainer>
    </Container>
  );
}
