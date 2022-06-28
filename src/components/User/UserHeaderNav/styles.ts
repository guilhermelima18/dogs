import styled from "styled-components";

export const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

interface NavContainerMobileProps {
  active: boolean;
}

export const NavContainerMobile = styled.nav<NavContainerMobileProps>`
  width: 220px;
  display: block;
  position: absolute;
  top: 70px;
  right: 0px;
  padding: 0 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  transform: translateX(-10px);
  opacity: 0;
  transition: ${(props) => props.active && "0.3s"};
  transform: ${(props) => props.active && "initial"};
  opacity: ${(props) => props.active && "1"};
  z-index: 100;
  pointer-events: ${(props) => (props.active ? "initial" : "none")};
  padding: 0.5rem 0;

  a,
  button {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: none;
    width: 100%;
    border: none;
    gap: 10px;
    border-bottom: 1px solid #eee;
    padding: 0.5rem 0;
    cursor: pointer;

    &:hover {
      color: #fb1;
    }

    &:hover svg > * {
      fill: #fb1;
    }
  }

  button {
    border-bottom: none;
  }
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

interface MobileButtonProps {
  activeMenuMobile: boolean;
}

export const MobileButton = styled.button<MobileButtonProps>`
  background-color: #eee;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  border-radius: 0.2rem;
  padding: 0;

  &::after {
    content: "";
    background-color: currentColor;
    display: block;
    width: ${(props) => (props.activeMenuMobile ? "4px" : "1.2rem")};
    height: ${(props) => (props.activeMenuMobile ? "4px" : "2px")};
    border-radius: 2px;
    box-shadow: ${(props) =>
      props.activeMenuMobile
        ? "0 8px currentColor, 0 -8px currentColor"
        : "0 6px currentColor, 0 -6px currentColor"};
    transform: ${(props) => props.activeMenuMobile && "rotate(-90deg)"};
    transition: 0.2s;
  }

  &:focus,
  &:hover {
    outline: none;
    background-color: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
  }
`;
