import { InputWrapper } from "./style";

interface iInput {
  placeholder?: string;
  onBlur?: (e: any) => void;
}

export default function Input({ placeholder, onBlur }: iInput) {
  return (
    <>
      <InputWrapper placeholder={placeholder ? placeholder : ""} onBlur={onBlur} />
    </>
  );
}
