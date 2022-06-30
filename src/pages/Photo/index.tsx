import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { PhotoContent } from "../../components/Photo/PhotoContent";
import { useGetPhoto } from "../../hooks/useGetPhoto";
import {} from "../../styles/Photo";

export default function Photo() {
  const { id } = useParams();
  const { getPhoto, photo, loading } = useGetPhoto();

  useEffect(() => {
    if (id) {
      getPhoto(Number(id));
    }
  }, [id]);

  if (photo === undefined) return null;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <section>
            <PhotoContent photo={photo} isSinglePage={true} />
          </section>
        </Layout>
      )}
    </>
  );
}
