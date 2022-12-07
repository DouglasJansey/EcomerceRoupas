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
  UpdateContainer, SubContainer,
  ButtonMenu, ContainerForm, Container,
} from './styled';

export default function UpdateUser() {
  const [bg, setBg] = useState('endereço');
  const menuButton = ['FOTO', 'PERFIL', 'ENDEREÇO', 'TELEFONE'];

  const ComponentsMap = {
    PERFIL: lazy(() => import('../Form/profile')),
    FOTO: lazy(() => import('../Form/photo')),
    ENDERECO: lazy(() => import('../Form/address')),
    TELEFONE: lazy(() => import('../Form/phone')),
  };

  function ComponentsRender() {
    const Components = ComponentsMap[bg.replace(/[ç]/g, 'c').toLocaleUpperCase()];
    console.log('tentando renderizar');
    return (
      <Suspense fallback=" ">
        <Components />
      </Suspense>
    );
  }

  function handdleButton(e) {
    e.preventDefault();
    const inputValue = e.target.innerHTML.toLowerCase();
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
          <ComponentsRender />
        </ContainerForm>
      </UpdateContainer>
    </Container>
  );
}
