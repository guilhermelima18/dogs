import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routesUser } from "../../../helpers/routesUser";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import {
  FeedIcon,
  AdicionarIcon,
  EstatisticasIcon,
  SairIcon,
} from "../../Icons";
import {
  NavContainer,
  NavContainerMobile,
  Button,
  MobileButton,
} from "./styles";

export const UserHeaderNav = () => {
  const { pathname } = useLocation();
  const mediaQuery = useMediaQuery("(max-width: 800px)");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mediaQuery && (
        <MobileButton
          aria-label="Menu"
          activeMenuMobile={mobileMenu}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></MobileButton>
      )}
      {mediaQuery ? (
        <NavContainerMobile active={mobileMenu}>
          <Link to="/minha-conta">
            <Button pathname={pathname} isCurrentRoute={routesUser.minhasFotos}>
              <FeedIcon />
              Minha conta
            </Button>
          </Link>
          <Link to="/minha-conta/estatisticas">
            <Button
              pathname={pathname}
              isCurrentRoute={routesUser.estatisticas}
            >
              <EstatisticasIcon />
              Estatísticas
            </Button>
          </Link>
          <Link to="/minha-conta/postar">
            <Button
              pathname={pathname}
              isCurrentRoute={routesUser.adicionarFoto}
            >
              <AdicionarIcon />
              Adicionar foto
            </Button>
          </Link>
          <Button pathname={pathname} isCurrentRoute={"/sair"}>
            <SairIcon />
            Sair
          </Button>
        </NavContainerMobile>
      ) : (
        <NavContainer>
          <Link to="/minha-conta">
            <Button pathname={pathname} isCurrentRoute={routesUser.minhasFotos}>
              <FeedIcon />
            </Button>
          </Link>
          <Link to="/minha-conta/estatisticas">
            <Button
              pathname={pathname}
              isCurrentRoute={routesUser.estatisticas}
            >
              <EstatisticasIcon />
            </Button>
          </Link>
          <Link to="/minha-conta/postar">
            <Button
              pathname={pathname}
              isCurrentRoute={routesUser.adicionarFoto}
            >
              <AdicionarIcon />
            </Button>
          </Link>
          <Button pathname={pathname} isCurrentRoute={"/sair"}>
            <SairIcon />
          </Button>
        </NavContainer>
      )}
    </>
  );
};
