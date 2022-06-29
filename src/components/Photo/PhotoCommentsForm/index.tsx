import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useCreateComment } from "../../../hooks/useCreateComment";
import { CommentsProps } from "../../../types/useGetPhotoType";
import { Enviar } from "../../Icons";
import { BoxForm } from "./styles";

type PhotoCommentsFormProps = {
  photoId: number;
  setPhotoComments: Dispatch<SetStateAction<CommentsProps[]>>;
};

export const PhotoCommentsForm = ({
  photoId,
  setPhotoComments,
}: PhotoCommentsFormProps) => {
  const { createComment, loading } = useCreateComment();
  const [comment, setComment] = useState("");

  const handleSubmitComment = async (event: FormEvent) => {
    event.preventDefault();

    if (comment.length === 0) {
      return;
    }

    const response = await createComment(photoId, comment);

    if (response?.status === 200) {
      setComment("");
      setPhotoComments((prevState) => [...prevState, response.data]);
    }
  };

  return (
    <BoxForm onSubmit={handleSubmitComment}>
      <textarea
        id="comments"
        name="comments"
        placeholder="Comente..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button disabled={loading}>
        <Enviar />
      </button>
    </BoxForm>
  );
};
