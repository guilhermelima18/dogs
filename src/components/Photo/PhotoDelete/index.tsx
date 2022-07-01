import { toast } from "react-toastify";
import { useDeletePhoto } from "../../../hooks/useDeletePhoto";
import { ButtonDelete } from "./styles";

type PhotoDeleteProps = {
  photoId: number;
};

export const PhotoDelete = ({ photoId }: PhotoDeleteProps) => {
  const { photoDelete, loading } = useDeletePhoto();

  const handleDelete = async () => {
    if (photoId) {
      const isConfirm = window.confirm(
        "Tem certeza que deseja deletar essa foto?"
      );

      if (isConfirm) {
        const response = await photoDelete(photoId);

        if (response?.status === 200) {
          toast.info(response.data);

          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        }
      }
    }
  };

  return (
    <>
      <ButtonDelete onClick={handleDelete} disabled={loading}>
        {loading ? "Deletando..." : "Deletar"}
      </ButtonDelete>
    </>
  );
};
