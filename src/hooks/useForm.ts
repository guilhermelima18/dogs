import { ChangeEvent, useState } from "react";
import { validationForm } from "../validations/useFormValidation";
import { ValidationForm } from "../types/useFormType";

export function useForm(inputType?: string) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validate = (value: string) => {
    if (inputType?.length === 0) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (
      validationForm[inputType as keyof ValidationForm] &&
      !validationForm[inputType as keyof ValidationForm].regex.test(value)
    ) {
      setError(validationForm[inputType as keyof ValidationForm].message);
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (error) {
      validate(event.target.value);
    }
    setValue(event.target.value);
  };

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}
