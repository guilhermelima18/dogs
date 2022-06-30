import { useEffect, useRef, useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import { CommentsProps } from "../../../types/useGetPhotoType";
import { PhotoCommentsForm } from "../PhotoCommentsForm";
import { BoxPhotoComments } from "./styles";

type PhotoCommentsProps = {
  photoId: number;
  comments: CommentsProps[];
};

export const PhotoComments = ({ photoId, comments }: PhotoCommentsProps) => {
  const { token } = useAuthContext();
  const [photoComments, setPhotoComments] = useState<CommentsProps[]>(
    () => comments
  );
  const commentsSection = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [photoComments]);

  return (
    <div>
      <BoxPhotoComments ref={commentsSection}>
        {photoComments &&
          photoComments.map((comment) => (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </li>
          ))}
      </BoxPhotoComments>
      {token.token && (
        <PhotoCommentsForm
          photoId={photoId}
          setPhotoComments={setPhotoComments}
        />
      )}
    </div>
  );
};
