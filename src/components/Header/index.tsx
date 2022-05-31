import { Link } from "react-router-dom";
import { Layout } from "../Layout";
import dogsImg from "../../assets/dogs.svg";
import usuarioImg from "../../assets/usuario.svg";
import { HeaderContainer, NavContainer } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer img={usuarioImg}>
        <Link to="/" aria-label="Dogs - Home">
          <img src={dogsImg} alt="Dogs" />
        </Link>
        <Link to="/login">Login / Criar</Link>
      </NavContainer>
    </HeaderContainer>
  );
};
