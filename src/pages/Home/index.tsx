import { Feed } from "../../components/Feed";
import { Head } from "../../components/Head";

export default function Home() {
  return (
    <section>
      <Head
        title="Página inicial"
        description="Página inicial do site Dogs, com o feed de fotos."
      />
      <Feed />
    </section>
  );
}
