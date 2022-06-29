import { Link } from "react-router-dom";
import { GetPhotoProps } from "../../../types/useGetPhotoType";
import { PhotoComments } from "../PhotoComments";
import {
  BoxPhotoContent,
  BoxPhotoDetails,
  BoxAuthor,
  BoxAttributes,
} from "./styles";

type PhotoContentProps = {
  photo: GetPhotoProps;
};

export const PhotoContent = ({ photo }: PhotoContentProps) => {
  const { photo: photoData, comments } = photo;

  if (photoData === undefined) return null;

  return (
    <BoxPhotoContent>
      <div>
        <img src={photoData.src} alt={photoData.title} />
      </div>
      <BoxPhotoDetails>
        <div>
          <BoxAuthor>
            <Link to={`/perfil/${photoData.author}`}>@{photoData.author}</Link>
            <span>{photoData.acessos}</span>
          </BoxAuthor>
          <h1 className="title">
            <Link to={`/foto/${photoData.id}`}>{photoData.title}</Link>
          </h1>
          <BoxAttributes>
            <li>{photoData.peso} kg</li>
            <li>{Number(photoData.idade) > 1 ? "anos" : "ano"}</li>
          </BoxAttributes>
        </div>
      </BoxPhotoDetails>
      <PhotoComments />
    </BoxPhotoContent>
  );
};
