import { lazy, Suspense, useEffect } from "react";
import { useGetStatistics } from "../../../hooks/useGetStatistics";
import { Head } from "../../../components/Head";
import { Layout } from "../../../components/Layout";
import { Loading } from "../../../components/Loading";
import { UserHeader } from "../../../components/User/UserHeader";

const UserStatisticsGraphics = lazy(
  () => import("../../../components/User/UserStatisticsGraphics")
);

export default function Statistics() {
  const { getStatistics, statistics, loading } = useGetStatistics();

  useEffect(() => {
    getStatistics();
  }, []);

  return (
    <Layout>
      <Head
        title="Minha conta | Estatísticas"
        description="Página de estatísticas do site Dogs."
      />
      <UserHeader />
      {loading ? (
        <Loading />
      ) : (
        <Suspense>
          <UserStatisticsGraphics stats={statistics} />
        </Suspense>
      )}
    </Layout>
  );
}
