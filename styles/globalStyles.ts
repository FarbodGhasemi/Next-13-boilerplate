import { createGlobalStyle } from 'styled-components';
import { fonts } from './fonts';
import reset from './reset';
import { fontFamily } from './variables';

export default createGlobalStyle`
  ${fonts}
  ${reset}

  html,body{
    font-family: ${fontFamily};
    scroll-behavior: smooth;
    &.no-scroll {
      overflow: hidden;
    }
  }

`
