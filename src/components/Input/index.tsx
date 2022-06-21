import { ChangeEvent, InputHTMLAttributes } from "react";
import { InputContainer, LabelBox, InputBox, Error } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  label: string;
  value: string | number;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

export const Input = ({
  type,
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  ...rest
}: InputProps) => {
  return (
    <InputContainer>
      <LabelBox htmlFor={name}>{label}</LabelBox>
      <InputBox
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
      {error && <Error>{error}</Error>}
    </InputContainer>
  );
};
