/* eslint-disable quotes */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable prefer-const */
import { Container, Container2, ContainerBanner } from './styled';
import List from '../../Components/List';
import Carrousel from '../../Components/carrousel';
import Banner from '../../Components/Banner';
import getProducts from '../../services/produtos';
import BannerInfo from '../../Components/Banner/InfoProducts';

export default function Home() {
  getProducts();
  return (
    <Container>
      <Carrousel />
      <Container2>
        <List itemProps="Masculino" />
        <Banner />
        <BannerInfo />
        <List itemProps="Tênis" />
      </Container2>
    </Container>
  );
}
