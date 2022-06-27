import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { Login } from "../pages/Login";
import Home from "../pages/Home";
import Conta from "../pages/Conta";
import LoginCreate from "../pages/Login/LoginCreate";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/criar" element={<LoginCreate />} />
      <Route path="/conta" element={<PrivateRoutes Component={Conta} />} />
    </Routes>
  );
};
