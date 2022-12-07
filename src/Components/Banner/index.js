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
import charges from '../../img/charges.jpg';

export default function Banner() {
  return (
    <Container>
      <ContainerImg>
        <ImageWidth imageBg={charges}>
          <ContainerDesc>
            <Titulo>
              <p> JERSEY CHARGES </p>
              <h6> Confira a linha de jerseys San Diego Charges </h6>
            </Titulo>
            <ButtonDesc>
              <Link to="/produtos">
                Saiba mais &gt;&gt;
              </Link>
            </ButtonDesc>
          </ContainerDesc>
          <ContainerAmarelo />
          <ContainerAzul />
        </ImageWidth>
      </ContainerImg>
    </Container>
  );
}
