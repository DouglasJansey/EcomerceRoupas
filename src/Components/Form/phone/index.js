/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputMask from '../../../Util';
import {
  Form, Label, InputForm, Container, ButtonSubmitForm, SubContainer,
} from './styled';
import * as actionUser from '../../../store/modules/userInfo/actions';

export default function Phone() {
  const phone = useSelector((state) => state.userInfo.user.Phones);
  const dispatch = useDispatch();
  const [ddd_cel, setDdd] = useState(' ');
  const [cel_number, setCelPhone] = useState(' ');
  const [ddd_phone, setDddPhone] = useState(' ');
  const [phone_number, setPhoneNumber] = useState(' ');

  useEffect(() => {
    if (phone.length > 0) {
      if (ddd_cel) setDdd(phone[0].ddd_cel);
      if (cel_number) setCelPhone(phone[0].cel_number);
      if (ddd_phone) setDddPhone(phone[0].ddd_phone);
      if (phone_number) setPhoneNumber(phone[0].phone_number);
    }
  }, [phone]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('foi');
    dispatch(actionUser.userRequest({
      userPhone: {
        ddd_cel,
        cel_number,
        ddd_phone,
        phone_number,
      },
    }));
  }
  return (
    <SubContainer>
      <Form>
        <Container>
          <Label htmlFor="ddd">
            DDD:
            <InputForm
              inputWidth="ddd"
              type="text"
              name="ddd"
              value={ddd_cel}
              onChange={(e) => setDdd(e.target.value)}
            />
          </Label>
          <Label htmlFor="celular">
            Celular:
            <InputForm
              inputWidth="celular"
              type="text"
              name="celular"
              value={cel_number}
              onChange={(e) => setCelPhone(e.target.value)}
            />
          </Label>
        </Container>
        <Container>
          <Label htmlFor="ddd">
            DDD:
            <InputForm
              inputWidth="ddd"
              type="text"
              name="ddd"
              value={ddd_phone || ' '}
              onChange={(e) => setDddPhone(e.target.value)}
            />
          </Label>
          <Label htmlFor="telefone">
            Telefone:
            <InputForm
              inputWidth="telefone"
              type="text"
              name="telefone"
              value={phone_number || ' '}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Label>
        </Container>
        <ButtonSubmitForm onClick={(e) => handleSubmit(e)}> Salvar </ButtonSubmitForm>
      </Form>
    </SubContainer>
  );
}
