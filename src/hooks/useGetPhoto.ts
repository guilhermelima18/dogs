import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { formatDate } from "../helpers/formatDate";
import { api } from "../services/api";
import { GetPhotoProps } from "../types/useGetPhotoType";

export function useGetPhoto() {
  const [photo, setPhoto] = useState<GetPhotoProps>({} as GetPhotoProps);

  const getPhoto = useCallback(async (photoId: number) => {
    try {
      const response = await api.get(`/api/photo/${photoId}`);

      if (response) {
        if (response.status === 200) {
          const commentsFormatted = response.data.comments.map(
            (comment: any) => ({
              ...comment,
              comment_date: formatDate(comment.comment_date),
            })
          );

          const photoFormatted = {
            ...response.data.photo,
            date: formatDate(response.data.photo.date),
          };

          setPhoto({ comments: commentsFormatted, photo: photoFormatted });
        }
      }
    } catch (error: any) {
      const { data } = error.response;
      toast.error(data.message);
    }
  }, []);

  return {
    getPhoto,
    photo,
  };
}
