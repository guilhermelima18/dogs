import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { Login } from "../pages/Login";
import Home from "../pages/Home";
import Account from "../pages/Account";
import LoginCreate from "../pages/Login/LoginCreate";
import PostPhoto from "../pages/Account/PostPhoto";
import Photo from "../pages/Photo";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import LoginPasswordLost from "../pages/Login/LoginPasswordLost";
import LoginPasswordReset from "../pages/Login/LoginPasswordReset";
import Statistics from "../pages/Account/Statistics";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={<PrivateRoutes Component={Login} isPrivate />}
      />
      <Route
        path="/login/cadastro"
        element={<PrivateRoutes Component={LoginCreate} isPrivate />}
      />
      <Route
        path="/login/recuperar-senha"
        element={<PrivateRoutes Component={LoginPasswordLost} isPrivate />}
      />
      <Route
        path="/login/resetar"
        element={<PrivateRoutes Component={LoginPasswordReset} isPrivate />}
      />
      <Route
        path="/minha-conta"
        element={<PrivateRoutes Component={Account} />}
      />
      <Route
        path="/minha-conta/estatisticas"
        element={<PrivateRoutes Component={Statistics} />}
      />
      <Route
        path="/minha-conta/postar"
        element={<PrivateRoutes Component={PostPhoto} />}
      />
      <Route path="/perfil/:user" element={<Profile />} />
      <Route path="/foto/:id" element={<Photo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
