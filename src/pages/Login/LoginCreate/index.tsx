import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useCreateUser } from "../../../hooks/useCreateUser";
import { useForm } from "../../../hooks/useForm";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import loginImg from "../../../assets/login.jpg";
import { SectionForm, Form, BoxLogin } from "../../../styles/Login";
import { Head } from "../../../components/Head";

export default function LoginCreate() {
  const navigate = useNavigate();
  const { getToken } = useAuthContext();
  const { createUser, loading } = useCreateUser();
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  const handleFormCreateSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (username.validate() && email.validate() && password.validate()) {
      const params = {
        username: username.value,
        email: email.value,
        password: password.value,
      };

      const response = await createUser(params);

      if (response?.status === 200) {
        toast.success("Cadastro efetuado com sucesso!");
        await getToken({ username: username.value, password: password.value });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    }
  };

  return (
    <BoxLogin backgroundImage={loginImg}>
      <Head
        title="Login | Criar usuário"
        description="Página criar usuário do site Dogs."
      />
      <SectionForm className="animeLeft">
        <h1 className="title">Cadastre-se</h1>
        <Form onSubmit={handleFormCreateSubmit}>
          <Input label="Usuário" type="text" name="username" {...username} />
          <Input label="E-mail" type="email" name="email" {...email} />
          <Input label="Senha" type="password" name="password" {...password} />
          <Button disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </Form>
      </SectionForm>
    </BoxLogin>
  );
}
