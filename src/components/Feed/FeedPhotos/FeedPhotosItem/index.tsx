import { BoxFeedItem } from "./styles";
import { PhotosProps } from "../../../../types/useGetPhotosType";
import { Dispatch, SetStateAction, useState } from "react";
import { FeedModal } from "../../FeedModal";

type FeedPhotosItemProps = {
  photo: PhotosProps;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  setPhotoId?: Dispatch<SetStateAction<number | undefined>>;
};

export const FeedPhotosItem = ({
  photo,
  setModalIsOpen,
  setPhotoId,
}: FeedPhotosItemProps) => {
  const handleOpenModal = () => {
    if (setPhotoId) {
      setPhotoId(photo.id);
    }
    setModalIsOpen(true);
  };

  return (
    <BoxFeedItem onClick={handleOpenModal}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </BoxFeedItem>
  );
};
