/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  useState, useMemo, useRef,
  useEffect,
} from 'react';
import {
  Container, ContainerLeft, ContainerRight,
  ContainerImages, Image, InputContainer,
  Input, ImageContainer, Label,
} from './styled';
import image1 from '../../../img/imagesInfo/Sc152d5d9767645629bae6e85fded5b36t.webp';
import image2 from '../../../img/imagesInfo/Sdc1736f6e6b241c3a12a1c843ec00046g.webp';
import image3 from '../../../img/imagesInfo/TENISDEBASQUETE2_800x.webp';
import image4 from '../../../img/imagesInfo/tenisdebasquete66_480x480.webp';

export default function Banner() {
  const listImages = [image1, image2, image3, image4];
  const [indexImg, setIndexImg] = useState(0);
  const [count, setCount] = useState(0);

  if (indexImg >= 4) setIndexImg(0);
  function test(props) {
    return 'checked';
  }

  useEffect(() => {
    const currentValue = count;
    setTimeout(() => {
      count >= 3 ? setCount(0) : setCount(currentValue + 1);
    }, [5000]);
  }, [count]);
  function handleInputRadioChange(e) {
    if (indexImg !== e.target.value) {
      const value = +e.target.value;
      // setCount(value);
    }
  }

  return (
    <>
      <Container>
        <ContainerImages>
          <ContainerLeft>
            {listImages.map((item, index) => (
              <ImageContainer key={index} activate={count}>
                <Image src={item} alt="" />
              </ImageContainer>
            ))}
          </ContainerLeft>
          <ContainerRight>
            <Image src={listImages[count]} alt="" />
          </ContainerRight>
        </ContainerImages>
      </Container>
      <InputContainer>
        <div>
          {listImages.map((i, index) => (
            <Label htmlFor={index} key={index} activeLabel={count}>
              <Input
                key={index}
                type="radio"
                name={index}
                id={index}
                value={index}
                onChange={(e) => handleInputRadioChange(e)}
                checked={index === count ? 'checked' : ''}
              />
            </Label>
          ))}
        </div>
      </InputContainer>
    </>
  );
}
