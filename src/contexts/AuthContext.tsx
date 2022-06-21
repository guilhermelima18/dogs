import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
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
  getToken: (params: ParamsGetTokenProps) => Promise<void>;
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

          getUser(response.data.token);
        }
      }
    } catch (error: any) {
      const { data } = error.response;
      toast.error(data.message);
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

  useEffect(() => {
    if (token.token) {
      getUser(token.token);
    }
  }, [token.token]);

  return (
    <AuthContext.Provider value={{ getToken, getUser, loading, token, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
