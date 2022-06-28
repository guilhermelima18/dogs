import { ValidationForm } from "../types/useFormType";

export const validationForm: ValidationForm = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um e-mail válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A senha deve conter 1 caracter maíusculo, 1 minúsculo e 1 dígito. Com no mínimo 8 caractéres.",
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize apenas números.",
  },
};
