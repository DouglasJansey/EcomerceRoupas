/* eslint-disable quotes */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import {
  ContainerCard, Image, Text, ContainerImg,
  BoxPrice, ButtonBuy, Cart,
} from './styled';
import * as action from '../../store/modules/cart/actions';

export default function Cards({ product, addCart }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.produtos);
  const [fav, setFav] = useState(false);
  const price = parseFloat(product.price);
  let error = false;
  // eslint-disable-next-line guard-for-in
  function validaItemCart() {
    cart.forEach((item) => {
      if (item.id === addCart.id) error = true;
    });
  }
  function handleClickCart(e) {
    e.preventDefault();
    validaItemCart();
    if (!error) dispatch(action.addCart(addCart));
  }
  function handleFavorit(e) {
    e.preventDefault();
    setFav(!fav);
  }
  return (
    <ContainerCard>
      <ContainerImg>
        <button type="button" onClick={(e) => handleFavorit(e)}>
          {fav ? <BsHeartFill size={22} color="red" /> : <BsHeart size={22} /> }
        </button>
        <button type="button" onClick={(e) => handleClickCart(e)}>
          <Cart />
        </button>
        <BoxPrice>
          <p>
            R$:
            { price.toFixed(2)}
          </p>
        </BoxPrice>
        <Image src={product.PhotoProducts[0] ? product.PhotoProducts[0].url : "https://quickbooks.intuit.com/oidam/intuit/sbseg/en_row/quickbooks/web/content/default-placeholder.png"} alt="foto produto" />
      </ContainerImg>
      <Text>
        {product.name}
      </Text>
      <h5>{product.description}</h5>
      <h6>{product.type}</h6>
      <ButtonBuy type="button">Comprar</ButtonBuy>
    </ContainerCard>
  );
}
