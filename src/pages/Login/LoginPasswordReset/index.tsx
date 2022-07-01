import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "../../../hooks/useForm";
import { useResetPassword } from "../../../hooks/useResetPassword";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import loginImg from "../../../assets/login.jpg";
import { BoxLogin, SectionForm, Form } from "../../../styles/Login";
import { Head } from "../../../components/Head";

export default function LoginPasswordReset() {
  const navigate = useNavigate();
  const { resetPassword, loading } = useResetPassword();
  const password = useForm("password");
  const [userKey, setUserKey] = useState({
    key: "",
    login: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");

    if (key && login) {
      setUserKey({
        key: key,
        login: login,
      });
    }
  }, []);

  const handleFormResetSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (password.validate() && userKey.key && userKey.login) {
      const params = {
        key: userKey.key,
        login: userKey.login,
        password: password.value,
      };

      const response = await resetPassword(params);

      if (response?.status === 200) {
        toast.success(response.data);

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    }
  };

  return (
    <BoxLogin backgroundImage={loginImg}>
      <Head
        title="Login | Resetar senha"
        description="Página resetar senha do site Dogs."
      />
      <SectionForm className="animeLeft">
        <Form onSubmit={handleFormResetSubmit}>
          <Input
            label="Nova senha"
            type="password"
            name="password"
            {...password}
          />
          <Button disabled={loading}>
            {loading ? "Resetando..." : "Resetar"}
          </Button>
        </Form>
      </SectionForm>
    </BoxLogin>
  );
}
