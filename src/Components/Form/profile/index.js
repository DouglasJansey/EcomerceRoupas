import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Form, Label, InputForm, SelectForm, ButtonSubmitForm,
} from './styled';
import * as actionUser from '../../../store/modules/userInfo/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [cpf, setCpf] = useState(user.cpf);
  const [password, setPassword] = useState(user.password);
  const [gender, setGender] = useState(user.gender);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(actionUser.userRequest({
      userProfile: {
        name,
        email,
        cpf,
        password,
        gender,
      },
    }));
  }
  return (
    <Form>
      <Label htmlFor="nome">
        Nome:
        <InputForm
          type="text"
          name="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Label>
      <Label htmlFor="email">
        Email:
        <InputForm
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Label>
      <Label htmlFor="gender" inputWidth="Gênero">
        Gênero:
        <SelectForm value={gender} onChange={(e) => setGender(e.target.value)}>
          <option
            defaultChecked
            hidden
            value={gender}
          >
            {gender}
          </option>
          <option
            value="Masculino"
          >
            Masculino
          </option>
          <option
            value="Feminino"
          >
            Feminino
          </option>
          <option
            value="Outro..."
          >
            Outro...
          </option>
        </SelectForm>
      </Label>
      <Label htmlFor="cpf" inputWidth="cpf">
        CPF:
        <InputForm
          disabled
          type="text"
          name="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </Label>
      <ButtonSubmitForm onClick={(e) => handleSubmit(e)}>Salvar</ButtonSubmitForm>
    </Form>
  );
}
