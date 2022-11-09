/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Form, Label, InputForm, Container, ButtonSubmitForm,
} from './styled';
import * as actionUser from '../../../store/modules/userInfo/actions';

export default function Address() {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.userInfo.user.Addresses);
  const [street, setStreet] = useState(' ');
  const [street_number, setStreetNumber] = useState(' ');
  const [city, setCity] = useState(' ');
  console.log(address);

  useEffect(() => {
    if (address.length > 0) {
      setStreet(address[0].street);
      setStreetNumber(address[0].street_number);
      setCity(address[0].city);
    }
  }, [address]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(actionUser.userRequest({
      userAddress: {
        street,
        street_number,
        city,
      },
    }));
  }

  return (
    <Container>
      <Form>
        <Label htmlFor="endereco">
          Endereço:
          <InputForm
            type="text"
            name="endereco"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </Label>
        <Label htmlFor="numero" inputWidth="numero">
          Número:
          <InputForm
            type="text"
            name="numero"
            value={street_number}
            onChange={(e) => setStreetNumber(e.target.value)}
          />
        </Label>
        <Label htmlFor="estado" inputWidth="estado">
          Estado:
          <InputForm
            type="text"
            name="estado"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Label>
        <ButtonSubmitForm onClick={(e) => handleSubmit(e)}> Salvar </ButtonSubmitForm>
      </Form>
    </Container>
  );
}
