import styled from "styled-components";

export const InputContainer = styled.div`
  margin-bottom: 1rem;

  > p {
    color: #f31;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`;

export const LabelBox = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`;

export const InputBox = styled.input`
  background-color: #eee;
  width: 100%;
  display: block;
  border: 1px solid #eee;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  transition: 0.2s;

  &:focus,
  &:hover {
    background-color: white;
    outline: none;
    border-color: #fb1;
    box-shadow: 0px 0px 0px 3px #fea;
  }
`;
