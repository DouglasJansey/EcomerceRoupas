import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as actionProducts from '../store/modules/products/actions';
import * as actionShowcase from '../store/modules/showcase/actions';
import axios from './axios';

function getProducts() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const product = useSelector((state) => state.products.produtos);
  const team = useSelector((state) => state.showCase.team) || '';

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/produtos');
      if (JSON.stringify(product) !== JSON.stringify(response.data.rows)) {
        dispatch(actionProducts.addProducts(response.data.rows));
      }
    }
    getData();
  }, []);
  return product;
}

export default getProducts;
