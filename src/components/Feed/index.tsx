import { useEffect, useState } from "react";
import { useGetPhotos } from "../../hooks/useGetPhotos";
import { FeedModal } from "./FeedModal";
import { FeedPhotos } from "./FeedPhotos";
import {} from "./styles";

export const Feed = () => {
  const { getPhotos, photos, loading } = useGetPhotos();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [photoId, setPhotoId] = useState<number | undefined>();

  useEffect(() => {
    const params = {
      page: 1,
      total: 20,
      user: 0,
    };

    getPhotos(params.page, params.total, params.user);
  }, []);

  return (
    <>
      <FeedPhotos
        photos={photos}
        setModalIsOpen={setModalIsOpen}
        setPhotoId={setPhotoId}
      />
      {modalIsOpen && (
        <FeedModal photoId={photoId} setModalIsOpen={setModalIsOpen} />
      )}
    </>
  );
};
