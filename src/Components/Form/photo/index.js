/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-return */
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import axios from 'axios';
import {
  PhotoContainer, ImageProfile, Label, ImageContainer, ButtonSubmitForm, Form,
  Container,
} from './style';
import * as actionUser from '../../../store/modules/userInfo/actions';
import urlStorage from '../../../services/urlStoragePhoto';

export default function Photo() {
  const defaultPhoto = 'https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png';
  const photoImg = useSelector((state) => state.userInfo.user.Photo);
  const { id } = useSelector((state) => state.userInfo.user);
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState();
  const [profilePic, setProfilePic] = useState(photoImg);
  const hiddenInput = useRef(null);

  useEffect(() => {
    (photoImg === null || photoImg.display_url === '')
      ? setProfilePic(defaultPhoto)
      : setProfilePic(photoImg.display_url || photoImg);
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
    const formData = new FormData();
    try {
      formData.append('image', photo);
      await axios.post(`${urlStorage}`, formData, {
        method: 'POST',
      }).then((res) => {
        const userPhoto = {
          data: res.data.data,
          method: photoImg ? 'put' : 'post',
          id,
        };
        dispatch(actionUser.userRequest(userPhoto));
      });

      toast.success('SUCCESS!');
    //   alert('Usuário criado com sucesso!');
    } catch (err) {
      toast.error('FAIULURE REGISTER');
      console.log(err);
    }
  }
  return (
    <Container>
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
          <ButtonSubmitForm onClick={(e) => handleSubmit(e)}> Salvar </ButtonSubmitForm>
        </PhotoContainer>
      </Form>
    </Container>
  );
}
