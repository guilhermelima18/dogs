import { FormEvent } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export const Login = () => {
  const { getToken, loading, token, user } = useAuthContext();
  const username = useForm();
  const password = useForm();

  const handleLoginSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const params = {
        username: username.value,
        password: password.value,
      };

      await getToken(params);
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <Input type="text" name="username" label="Usuário" {...username} />
        <Input type="password" name="password" label="Senha" {...password} />
        <Button type="submit" disabled={loading}>
          Entrar
        </Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};
