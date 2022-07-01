import { FormEvent, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { useRecoverPassword } from "../../../hooks/useRecoverPassword";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import loginImg from "../../../assets/login.jpg";
import { BoxLogin, SectionForm, Form } from "../../../styles/Login";

export default function LoginPasswordLost() {
  const { recoverPassword, loading } = useRecoverPassword();
  const email = useForm();
  const [message, setMessage] = useState<string>("");

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (email.validate()) {
      const params = {
        login: email.value,
        url: window.location.href.replace("recuperar-senha", "resetar"),
      };

      const response = await recoverPassword(params);

      if (response?.status === 200) {
        setMessage(response.data);
      }
    }
  };

  return (
    <BoxLogin backgroundImage={loginImg}>
      <SectionForm className="animeLeft">
        <h1 className="title">Perdeu a senha?</h1>
        {message ? (
          <p style={{ color: "#4c1" }}>{message}</p>
        ) : (
          <Form onSubmit={handleFormSubmit}>
            <Input
              type="text"
              name="email"
              label="E-mail / Usuário"
              {...email}
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar"}
            </Button>
          </Form>
        )}
      </SectionForm>
    </BoxLogin>
  );
}
