import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { formatDate } from "../helpers/formatDate";
import { PhotosProps } from "../types/useGetPhotosType";

export function useGetPhotos() {
  const [photos, setPhotos] = useState<PhotosProps[]>([]);
  const [loading, setLoading] = useState(false);

  const getPhotos = useCallback(
    async (page: number, total: number, user: number) => {
      try {
        setLoading(true);

        const response = await api.get(
          `/api/photo/?_page=${page}&_total=${total}&_user=${user}`
        );

        if (response) {
          if (response.status === 200) {
            const dataFormatted = response.data.map((photo: PhotosProps) => ({
              ...photo,
              date: formatDate(photo.date),
            }));

            setPhotos(dataFormatted);
          }
        }
      } catch (error: any) {
        const { data } = error.response;
        toast.error(data.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    getPhotos,
    photos,
    loading,
  };
}
