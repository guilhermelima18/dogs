import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";

export function useDeletePhoto() {
  const { token } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const photoDelete = useCallback(
    async (photoId: number) => {
      try {
        setLoading(true);

        const response = await api.delete(`/api/photo/${photoId}`, {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        });
        return response;
      } catch (error: any) {
        const { data } = error.response;
        toast.error(data.message);
      } finally {
        setLoading(false);
      }
    },
    [token.token]
  );

  return {
    photoDelete,
    loading,
  };
}
