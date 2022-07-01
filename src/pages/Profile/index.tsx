import { useParams } from "react-router-dom";
import { Feed } from "../../components/Feed";
import { Head } from "../../components/Head";
import { Layout } from "../../components/Layout";

export default function Profile() {
  const { user } = useParams();

  return (
    <Layout>
      <Head
        title={`Perfil | ${user}`}
        description="Página de perfil do site Dogs."
      />
      <section>
        <h1
          className="title"
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          {user}
        </h1>
        <Feed user={user} />
      </section>
    </Layout>
  );
}
