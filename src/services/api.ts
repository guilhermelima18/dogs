import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: "https://dogsapi.origamid.dev/json",
});
