import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";
import { GetStatisticsProps } from "../types/useGetStatisticsType";

export function useGetStatistics() {
  const { token } = useAuthContext();
  const [statistics, setStatistics] = useState<GetStatisticsProps[]>([]);
  const [loading, setLoading] = useState(false);

  const getStatistics = useCallback(async () => {
    try {
      setLoading(true);

      const response = await api.get("/api/stats", {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      });

      if (response) {
        if (response.status === 200) {
          setStatistics(response.data);
        }
      }
    } catch (error: any) {
      const { data } = error.response;
      toast.error(data.message);
    } finally {
      setLoading(false);
    }
  }, [token.token]);

  return {
    getStatistics,
    statistics,
    loading,
  };
}
