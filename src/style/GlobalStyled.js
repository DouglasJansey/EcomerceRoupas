import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  html, body{
    height: 100%;
    width: 100%;
  }
  a{
    text-decoration: none;

  }
  body .Toastify .Toastify__toast-container .Toastify__toast--success  {

      background: #008000;
    color: white;
    font-weight: bold;
  }


`;
