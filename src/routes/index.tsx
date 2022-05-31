import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import Home from "../pages/Home";
import LoginCreate from "../pages/Login/LoginCreate";
import LoginLost from "../pages/Login/LoginLost";
import LoginReset from "../pages/Login/LoginReset";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/criar" element={<LoginCreate />} />
      <Route path="/login/perdeu-senha" element={<LoginLost />} />
      <Route path="/login/resetar-senha" element={<LoginReset />} />
    </Routes>
  );
};
