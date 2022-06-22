import { ReactNode } from "react";
import styled from "styled-components";

type SectionFormProps = {
  backgroundImage: ReactNode;
};

export const BoxLogin = styled.div<SectionFormProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    content: "";
    background-image: ${(props) => `url(${props.backgroundImage})`};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    display: block;
  }

  @media (max-width: 40rem) {
    & {
      grid-template-columns: 1fr;
    }

    &::before {
      display: none;
    }
  }
`;

export const SectionForm = styled.section`
  max-width: 30rem;
  padding: 1rem;

  @media (max-width: 40rem) {
    & {
      max-width: 100%;
    }
  }
`;

export const Form = styled.form`
  margin-bottom: 2rem;

  a {
    display: inline-block;
    color: #666;
    padding: 0.5rem 0;
    line-height: 1;
    margin-top: 2rem;

    &::after {
      content: "";
      background: currentColor;
      width: 100%;
      height: 2px;
      display: block;
    }
  }
`;

export const BoxCadastro = styled.div`
  margin-top: 4rem;

  h2 {
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2rem;

    &::after {
      content: "";
      background-color: #ddd;
      width: 3rem;
      height: 0.5rem;
      display: block;
      border-radius: 0.2rem;
    }
  }

  p {
    margin: 2rem 0;
  }
`;
