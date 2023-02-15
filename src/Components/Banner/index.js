/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-array-index-key */
import { useState, useRef } from 'react';
import { set } from 'lodash';
import { Link } from 'react-router-dom';
import {
  Container, ContainerImg, ButtonDesc, ContainerDesc,
  ImageWidth, Titulo,
} from './styled';
import banner2 from '../../img/nbaBanner2.gif';
import jordan from '../../img/jordan.gif';

export default function Banner() {
  return (
    <Container>
      <ContainerImg>
        <img src={banner2} alt="" />
      </ContainerImg>
      <ContainerImg />
    </Container>
  );
}
