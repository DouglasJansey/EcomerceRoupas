/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable prefer-const */
import { Container } from './styled';
import List from '../../Components/List';
import Carrousel from '../../Components/carrousel';
import Banner from '../../Components/Banner';
import Loading from '../../Components/Loading';
import AllProducts from '../AllProducts';

export default function Home() {
  return (
    <Container>
      <Carrousel />
      <List />
      <Banner />
    </Container>
  );
}
