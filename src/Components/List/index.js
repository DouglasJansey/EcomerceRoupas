import { useState, useEffect } from 'react';
import Card from '../cards';
import axios from '../../services/axios';
import { ContainerList } from './styled';

export default function List() {
  const [product, setProduct] = useState([]);
  function getDataProduct() {
    useEffect(() => {
      async function getProducts() {
        const response = await axios.get('/produtos');
        setProduct(response.data);
      }
      getProducts();
    }, []);
  }
  getDataProduct();
  return (
    <ContainerList>
      {product.map((item) => (
        <Card product={item} key={item.id} />
      ))}
    </ContainerList>
  );
}
