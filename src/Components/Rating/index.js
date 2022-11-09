/* eslint-disable no-plusplus */
import { useState } from 'react';
import { ContainerRating, StarRating } from './styled';

export default function Rating() {
  const [currentStar, setCurrentStar] = useState(0);
  const rating = [1, 2, 3, 4, 5];

  function handleRating(e, item) {
    e.preventDefault();
    setCurrentStar(item);
  }
  return (
    <ContainerRating>
      {rating.map((item) => (
        <StarRating
          key={item}
          item={currentStar}
          role="button"
          onClick={(e) => handleRating(e, item)}
        />
      ))}
    </ContainerRating>
  );
}
