import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}
