import styled from "styled-components";
import overviewImg from "../../../../assets/visualizacao.svg";

export const BoxFeedItem = styled.li`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  span {
    grid-area: 1 / 1;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 1rem;
    text-align: center;
    display: none;
    align-items: center;
    justify-content: center;

    &::before {
      content: "";
      width: 16px;
      height: 10px;
      display: inline-block;
      margin-right: 0.25rem;
      background: url(${overviewImg});
      background-repeat: no-repeat;
    }
  }

  &:hover span {
    display: flex;
  }

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;
  }

  div {
    grid-area: 1 / 1;
  }

  @media (max-width: 40rem) {
    &:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`;
