import styled from "styled-components";

export const BoxForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem 0;

  textarea {
    background-color: #eee;
    width: 100%;
    display: block;
    font-size: 1rem;
    font-family: var(--type-first);
    resize: none;
    border: 1px solid #eee;
    transition: 0.2s;
    padding: 0.3rem;

    &:focus,
    &:hover {
      background-color: white;
      outline: none;
      border-color: #fb1;
      box-sizing: 0 0 0 3px #fea;
    }
  }

  button {
    border: none;
    cursor: pointer;
    color: #333;
    background: transparent;
    font-size: 1rem;
    padding: 0 1rem;
    overflow: hidden;

    &:focus,
    &:hover {
      outline: none;
    }

    &:focus svg path,
    &:hover svg path {
      fill: #fea;
      stroke: #fb1;
    }

    &:focus svg g,
    &:hover svg g {
      animation: latir 0.6s infinite;
    }

    @keyframes latir {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;
