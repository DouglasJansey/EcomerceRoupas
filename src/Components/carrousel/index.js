/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-array-index-key */
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, ContainerImg, ButtonDesc, ContainerDesc,
  ImageWidth, Titulo, Description, ContainerButtons, LinkPage,
} from './styled';
import banner1 from '../../img/capa2.gif';

export default function Carrousel() {
  const carrousel = useRef(0);
  const banners = [
    { image: banner1, titulo: 'Jerseys Oficiais', subTitle: 'tenha sua jersey a um click de distância' },
  ];
  const [scrollX, setScrollX] = useState(0);
  const [bannerPos, setBanner] = useState(0);
  const imageWidth = carrousel.current.offsetWidth;
  const containerWidth = 1 * imageWidth;

  return (
    <Container>
      <ContainerImg directionX={scrollX} containerWidth={containerWidth}>
        <div />
        <img src={banners[bannerPos].image} alt="" />
        {/*
        <ImageWidth src={banner1} alt="" />
          <ContainerDesc>
            <Titulo>
              {banners[bannerPos].titulo}
            </Titulo>
            <Description>
              {banners[bannerPos].subTitle}
            </Description>
            <ButtonDesc>
              <LinkPage to="/produtos"><p> Saiba mais &gt;&gt; </p></LinkPage>
            </ButtonDesc>
          </ContainerDesc>
            */}
      </ContainerImg>
      <ContainerButtons />
    </Container>
  );
}
