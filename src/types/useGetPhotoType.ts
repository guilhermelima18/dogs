import { PhotosProps } from "./useGetPhotosType";

export type CommentsProps = {
  comment_ID: string;
  comment_author: string;
  comment_content: string;
  comment_date: string;
};

export type GetPhotoProps = {
  comments: CommentsProps[];
  photo: PhotosProps;
};
