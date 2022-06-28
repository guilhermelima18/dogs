import { useEffect } from "react";
import { useGetPhotos } from "../../../hooks/useGetPhotos";
import { FeedPhotosItem } from "./FeedPhotosItem";
import {} from "./styles";

export const FeedPhotos = () => {
  const { getPhotos, photos, loading } = useGetPhotos();

  useEffect(() => {
    const params = {
      page: 1,
      total: 6,
      user: 8721,
    };

    getPhotos(params.page, params.total, params.user);
  }, []);

  return (
    <ul className="animeLeft">
      {photos &&
        photos.map((photo) => <FeedPhotosItem key={photo.id} photo={photo} />)}
    </ul>
  );
};
