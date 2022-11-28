/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-array-index-key */
import { useState, useRef } from 'react';
import { set } from 'lodash';
import {
  Container, ContainerImg, ButtonDesc, ContainerDesc,
  ImageWidth, Titulo, Description, ContainerButtons,
} from './styled';
import banner1 from '../../img/banner1.jpg';
import banner2 from '../../img/banner2.jpg';

export default function Carrousel() {
  const carrousel = useRef(0);
  const banners = [
    { image: banner1, titulo: 'Jerseys Oficiais 0', subTitle: 'tenha sua jersey a um click de distância' },
    { image: banner2, titulo: 'Jerseys Oficiais 1', subTitle: 'todas as divisões estão aqui' },
  ];
  const [scrollX, setScrollX] = useState(0);
  const [bannerPos, setBanner] = useState(0);
  const imageWidth = carrousel.current.offsetWidth;
  const containerWidth = 1 * imageWidth;
  function changeBanner(e) {
    e.preventDefault();
    if (bannerPos <= 1) {
      setBanner(bannerPos + 1);
    } else if (bannerPos >= 1) {
      setBanner(0);
    }
  }
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
              Saiba mais &gt;&gt;
            </ButtonDesc>
          </ContainerDesc>
        </ImageWidth>
      </ContainerImg>
      <ContainerButtons>
        <label htmlFor="button1" onChange={(e) => changeBanner(e)}>
          <input type="radio" name="button1" value="0" />
          <input type="radio" name="button1" value="1" />
        </label>
      </ContainerButtons>
    </Container>
  );
}
