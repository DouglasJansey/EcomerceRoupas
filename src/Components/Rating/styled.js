import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from '../../style/colors';

const SelectStar = (item) => {
  if (item > 0) return `:nth-child(-n + ${item}){ color: yellow;}`;
  return '';
};

export const ContainerRating = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    background: none;
`;
export const StarRating = styled(FaStar)`
   ${({ item }) => SelectStar(item)}
   color: ${lightGrayColor};
`;
