import { createGlobalStyle } from 'styled-components';

import GothamBold from '../assets/fonts/Gotham-Bold.otf';
import GothamLight from '../assets/fonts/Gotham-Light.otf'

export const PrimaryFontText = createGlobalStyle`
  @font-face {
    font-family: 'Gotham';
    font-weight: 700;
    src: url(${GothamBold});
  }
  @font-face {
    font-family: 'Gotham';
    font-weight: 300;
    src: url(${GothamLight});
  }



`;
