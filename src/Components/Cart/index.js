import { useSelector } from 'react-redux';
import { ContainerCart } from './styled';
import Card from '../cards';

export default function Cart() {
  const cart = useSelector((state) => state.reducers.produtos);
  return (
    <ContainerCart>
      {cart.map((item) => (
        <Card product={item} key={item.id} />
      ))}
    </ContainerCart>
  );
}
