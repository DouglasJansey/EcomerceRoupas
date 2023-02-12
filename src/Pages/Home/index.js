/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable prefer-const */
import { Container, Container2, ContainerBanner } from './styled';
import List from '../../Components/List';
import Carrousel from '../../Components/carrousel';
import Banner from '../../Components/Banner';
import background1 from '../../img/nbaBanner.gif';
import freteCalc from '../../Util/freteCalc';

export default function Home() {
  const sCepDestino = '21360300';
  const sCepOrigem = '21770230';
  const VlPeso = 0.3;
  const nCdFormato = 1;
  const nVlComprimento = 40;
  const nVlAltura = 15;
  const nVlLargura = 30;
  const sCdMaoPropria = 'n';
  const nVlValorDeclarado = 300.99;
  const CdAvisoRecebimento = 's';
  const nCdServico = '41106';
  const nVlDiametro = 20;
  const data = {
    sCepDestino,
    sCepOrigem,
    VlPeso,
    nCdFormato,
    nVlComprimento,
    nVlAltura,
    nVlLargura,
    sCdMaoPropria,
    nVlValorDeclarado,
    CdAvisoRecebimento,
    nCdServico,
    nVlDiametro,
  };

  return (
    <Container>
      <Carrousel />
      <Container2>
        <List />
        <Banner />
      </Container2>
    </Container>
  );
}
