import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AuthContextProvider } from "./contexts/AuthContext";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AuthContextProvider>
          <Header />
          <main className="appBody">
            <AppRoutes />
          </main>
          <Footer />
        </AuthContextProvider>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </div>
  );
}
