import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

type RecoverPasswordParams = {
  login: string;
  url: string;
};

export function useRecoverPassword() {
  const [loading, setLoading] = useState(false);

  const recoverPassword = useCallback(async (params: RecoverPasswordParams) => {
    try {
      setLoading(true);

      const response = await api.post("/api/password/lost", {
        ...params,
      });

      return response;
    } catch (error: any) {
      const { data } = error.response;
      toast.error(data.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    recoverPassword,
    loading,
  };
}
