import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

type CreateUserParams = {
  username: string;
  email: string;
  password: string;
};

export function useCreateUser() {
  const [loading, setLoading] = useState(false);

  const createUser = useCallback(async (createUserParams: CreateUserParams) => {
    try {
      setLoading(true);

      const response = await api.post("/api/user", {
        ...createUserParams,
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
    createUser,
    loading,
  };
}
