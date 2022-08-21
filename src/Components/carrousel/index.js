/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-array-index-key */
import { useState, useRef } from 'react';
import {
  Container, ContainerImg, Container2, ArrowRight, ArrowLeft,
} from './styled';

export default function Home() {
  const images = ['https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg',
    'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg',
    'https://i.pinimg.com/originals/e4/34/2a/e4342a4e0e968344b75cf50cf1936c09.jpg',
    'http://www.ung.br/sites/ung.br/files/fields/imagemLateral/noticias/2019/09/fotografia.jpg',
    'https://burst.shopifycdn.com/photos/cute-couple-piggypack.jpg?width=1200&format=pjpg&exif=1&iptc=1',
    'https://st.depositphotos.com/1017908/1548/i/450/depositphotos_15489579-stock-photo-amazing-mountain-with-red-leaf.jpg',
    'https://www.eusemfronteiras.com.br/wp-content/uploads/2019/10/74821454_m-810x632.jpg',
  ];
  const carousel = useRef(null);

  const [scrollX, setScrollX] = useState(0);
  const containerWidth = images.length * 290;

  function handleScrollRight() {
    const maxCarousel = carousel.current.offsetWidth;
    let x = scrollX - 290;
    if ((maxCarousel - containerWidth) > x) {
      x = (maxCarousel - containerWidth);
    }
    setScrollX(x);
    console.log(maxCarousel, x);
  }
  function handleScrollLeft() {
    const maxCarousel = carousel.current.offsetWidth;
    let x = scrollX + 290;
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
    console.log(maxCarousel, x);
  }
  return (
    <Container>
      <Container2 ref={carousel}>
        <ContainerImg directionX={scrollX} width={containerWidth}>
          {images.map((item, index) => (
            <img src={item} key={index} alt="" />
          ))}
        </ContainerImg>
        <ArrowRight onClick={handleScrollRight} />
        <ArrowLeft onClick={handleScrollLeft} />
      </Container2>
    </Container>
  );
}
