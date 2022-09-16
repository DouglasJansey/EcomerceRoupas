/* eslint-disable quotes */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import axios from '../../services/axios';
import {
  ContainerCard, Image, Text, ContainerImg,
  BoxPrice, ButtonBuy, Cart,
} from './styled';
import * as types from '../../store/modules/actions';

export default function Cards({ product }) {
  const [num, setNum] = useState(0);
  const [fav, setFav] = useState(false);
  const dispatch = useDispatch();
  // eslint-disable-next-line guard-for-in
  function handleClick(e) {
    e.preventDefault();
    dispatch(types.addCart(product));
  }
  function handleFavorit(e) {
    e.preventDefault();
    setFav(!fav);
  }
  const imagem = ['https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/437c02d1-47b4-4fbe-854e-a2cc352dc660/seattle-seahawks-vapor-untouchable-dk-metcalf-mens-limited-football-jersey-3BfVGx.png',
    'https://static.nike.com/a/images/t_default/e3a408e5-3806-416e-836c-500afb2b0fa3/seattle-seahawks-vapor-untouchable-dk-metcalf-mens-limited-football-jersey-VhzWgp.png',
    'https://static.nike.com/a/images/t_default/d0b80a88-08f8-4660-8a58-c337c6f4f5a7/seattle-seahawks-vapor-untouchable-dk-metcalf-mens-limited-football-jersey-bZzKJx.png'];
  return (
    <ContainerCard>
      <ContainerImg>
        <button type="button" onClick={(e) => handleFavorit(e)}>
          {fav ? <BsHeartFill size={22} color="red" /> : <BsHeart size={22} /> }
        </button>
        <button type="button" onClick={(e) => handleClick(e)}>
          <Cart />
        </button>
        <BoxPrice>
          <p>
            {product.price}
          </p>
        </BoxPrice>
        <Image src={product.PhotoProducts[0] ? product.PhotoProducts[0].url : "https://quickbooks.intuit.com/oidam/intuit/sbseg/en_row/quickbooks/web/content/default-placeholder.png"} alt="foto produto" />
      </ContainerImg>
      <Text>
        {product.description}
      </Text>
      <h5>{product.name}</h5>
      <h6>{product.type}</h6>
      <ButtonBuy type="button">Comprar</ButtonBuy>
    </ContainerCard>
  );
}
