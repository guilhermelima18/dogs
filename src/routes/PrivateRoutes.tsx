import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ Component }: any) => {
  const getTokenStorage = localStorage.getItem("@dogs.token");

  return getTokenStorage ? (
    <Component />
  ) : (
    <Navigate to="/" state={{ from: "/" }} />
  );
};
