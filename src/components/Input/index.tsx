import {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
} from "react";
import { InputContainer, LabelBox, InputBox } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  label: string;
  value: string | number;
  setValue: Dispatch<SetStateAction<string>>;
}

export const Input = ({
  type,
  name,
  label,
  value,
  setValue,
  ...rest
}: InputProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <InputContainer>
      <LabelBox htmlFor={name}>{label}</LabelBox>
      <InputBox
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleInputChange}
        {...rest}
      />
      <p>Error</p>
    </InputContainer>
  );
};
