import axios from 'axios';

const freteCalc = (props) => {
  console.log(props);
  const {
    sCepDestino, sCepOrigem, VlPeso, nCdFormato, nVlComprimento, nVlAltura,
    nVlLargura, sCdMaoPropria, nVlValorDeclarado, CdAvisoRecebimento, nCdServico, nVlDiametro,
  } = props;

  const Url = `http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?sCepOrigem=${
    sCepOrigem}&sCepDestino=${sCepDestino}&nVlPeso=${
    VlPeso}&nCdFormato=${nCdFormato}&nVlComprimento=${
    nVlComprimento}&nVlAltura=${nVlAltura}&nVlLargura=${
    nVlLargura}&sCdMaoPropria=${sCdMaoPropria}&nVlValorDeclarado=${
    nVlValorDeclarado}&sCdAvisoRecebimento=${CdAvisoRecebimento}&nCdServico=${
    nCdServico}&nVlDiametro=${nVlDiametro}&StrRetorno=xml`;
  axios.post(Url).then((response) => console.log(response));
};
export default freteCalc;
