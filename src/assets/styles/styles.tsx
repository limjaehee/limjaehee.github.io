import { createGlobalStyle } from 'styled-components'
import 'swiper/swiper-bundle.css'

export const GlobalStyle = createGlobalStyle`
  #root,
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  
  #root {
      height: 100dvh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
    letter-spacing: -0.025em; /* -2.5%에 해당하는 em 단위 */
    -webkit-tap-highlight-color: transparent;
  }

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  form,
  label,
  table {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .custom-fade-enter {
      opacity: 0;
  }
  .custom-fade-enter-active {
      opacity: 1;
      transition: opacity 200ms ease-in;
  }
  .custom-fade-exit {
      opacity: 1;
  }
  .custom-fade-exit-active {
      opacity: 0;
      transition: opacity 200ms ease-out;
  }

  .custom-fade-slide-enter {
      opacity: 0;
      transform: translateY(20px);
  }
  .custom-fade-slide-enter-active {
      opacity: 1;
      transform: translateY(0);
      transition: transform 200ms ease-in;
  }
  .custom-fade-slide-exit {
      opacity: 1;
      transform: translateY(0);
  }
  .custom-fade-slide-exit-active {
      opacity: 0;
      transform: translateY(20px);
      transition:transform 200ms ease-out;
  }
`
