import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { Login } from "../pages/Login";
import Home from "../pages/Home";
import Conta from "../pages/Conta";
import LoginCreate from "../pages/Login/LoginCreate";
import PostarFoto from "../pages/Conta/PostarFoto";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/cadastro" element={<LoginCreate />} />
      <Route
        path="/minha-conta"
        element={<PrivateRoutes Component={Conta} />}
      />
      <Route
        path="/minha-conta/postar"
        element={<PrivateRoutes Component={PostarFoto} />}
      />
    </Routes>
  );
};
