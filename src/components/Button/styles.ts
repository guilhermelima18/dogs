import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #fb1;
  min-width: 8rem;
  font-size: 1rem;
  font-family: var(--type-first);
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  color: #764701;
  padding: 0.8rem 1.2rem;
  transition: 0.1s;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 3px #fea, 0px 0px 0px 4px #fb1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
