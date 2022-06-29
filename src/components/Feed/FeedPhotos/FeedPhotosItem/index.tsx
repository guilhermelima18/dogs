import { Dispatch, SetStateAction } from "react";
import { Image } from "../../../Image";
import { PhotosProps } from "../../../../types/useGetPhotosType";
import { BoxFeedItem } from "./styles";

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
      <Image src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </BoxFeedItem>
  );
};
