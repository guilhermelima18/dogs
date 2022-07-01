import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import loginImg from "../../assets/login.jpg";
import { BoxLogin, SectionForm, Form, BoxCadastro } from "../../styles/Login";

export const Login = () => {
  const { getToken, loading } = useAuthContext();
  const navigate = useNavigate();
  const username = useForm();
  const password = useForm();

  const handleLoginSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const params = {
        username: username.value,
        password: password.value,
      };

      const response = await getToken(params);

      if (response?.status === 200) {
        navigate("/");
      }
    }
  };

  return (
    <BoxLogin backgroundImage={loginImg}>
      <SectionForm className="animeLeft">
        <h1 className="title">Login</h1>
        <Form onSubmit={handleLoginSubmit}>
          <Input type="text" name="username" label="Usuário" {...username} />
          <Input type="password" name="password" label="Senha" {...password} />
          <Button type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </Button>
          <Link to="/login/recuperar-senha">Perdeu a senha?</Link>
        </Form>
        <BoxCadastro>
          <h2>Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no site</p>
          <Link to="/login/cadastro">
            <Button>Cadastro</Button>
          </Link>
        </BoxCadastro>
      </SectionForm>
    </BoxLogin>
  );
};
