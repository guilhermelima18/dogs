import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";

type RegisterPhotoParams = {
  img: File | undefined;
  nome: string;
  peso: string;
  idade: string;
};

export function useCreatePhoto() {
  const { token } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const registerPhoto = useCallback(async (params: RegisterPhotoParams) => {
    try {
      setLoading(true);

      const response = await api.post(
        "/api/photo",
        {
          ...params,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token.token}`,
          },
        }
      );

      return response;
    } catch (error: any) {
      const { data } = error.response;
      toast.error(data.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    registerPhoto,
  };
}
