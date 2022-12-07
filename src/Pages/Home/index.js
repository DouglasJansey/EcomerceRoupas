/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable prefer-const */
import { Container } from './styled';
import List from '../../Components/List';
import Carrousel from '../../Components/carrousel';
import Banner from '../../Components/Banner';

export default function Home() {
  return (
    <Container>
      <Carrousel />
      <List />
      <Banner />
    </Container>
  );
}
