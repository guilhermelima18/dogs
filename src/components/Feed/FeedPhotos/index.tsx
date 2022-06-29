import { Dispatch, SetStateAction, useEffect } from "react";
import { useGetPhotos } from "../../../hooks/useGetPhotos";
import { PhotosProps } from "../../../types/useGetPhotosType";
import { Layout } from "../../Layout";
import { FeedPhotosItem } from "./FeedPhotosItem";
import { BoxFeed } from "./styles";

type FeedPhotosProps = {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  setPhotoId?: Dispatch<SetStateAction<number | undefined>>;
  photos: PhotosProps[];
};

export const FeedPhotos = ({
  photos,
  setModalIsOpen,
  setPhotoId,
}: FeedPhotosProps) => {
  return (
    <Layout>
      <BoxFeed className="animeLeft">
        {photos &&
          photos.map((photo) => (
            <FeedPhotosItem
              key={photo.id}
              photo={photo}
              setModalIsOpen={setModalIsOpen}
              setPhotoId={setPhotoId}
            />
          ))}
      </BoxFeed>
    </Layout>
  );
};
