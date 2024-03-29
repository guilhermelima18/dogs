import styled from "styled-components";
import overviewBlackImg from "../../../assets/visualizacao-black.svg";

interface BoxPhotoContentProps {
  isSinglePage: boolean;
}

export const BoxPhotoContent = styled.div<BoxPhotoContentProps>`
  background-color: white;
  margin: auto;
  height: ${(props) => (props.isSinglePage ? "auto" : "36rem")};
  border-radius: 0.2rem;
  display: grid;
  grid-template-columns: ${(props) =>
    props.isSinglePage ? "1fr" : "36rem 20rem"};
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: scaleUp 0.3s forwards;

  @keyframes scaleUp {
    to {
      opacity: initial;
      transform: initial;
    }
  }

  > div img {
    border-radius: ${(props) => (props.isSinglePage ? "0.5rem" : "0")};
    overflow: ${(props) => (props.isSinglePage ? "hidden" : "")};
    grid-row: ${(props) => (props.isSinglePage ? 1 : 1 / 4)};
  }

  @media (max-width: 64rem) {
    & {
      height: auto;
      max-height: calc(100vh - 4rem);
      overflow-y: auto;
      grid-template-columns: minmax(20rem, 40rem);

      > div img {
        grid-row: 1;
      }
    }
  }
`;

export const BoxPhotoDetails = styled.div<BoxPhotoContentProps>`
  padding: ${(props) =>
    props.isSinglePage ? "1rem 0 0 0" : "2rem 2rem 0 2rem"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BoxAuthor = styled.p`
  opacity: 0.5;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a:hover {
    text-decoration: underline;
  }

  span::before {
    content: "";
    background: url(${overviewBlackImg});
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    display: inline-block;
  }
`;

export const BoxAttributes = styled.ul`
  display: flex;
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;

  li {
    margin-right: 2rem;

    &::before {
      content: "";
      background-color: #333;
      width: 2px;
      height: 20px;
      margin-right: 0.5rem;
      position: relative;
      top: 3px;
      display: inline-block;
      margin-top: 5px;
    }
  }
`;
