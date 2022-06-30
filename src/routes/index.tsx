import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { Login } from "../pages/Login";
import Home from "../pages/Home";
import Conta from "../pages/Conta";
import LoginCreate from "../pages/Login/LoginCreate";
import PostPhoto from "../pages/Conta/PostPhoto";
import Photo from "../pages/Photo";

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
        element={<PrivateRoutes Component={PostPhoto} />}
      />
      <Route path="/foto/:id" element={<Photo />} />
    </Routes>
  );
};
