import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import dogsImg from "../../assets/dogs.svg";
import usuarioImg from "../../assets/usuario.svg";
import { HeaderContainer, NavContainer } from "./styles";

export const Header = () => {
  const { user } = useAuthContext();

  return (
    <HeaderContainer>
      <NavContainer img={usuarioImg}>
        <Link to="/" aria-label="Dogs - Home">
          <img src={dogsImg} alt="Dogs" />
        </Link>
        {user ? (
          <Link to="/conta">{user?.nome}</Link>
        ) : (
          <Link to="/login">Login / Criar</Link>
        )}
      </NavContainer>
    </HeaderContainer>
  );
};
