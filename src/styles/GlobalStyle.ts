import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --type-first: Helvetica, Arial, sans-serif;
    --type-second: 'Spectral', georgia;
  }

  body {
    color: #333;
    font-family: var(--type-first);
    padding-top: 5rem;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  h1, h2, h3, h4, p {
    margin: 0px;
  }

  ul, li {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button, input {
    display: block;
    font-size: 1rem;
    font-family: var(--type-first);
    color: #333;
  }

  button {
    cursor: pointer;
  }

  .app {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh + 10rem);
  }

  .appBody {
    flex: 1;
    margin: 2rem 0;
  }

  .VictoryContainer {
    height: initial !important;
  }

  .title {
    font-family: var(--type-second);
    line-height: 1;
    font-size: 3rem;
    margin: 1rem 0;
    position: relative;
    z-index: 1;
  }

  .title::after {
    content: '';
    background: #FB1;
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    bottom: 5px;
    left: -5px;
    z-index: -1;
    border-radius: 0.2rem;
  }

  .animeLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft .3s forwards;
  }

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
