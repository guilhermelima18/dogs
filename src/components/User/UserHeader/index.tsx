import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { routesUser } from "../../../helpers/routesUser";
import { UserHeaderNav } from "../UserHeaderNav";
import { HeaderContainer } from "./styles";

export const UserHeader = () => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    if (pathname === routesUser.minhasFotos) {
      setTitle("Minha conta");
    } else if (pathname === routesUser.estatisticas) {
      setTitle("Estatísticas");
    } else {
      setTitle("Poste sua foto");
    }
  }, [pathname]);

  return (
    <HeaderContainer>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </HeaderContainer>
  );
};
