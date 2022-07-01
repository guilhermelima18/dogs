import styled from "styled-components";

export const BoxRegisterPhoto = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;

  form button {
    margin-top: 1rem;
  }

  @media (max-width: 40rem) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

interface BoxImagePreviewProps {
  imgPreview: string;
}

export const BoxImagePreview = styled.div<BoxImagePreviewProps>`
  background-image: ${(props) => `url(${props.imgPreview})`};
  background-size: cover;
  background-position: center center;
  border-radius: 1rem;

  &::after {
    content: "";
    height: 0px;
    display: block;
    padding-bottom: 100%;
  }
`;
