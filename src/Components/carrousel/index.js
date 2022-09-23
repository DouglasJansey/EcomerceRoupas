/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-array-index-key */
import { useState, useRef, useEffect } from 'react';
import {
  Container, ContainerImg, ButtonDesc, ContainerDesc,
  ImagenWidth, Titulo, Description,
} from './styled';

export default function Home() {
  const carrousel = useRef(0);
  const banner = 'https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/seahawks/adsesbdweoucrlip2vvy';
  const [scrollX, setScrollX] = useState(0);
  const imageWidth = carrousel.current.offsetWidth;

  const containerWidth = 1 * imageWidth;

  function handleScrollRight() {
    let x = scrollX - imageWidth;
    if ((imageWidth - containerWidth) > x) {
      x = (imageWidth - containerWidth);
    }
    setScrollX(x);
  }
  function handleScrollLeft() {
    let x = scrollX + imageWidth;
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }
  return (
    <Container>
      <ContainerImg directionX={scrollX} containerWidth={containerWidth}>
        <ContainerDesc>
          <Titulo>
            <p>
              Jersey Action Green
            </p>
          </Titulo>
          <Description>
            CONHEÇA A LINHA DE JERSEY!
          </Description>
          <ButtonDesc>
            <p>CLIQUE E CONFIRA!</p>
          </ButtonDesc>
        </ContainerDesc>
        <ImagenWidth src={banner} alt="" />
      </ContainerImg>

    </Container>
  );
}
