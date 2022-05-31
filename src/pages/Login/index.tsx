import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

export const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault();
    /* const response = await api.post("/jwt-auth/v1/token", {
      username,
      password,
    }); */
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <Input
          type="text"
          name="username"
          label="Usuário"
          value={username}
          setValue={setUsername}
        />
        <Input
          type="text"
          name="password"
          label="Senha"
          value={password}
          setValue={setPassword}
        />
        <Button type="submit">Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};
