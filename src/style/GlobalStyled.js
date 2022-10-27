import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import backgroundBody from '../img/background.png';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  html, body{
    width: 100%;
    height: 100%;
    section{
        padding-top: 140px;
    }
  }
  a{
    text-decoration: none;

  }
 .Toastify .Toastify__toast-container .Toastify__toast--success  {
    position: absolute;
    background: #008000;
    color: white;
    font-weight: bold;
  }


`;
