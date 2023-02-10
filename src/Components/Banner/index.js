/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-array-index-key */
import { useState, useRef } from 'react';
import { set } from 'lodash';
import { Link } from 'react-router-dom';
import {
  Container, ContainerImg, ButtonDesc, ContainerAzul, ContainerDesc,
  ImageWidth, Titulo, ContainerAmarelo,
} from './styled';
import charges from '../../img/ESPN-Kayo-NBAFinals-Thumbnail.jpg';

export default function Banner() {
  return (
    <Container>
      <ContainerImg>
        <div>
          <img src={charges} alt="" />
        </div>
      </ContainerImg>
    </Container>
  );
}
