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
import banner1 from '../../img/banner1.jpg';
import banner2 from '../../img/banner2.jpg';

export default function Carrousel() {
  const carrousel = useRef(0);
  const banners = [
    { image: banner1, titulo: 'Jerseys Oficiais', subTitle: 'tenha sua jersey a um click de distância' },
    { image: banner2, titulo: 'Jerseys Oficiais', subTitle: 'todas as divisões estão aqui' },
  ];
  const [scrollX, setScrollX] = useState(0);
  const [bannerPos, setBanner] = useState(0);
  const imageWidth = carrousel.current.offsetWidth;
  const containerWidth = 1 * imageWidth;

  function changeBanner() {
    (bannerPos === 0)
      ? setTimeout(() => {
        setBanner(1);
      }, 5000) : setTimeout(() => {
        setBanner(0);
      }, 5000);
  }
  changeBanner();

  return (
    <Container>
      <ContainerImg directionX={scrollX} containerWidth={containerWidth}>
        <ImageWidth imageBg={banners[bannerPos].image}>
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
        </ImageWidth>
      </ContainerImg>
      <ContainerButtons>
        {/* {banners.map((item, index) => <input type="radio" name="button1" value={index} onClick={(e) => setBanner(e.target.value)} />)} */}
      </ContainerButtons>
    </Container>
  );
}
