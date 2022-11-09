import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import {
  grayText, darkRedColor, yellowColor, darkBlueColor, lightGrayColor,
  darkGrayColor,
} from './colors';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  html, body{
    section{
        padding-top: 150px;
    }
    footer{
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
