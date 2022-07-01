import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ Component, isPrivate }: any) => {
  const getTokenStorage = localStorage.getItem("@dogs.token");

  return getTokenStorage && !isPrivate ? (
    <Component />
  ) : !getTokenStorage && isPrivate ? (
    <Component />
  ) : (
    <Navigate to="/" state={{ from: "/" }} />
  );
};
