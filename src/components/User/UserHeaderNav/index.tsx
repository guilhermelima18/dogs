import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routesUser } from "../../../helpers/routesUser";
import {
  FeedIcon,
  AdicionarIcon,
  EstatisticasIcon,
  SairIcon,
} from "../../Icons";
import { NavContainer, Button } from "./styles";

export const UserHeaderNav = () => {
  const { pathname } = useLocation();
  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <NavContainer>
      <Link to="/conta">
        <Button pathname={pathname} isCurrentRoute={routesUser.minhasFotos}>
          <FeedIcon />
          {menuMobile && "Minha conta"}
        </Button>
      </Link>
      <Link to="/conta/estatisticas">
        <Button pathname={pathname} isCurrentRoute={routesUser.estatisticas}>
          <EstatisticasIcon />
          {menuMobile && "Estatísticas"}
        </Button>
      </Link>
      <Link to="/conta/postar">
        <Button pathname={pathname} isCurrentRoute={routesUser.adicionarFoto}>
          <AdicionarIcon />
          {menuMobile && "Adicionar foto"}
        </Button>
      </Link>
      <Button pathname={pathname} isCurrentRoute={"/sair"}>
        <SairIcon />
        {menuMobile && "Sair"}
      </Button>
    </NavContainer>
  );
};
