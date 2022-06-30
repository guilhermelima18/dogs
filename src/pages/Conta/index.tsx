import { Feed } from "../../components/Feed";
import { Layout } from "../../components/Layout";
import { UserHeader } from "../../components/User/UserHeader";

export default function Conta() {
  return (
    <Layout>
      <UserHeader />
      <Feed />
    </Layout>
  );
}
