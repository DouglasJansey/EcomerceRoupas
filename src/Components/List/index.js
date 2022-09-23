/* eslint-disable no-return-assign */
import {
  useState, useEffect, useRef, createRef,
} from 'react';
import Card from '../cards';
import axios from '../../services/axios';
import {
  ContainerList, ContainerImages, Container,
  ArrowLeft, ArrowRight, ContainerArrow,
} from './styled';

export default function List() {
  const [product, setProduct] = useState([]);
  const [scrollX, setScrollX] = useState(0);
  const carrousel = useRef(0);
  const imageWidth = carrousel.current.offsetWidth;
  const containerWidth = product.length * 200;
  const cardWidth = 190;

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get('/produtos');
      setProduct(response.data);
    }
    getProducts();
  }, []);
  function handleClickRight() {
    let x = scrollX - cardWidth;
    if ((imageWidth - containerWidth) > x) {
      x = (imageWidth - containerWidth);
    }
    setScrollX(x);
  }
  function handleScrollLeft() {
    let x = scrollX + cardWidth;
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  return (
    <Container>
      <ContainerArrow>
        <ContainerList ref={carrousel}>
          <ContainerImages directionX={scrollX}>
            {product.map((item, i) => (
              <Card
                product={item}
                key={item.id}
                addCart={item}
              />
            ))}
          </ContainerImages>
        </ContainerList>
        <ArrowLeft onClick={() => handleScrollLeft()} />
        <ArrowRight onClick={() => handleClickRight()} />
      </ContainerArrow>
    </Container>
  );
}
