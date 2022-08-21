/* eslint-disable react/no-unescaped-entities */
import {
  ContainerBg, ContainerImg, Text, Blackout,
} from './styled';
import rocketman from '../../img/rocketman.png';

export default function NotFound() {
  return (
    <ContainerBg>
      <Blackout>
        <ContainerImg src={rocketman} />
        <Text>It's lonely out in space...</Text>
        <p> Página não encontrada!</p>
      </Blackout>
    </ContainerBg>
  );
}
