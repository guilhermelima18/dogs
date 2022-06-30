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
};

export const FeedPhotos = ({
  setModalIsOpen,
  setPhotoId,
  setInfinite,
  page,
}: FeedPhotosProps) => {
  const { pathname } = useLocation();
  const { user } = useAuthContext();
  const [photos, setPhotos] = useState<PhotosProps[]>([]);
  const [loading, setLoading] = useState(false);

  const getPhotos = useCallback(
    async (page: number, total: number, user: number) => {
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
    const totalPhotos = 3;
    const userId = pathname === "/" ? 0 : user?.id;

    getPhotos(page, totalPhotos, userId!);
  }, [pathname, user, page]);

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : photos.length === 0 ? (
        <BoxEmpty>
          <h1>
            {pathname === "/"
              ? "Não há mais fotos a serem carregadas."
              : "Não há fotos para esse usuário."}
          </h1>
        </BoxEmpty>
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
