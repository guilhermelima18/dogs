import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: white;
  width: 100%;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  position: fixed;
  z-index: 100;
  top: 0px;
`;

type NavContainerProps = {
  img: string;
};

export const NavContainer = styled.nav<NavContainerProps>`
  max-width: 50rem;
  height: 4rem;
  padding: 0 1rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a + a {
    text-decoration: none;
    color: #333;
    display: flex;
    align-items: center;

    &::after {
      content: "";
      background: ${(props) => `url(${props.img}) no-repeat center center`};
      width: 14px;
      height: 17px;
      display: inline-block;
      margin-left: 0.5rem;
      position: relative;
      top: -1px;
    }
  }
`;
