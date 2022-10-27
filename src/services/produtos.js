import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionProducts from '../store/modules/products/actions';
import axios from './axios';

const getProducts = async () => {
  const dispatch = useDispatch();
  const produtos = useSelector((state) => state.products.produtos);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/produtos');
      if (JSON.stringify(produtos) !== JSON.stringify(response.data)) {
        dispatch(actionProducts.addProducts(response.data));
      }
    }
    getData();
  }, [produtos]);
};

export default getProducts;
