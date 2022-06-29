import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";

export function useCreateComment() {
  const { token } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const createComment = useCallback(
    async (photoId: number, comment: string) => {
      try {
        setLoading(true);

        const response = await api.post(
          `/api/comment/${photoId}`,
          { comment },
          {
            headers: {
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
    },
    [token.token]
  );

  return {
    createComment,
    loading,
  };
}
