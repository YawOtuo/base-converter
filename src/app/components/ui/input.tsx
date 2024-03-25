import React from "react";
import { Input } from "@nextui-org/react";

type Props = {
  placeholder: string;
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  label: string;
  type?: any
};

function TextInput({
  placeholder,
  name,
  value,
  onChange,
  disabled,
  autoFocus,
  type="text",
  label,
}: Props) {
  return (
    <div className="flex flex-col  gap-2 capitalize">
      <p>{label}</p>
      <Input
        classNames={{
          input: [""],
        }}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        autoFocus={autoFocus}
      />
    </div>
  );
}

export default TextInput;
