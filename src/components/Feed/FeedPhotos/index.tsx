import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../../../contexts/AuthContext";
import { formatDate } from "../../../helpers/formatDate";
import { api } from "../../../services/api";
import { PhotosProps } from "../../../types/useGetPhotosType";
import { Layout } from "../../Layout";
import { Loading } from "../../Loading";
import { FeedPhotosItem } from "./FeedPhotosItem";
import { BoxFeed, BoxEmpty } from "./styles";

type FeedPhotosProps = {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  setPhotoId?: Dispatch<SetStateAction<number | undefined>>;
  setInfinite: Dispatch<SetStateAction<boolean>>;
  page: number;
  user?: string;
};

export const FeedPhotos = ({
  setModalIsOpen,
  setPhotoId,
  setInfinite,
  page,
  user: username,
}: FeedPhotosProps) => {
  const { pathname } = useLocation();
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<PhotosProps[]>([]);

  const getPhotos = useCallback(
    async (page: number, total: number, user: string | number) => {
      try {
        setLoading(true);

        const response = await api.get(
          `/api/photo/?_page=${page}&_total=${total}&_user=${user}`
        );

        if (response.data.length < 3) {
          setInfinite(false);
        }

        if (response) {
          if (response.status === 200) {
            const dataFormatted = response.data.map((photo: PhotosProps) => ({
              ...photo,
              date: formatDate(photo.date),
            }));

            setPhotos(dataFormatted);
          }
        }

        return response;
      } catch (error: any) {
        const { data } = error.response;
        toast.error(data.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    const totalPhotos = 6;
    const allPhotosId = 0;

    const userId =
      pathname === "/"
        ? allPhotosId
        : pathname === `/perfil/${username}`
        ? username
        : user?.id;

    getPhotos(page, totalPhotos, userId!);
  }, [pathname, user, page]);

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </Layout>
  );
};
