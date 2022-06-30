import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "https://dogsapi.origamid.dev/json",
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<any>) => {
    if (error.response && error.response.status === 403) {
      if (error.response.data.message === "Expired token") {
        toast.warning("Seu token expirou, estamos te redirecionando...");
        window.localStorage.removeItem("@dogs.token");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2500);
      }
    }
  }
);
