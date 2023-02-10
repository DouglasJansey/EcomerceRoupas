/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable prefer-const */
import { Container, Container2 } from './styled';
import List from '../../Components/List';
import Carrousel from '../../Components/carrousel';
import Banner from '../../Components/Banner';
import Teams from '../../Components/Teams';

export default function Home() {
  return (
    <Container>
      <Carrousel />
      <Container2>
        <List />
        <Banner />
      </Container2>
    </Container>
  );
}
