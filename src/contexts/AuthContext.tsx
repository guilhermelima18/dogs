import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface AuthContextProviderProps {
  children: ReactNode;
}

type ParamsGetTokenProps = {
  username: string;
  password: string;
};

type AuthContextProps = {
  getToken: (params: ParamsGetTokenProps) => Promise<AxiosResponse | undefined>;
  getUser: (token: string) => Promise<void>;
  loading: boolean;
  token: GetTokenProps;
  user?: GetUserProps;
};

type GetTokenProps = {
  token: string;
  user_display_name: string;
  user_email: string;
  user_nicename: string;
};

type GetUserProps = {
  id: number;
  email: string;
  nome: string;
  username: string;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<GetUserProps>();
  const [token, setToken] = useState<GetTokenProps>(() => {
    const getTokenStorage = localStorage.getItem("@dogs.token");

    if (getTokenStorage) {
      return JSON.parse(getTokenStorage);
    }

    return {} as GetTokenProps;
  });

  const getToken = useCallback(async (params: ParamsGetTokenProps) => {
    try {
      setLoading(true);

      const response = await api.post("/jwt-auth/v1/token", {
        ...params,
      });

      if (response) {
        if (response.status === 200) {
          setToken(response.data);
          localStorage.setItem("@dogs.token", JSON.stringify(response.data));

          await getUser(response.data.token);
        }
      }

      return response;
    } catch (error: any) {
      const { data } = error.response;
      toast.error(data.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const validateToken = useCallback(async (token: string) => {
    try {
      setLoading(true);

      const response = await api.post(
        "/jwt-auth/v1/token/validate",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        await getUser(token);
      }
    } catch (error: any) {
      const { data } = error.response;

      if (data.data.status === 403) {
        toast.error("Token inválido, faça login novamente");
        localStorage.removeItem("@dogs.token");
        location.href = "/login";
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const getUser = useCallback(async (token: string) => {
    try {
      const response = await api.get("/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response) {
        if (response.status === 200) {
          setUser(response.data);
        }
      }
    } catch (error: any) {
      const { data } = error.response;
      toast.error(data.message);
    }
  }, []);

  useLayoutEffect(() => {
    const getTokenStorage = localStorage.getItem("@dogs.token");

    if (getTokenStorage) {
      const tokenParsed = JSON.parse(getTokenStorage);
      validateToken(tokenParsed.token);
    }
  }, []);

  useEffect(() => {
    if (pathname === "/login" && token.token) {
      navigate("/");
    }
  }, [pathname, token.token]);

  return (
    <AuthContext.Provider value={{ getToken, getUser, loading, token, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const signOut = () => {
  localStorage.removeItem("@dogs.token");
  location.href = "/login";
};

export const useAuthContext = () => useContext(AuthContext);
