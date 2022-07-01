import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

type ResetPasswordParams = {
  key: string;
  login: string;
  password: string;
};

export function useResetPassword() {
  const [loading, setLoading] = useState(false);

  const resetPassword = useCallback(async (params: ResetPasswordParams) => {
    try {
      setLoading(true);

      const response = await api.post("/api/password/reset", {
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
    resetPassword,
    loading,
  };
}
