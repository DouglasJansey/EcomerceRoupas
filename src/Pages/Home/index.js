/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable prefer-const */
import { useEffect, useState } from 'react';
import localStorage from 'redux-persist/es/storage';
import { Container } from './styled';
import List from '../../Components/List';
import Carrousel from '../../Components/carrousel';
import Banner from '../../Components/Banner';

export default function Home() {
  const List1 = '../../components/List';

  return (
    <Container>
      <Carrousel />
      <List />
      <Banner />
    </Container>
  );
}
