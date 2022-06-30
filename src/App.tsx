import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AuthContextProvider } from "./contexts/AuthContext";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";

export default function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Header />
        <div style={{ margin: "2rem" }}>
          <AppRoutes />
        </div>
        {/* <Footer /> */}
      </AuthContextProvider>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}
