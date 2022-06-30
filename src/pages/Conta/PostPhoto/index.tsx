import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreatePhoto } from "../../../hooks/useCreatePhoto";
import { useForm } from "../../../hooks/useForm";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Layout } from "../../../components/Layout";
import { UserHeader } from "../../../components/User/UserHeader";
import { BoxRegisterPhoto, BoxImagePreview } from "../../../styles/PostarFoto";

type ImgProps = {
  preview: string;
  raw: File;
};

export default function PostPhoto() {
  const navigate = useNavigate();
  const { registerPhoto } = useCreatePhoto();
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState<ImgProps>();

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (peso.validate() && idade.validate()) {
      const params = {
        img: img?.raw,
        nome: nome.value,
        peso: peso.value,
        idade: idade.value,
      };

      const response = await registerPhoto(params);

      if (response?.status === 200) {
        setTimeout(() => {
          navigate("/minha-conta");
        }, 1500);
      }
    }
  };

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setImg({
      preview: URL.createObjectURL(event.target.files![0]),
      raw: event.target.files![0],
    });
  }

  return (
    <Layout>
      <UserHeader />
      <BoxRegisterPhoto className="animeLeft">
        <form onSubmit={handleFormSubmit}>
          <Input label="Nome" type="text" name="nome" {...nome} />
          <Input label="Peso" type="text" name="peso" {...peso} />
          <Input label="Idade" type="text" name="idade" {...idade} />
          <input type="file" name="img" id="img" onChange={handleChange} />
          <Button type="submit">Enviar</Button>
        </form>
        <div>
          {img?.preview && <BoxImagePreview imgPreview={img.preview} />}
        </div>
      </BoxRegisterPhoto>
    </Layout>
  );
}
