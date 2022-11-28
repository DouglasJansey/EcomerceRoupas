/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable quotes */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import { useDispatch, useSelector } from 'react-redux';
import {
  ContainerCard, Image, Text, ContainerImg, ContainerDesc,
  BoxPrice, ButtonBuy, Cart, Description, DeleteProduct,
} from './styled';
import * as action from '../../store/modules/cart/actions';
import * as actionProducts from '../../store/modules/products/actions';
import axios from '../../services/axios';
import Rating from '../Rating';

export default function Cards({ product, cartItem }) {
  const dispatch = useDispatch();
  const isLoggedAdmin = useSelector((state) => state.auth.admin);
  const cart = useSelector((state) => state.cart.produtos);
  const price = parseFloat(product.price).toFixed(2);
  let error = false;

  const subInfo = {
    quantity: 1,
    subTotal: cartItem.price,
    size: '',
  };
  function validaItemCart() {
    cart.forEach((item) => {
      if (item.cartItem.id === cartItem.id) error = true;
    });
  }
  function handleClickCart(e) {
    e.preventDefault();
    validaItemCart();
    if (!error) dispatch(action.addCart({ cartItem, subInfo }));
  }
  async function deleteProduct(e) {
    dispatch(actionProducts.removeProduct(product.id));
    await axios.delete(`/produtos/${product.id}`);
  }
  return (
    <ContainerCard>
      <ContainerImg>
        {isLoggedAdmin ? (
          <button type="button" onClick={(e) => deleteProduct(e)}>
            <DeleteProduct />
          </button>
        ) : '' }
        <Image src={product.PhotoProducts[0] ? product.PhotoProducts[0].url : "https://quickbooks.intuit.com/oidam/intuit/sbseg/en_row/quickbooks/web/content/default-placeholder.png"} alt="foto produto" />
      </ContainerImg>
      <ContainerDesc>
        <Text>
          {product.name}
        </Text>
        <Description>
          {product.sub_category}
          {' '} - {' '}
          {product.type}
        </Description>
        <Rating />
        <BoxPrice>
          <p>R$: {price}</p>
          <p> ou 4x de {(price / 4).toFixed(2)} </p>
        </BoxPrice>
        <Description />
      </ContainerDesc>
      <ButtonBuy type="button" onClick={(e) => handleClickCart(e)}>
        Adicionar
        <Cart />
      </ButtonBuy>
    </ContainerCard>
  );
}
