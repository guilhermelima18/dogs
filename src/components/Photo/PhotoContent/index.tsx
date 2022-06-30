import { Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import { Image } from "../../Image";
import { PhotoComments } from "../PhotoComments";
import { PhotoDelete } from "../PhotoDelete";
import { GetPhotoProps } from "../../../types/useGetPhotoType";
import {
  BoxPhotoContent,
  BoxPhotoDetails,
  BoxAuthor,
  BoxAttributes,
} from "./styles";

type PhotoContentProps = {
  photo: GetPhotoProps;
  isSinglePage?: boolean;
};

export const PhotoContent = ({
  photo,
  isSinglePage = false,
}: PhotoContentProps) => {
  const { user } = useAuthContext();
  const { photo: photoData, comments } = photo;

  if (photoData === undefined) return null;

  return (
    <BoxPhotoContent isSinglePage={isSinglePage}>
      <div>
        <Image src={photoData.src} alt={photoData.title} />
      </div>
      <BoxPhotoDetails isSinglePage={isSinglePage}>
        <div>
          <BoxAuthor>
            {user && user.username === photoData.author ? (
              <PhotoDelete photoId={photoData.id} />
            ) : (
              <Link to={`/perfil/${photoData.author}`}>
                @{photoData.author}
              </Link>
            )}
            <span>{photoData.acessos}</span>
          </BoxAuthor>
          <h1 className="title">
            <Link to={`/foto/${photoData.id}`}>{photoData.title}</Link>
          </h1>
          <BoxAttributes>
            <li>{photoData.peso} kg</li>
            <li>
              {photoData.idade} {Number(photoData.idade) > 1 ? "anos" : "ano"}
            </li>
          </BoxAttributes>
        </div>
        <PhotoComments photoId={photoData.id} comments={comments} />
      </BoxPhotoDetails>
    </BoxPhotoContent>
  );
};
