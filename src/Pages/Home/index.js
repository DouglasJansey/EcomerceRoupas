/* eslint-disable quotes */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable prefer-const */
import { Container, Container2, ContainerBanner } from './styled';
import List from '../../Components/List';
import ListJordan from '../../Components/ListJordan';
import Carrousel from '../../Components/carrousel';
import Banner from '../../Components/Banner';
import background1 from '../../img/nbaBanner.gif';

export default function Home() {
  return (
    <Container>
      <Carrousel />
      <Container2>
        <List />
        <Banner />
        <ListJordan />
      </Container2>
    </Container>
  );
}
