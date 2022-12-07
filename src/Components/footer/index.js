/* eslint-disable prefer-const */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import {
  BsInstagram, BsFacebook, BsTwitter, BsLinkedin,
} from 'react-icons/bs';
import instagram from '../../img/redesSociais/insta.png';
import facebook from '../../img/redesSociais/face.png';
import twitter from '../../img/redesSociais/twit.png';
import linkedin from '../../img/redesSociais/linkedin.png';

import { Container, SubContainer, SubContainer1 } from './styled';

export default function Footer() {
  const { pathname } = useLocation();

  return (
    <Container>
      <SubContainer1>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <BsInstagram size={20} color="#fff" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <BsFacebook size={20} color="#fff" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <BsTwitter size={20} color="#fff" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <BsLinkedin size={20} color="#fff" />
        </a>
      </SubContainer1>
      <SubContainer>
        <p>Endereço: Rua Olimpia Esteves  - 1864 - Realengo - Rio de Janeiro - RJ</p>
        <p> Contato: (21) 9 8888-8888</p>
      </SubContainer>
    </Container>
  );
}
