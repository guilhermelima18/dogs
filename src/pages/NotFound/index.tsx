import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return (
    <Layout>
      <div
        style={{
          width: "100%",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="title">Erro: 404</h1>
        <p>Página não encontrada.</p>
      </div>
    </Layout>
  );
}
