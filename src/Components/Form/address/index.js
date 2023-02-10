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

  useEffect(() => {
    if (address.length > 0) {
      setStreet(address[0].street);
      setStreetNumber(address[0].street_number);
      setCity(address[0].city);
    } else {
      setStreet('');
      setStreetNumber('');
      setCity('');
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
        <div>
          <Label htmlFor="endereco">
            Endereço:
            <InputForm
              type="text"
              name="endereco"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </Label>
          <Label htmlFor="numero">
            Número:
            <InputForm
              inputWidth="numero"
              type="text"
              name="numero"
              value={street_number}
              onChange={(e) => setStreetNumber(e.target.value)}
            />
          </Label>
          <Label htmlFor="estado">
            Estado:
            <InputForm
              inputWidth="estado"
              type="text"
              name="estado"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Label>
        </div>
        <ButtonSubmitForm onClick={(e) => handleSubmit(e)}> Salvar </ButtonSubmitForm>
      </Form>
    </Container>
  );
}
