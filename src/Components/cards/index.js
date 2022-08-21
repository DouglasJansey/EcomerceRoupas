import { useState } from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import {
  ContainerCard, Image, Text, ColorShirt, ContainerImg,
  BoxPrice, ButtonBuy,
} from './styled';

export default function Cards() {
  const [num, setNum] = useState(0);
  const [fav, setFav] = useState(false);

  const imagem = ['https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/437c02d1-47b4-4fbe-854e-a2cc352dc660/seattle-seahawks-vapor-untouchable-dk-metcalf-mens-limited-football-jersey-3BfVGx.png',
    'https://static.nike.com/a/images/t_default/e3a408e5-3806-416e-836c-500afb2b0fa3/seattle-seahawks-vapor-untouchable-dk-metcalf-mens-limited-football-jersey-VhzWgp.png',
    'https://static.nike.com/a/images/t_default/d0b80a88-08f8-4660-8a58-c337c6f4f5a7/seattle-seahawks-vapor-untouchable-dk-metcalf-mens-limited-football-jersey-bZzKJx.png'];
  return (
    <ContainerCard>
      <ContainerImg>
        <button type="button" onClick={() => setFav(!fav)}>
          {fav ? <BsHeartFill size={22} color="red" /> : <BsHeart size={22} /> }
        </button>
        <BoxPrice>
          <p>R$: 450,00</p>
        </BoxPrice>
        <Image src={imagem[num]} />
      </ContainerImg>
      <div>
        <ColorShirt>
          <input type="radio" name="colors" value={0} onChange={(e) => setNum(e.target.value)} defaultChecked />
          <input type="radio" name="colors" value={1} onChange={(e) => setNum(e.target.value)} />
          <input type="radio" name="colors" value={2} onChange={(e) => setNum(e.target.value)} />
        </ColorShirt>
      </div>
      <Text>Jersey Seattle Seahawks Dk Metcalf nº 14 Nike Game</Text>
      <table>
        <tr>
          <th>PP</th>
          <th>P</th>
          <th>M</th>
          <th>G</th>
          <th>GG</th>
        </tr>
      </table>
      <ButtonBuy type="button">Comprar</ButtonBuy>
    </ContainerCard>
  );
}
