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
      <SubContainer>
        <div>
          <Link to="wwww.instagram.com">
            <BsInstagram size={25} color="#fff" />
          </Link>
          <Link to="wwww.instagram.com">
            <BsFacebook size={25} color="#fff" />
          </Link>
          <Link to="wwww.instagram.com">
            <BsTwitter size={25} color="#fff" />
          </Link>
          <Link to="wwww.instagram.com">
            <BsLinkedin size={25} color="#fff" />
          </Link>
        </div>
        <p>Endereço: Rua Olimpia Esteves  - 1864 - Realengo - Rio de Janeiro - RJ</p>
        <p> Contato: (21) 9 8888-8888</p>
        <SubContainer1 />
      </SubContainer>
    </Container>
  );
}
