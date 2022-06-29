import { Dispatch, SetStateAction, useEffect } from "react";
import { useGetPhoto } from "../../../hooks/useGetPhoto";
import { PhotoContent } from "../../Photo/PhotoContent";
import { FeedModalBox } from "./styles";

type FeedModalProps = {
  photoId?: number;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const FeedModal = ({ photoId, setModalIsOpen }: FeedModalProps) => {
  const { getPhoto, photo } = useGetPhoto();

  useEffect(() => {
    if (photoId) {
      getPhoto(photoId);
    }
  }, [photoId]);

  const handleOutside = (event: any) => {
    if (event.target === event.currentTarget) {
      setModalIsOpen(false);
    }
  };

  return (
    <FeedModalBox onClick={handleOutside}>
      {photo && <PhotoContent photo={photo} />}
    </FeedModalBox>
  );
};
