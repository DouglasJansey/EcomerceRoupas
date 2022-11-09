/* eslint-disable no-useless-return */
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  PhotoContainer, ImageProfile, Label, ImageContainer, ButtonSubmitForm, Form,
} from './style';
import * as actionUser from '../../../store/modules/userInfo/actions';

export default function Photo() {
  const { url } = useSelector((state) => state.userInfo.user.Photo);
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState();
  const [profilePic, setProfilePic] = useState(url);
  const hiddenInput = useRef(null);
  useEffect(() => {
    if (!url) setProfilePic(url);
  }, []);

  function handleClick() {
    hiddenInput.current.click();
  }

  function validateImage(e) {
    const reader = new FileReader();
    const imagePic = e.target.files[0];
    if (!imagePic || imagePic.length > 0) return;
    setPhoto(imagePic);
    reader.onload = () => {
      setProfilePic(reader.result);
    };
    reader.readAsDataURL(imagePic);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const userPhoto = new FormData();
    try {
      userPhoto.append('photo', photo);
      dispatch(actionUser.userRequest({ userPhoto }));

    //   toast.success('SUCCESS!');
      //   alert('Usuário criado com sucesso!');
    } catch (err) {
    //   toast.error('FAIULURE REGISTER');
      console.log(err);
    }
  }
  return (
    <Form>
      <PhotoContainer>
        <ImageContainer>
          <ImageProfile
            src={profilePic}
            alt="foto perfil"
          />
        </ImageContainer>
        <Label
          htmlFor="foto"
          onClickCapture={() => handleClick()}
        >
          {photo ? photo.name : 'File' }
          <input
            type="file"
            name="foto"
            accept="image/png, image/jpeg"
            ref={hiddenInput}
            onChange={(e) => validateImage(e)}
          />
        </Label>
      </PhotoContainer>
      <ButtonSubmitForm onClick={(e) => handleSubmit(e)}> Salvar </ButtonSubmitForm>
    </Form>
  );
}
