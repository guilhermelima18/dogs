import { Feed } from "../../components/Feed";
import { Head } from "../../components/Head";
import { Layout } from "../../components/Layout";
import { UserHeader } from "../../components/User/UserHeader";

export default function Account() {
  return (
    <Layout>
      <Head
        title="Minha conta"
        description="Página minha conta do site Dogs."
      />
      <UserHeader />
      <Feed />
    </Layout>
  );
}
