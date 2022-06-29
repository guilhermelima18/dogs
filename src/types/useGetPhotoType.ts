import { PhotosProps } from "./useGetPhotosType";

export type GetPhotoProps = {
  comments: {
    comment_ID: string;
    comment_author: string;
    comment_content: string;
    comment_date: string;
  }[];
  photo: PhotosProps;
};
