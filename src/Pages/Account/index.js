/* eslint-disable dot-notation */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
import {
  useState, lazy, Suspense,
} from 'react';
import {
  Container, UpdateContainer, SubContainer,
  ButtonMenu, ContainerForm,
} from './styled';
import LoadingPage from '../../Components/Loading';

export default function UpdateUser() {
  const [bg, setBg] = useState('Perfil');
  const menuButton = ['Perfil', 'Produtos', 'Pedidos'];

  const ComponentsMap = {
    PERFIL: lazy(() => import('../../Components/updateUser')),
    PRODUTOS: lazy(() => import('../../Components/Produtos')),
  };
  function ComponentsRender() {
    const Component = ComponentsMap[bg.toLocaleUpperCase()];
    return (
      <div>
        <Suspense fallback={<div />}>
          <Component />
        </Suspense>
      </div>
    );
  }

  function handdleButton(e) {
    e.preventDefault();
    const inputValue = e.target.innerHTML;
    setBg(inputValue);
  }
  return (
    <Container>
      <UpdateContainer>
        <SubContainer>
          {menuButton.map((button, index) => (
            <ButtonMenu type="button" key={index} onClick={(e) => handdleButton(e)} changeBG={bg}>
              {button}
            </ButtonMenu>
          ))}
        </SubContainer>
        <ContainerForm>
          {/* <ComponentsRender /> */}
        </ContainerForm>
      </UpdateContainer>
    </Container>
  );
}
