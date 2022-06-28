import { PhotosProps } from "../../../../types/useGetPhotosType";

type FeedPhotosItemProps = {
  photo: PhotosProps;
};

export const FeedPhotosItem = ({ photo }: FeedPhotosItemProps) => {
  return (
    <li>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
};
