import { useParams } from "react-router-dom";
import { Feed } from "../../components/Feed";
import { Layout } from "../../components/Layout";

export default function Profile() {
  const { user } = useParams();

  return (
    <Layout>
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
