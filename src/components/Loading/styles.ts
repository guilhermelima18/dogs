import styled from "styled-components";

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const BoxLoading = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  margin: auto;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding-left: 5px;
  /* transform: rotate(360deg); */
`;
