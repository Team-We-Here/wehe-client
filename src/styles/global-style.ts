import { createGlobalStyle } from 'styled-components';

import { reset } from 'styled-reset';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }


  //TODO: font-family 나눔고딕 해줘야함
  html, body { 
    width: 100%;
    height: 100%;
    min-width: 1200px;
    background-color: #ffffff;
    font-size : 16px;
    color: rgb(58, 58, 58);
  }

  ul, ol {
    list-style: none;
  }

`;
