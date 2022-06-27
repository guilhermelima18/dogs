import styled from "styled-components";

export const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

interface ButtonProps {
  pathname?: string;
  isCurrentRoute?: string;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.pathname === props.isCurrentRoute ? "white" : "#eee"};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  border-radius: 0.2rem;
  border-color: ${(props) => props.pathname === props.isCurrentRoute && "#fb1"};
  box-shadow: ${(props) =>
    props.pathname === props.isCurrentRoute && "0 0 0 3px #fea"};

  &:hover,
  &:focus {
    background-color: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
    outline: none;
  }

  svg > * {
    fill: ${(props) => props.pathname === props.isCurrentRoute && "#fb1"};
  }
`;
