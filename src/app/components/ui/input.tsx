import React from "react";
import { Input } from "@nextui-org/react";

type Props = {
  placeholder: string;
  name: string;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  label: string;
  type?: any;
  error: string | null;
  className?: string;
};

function TextInput({
  placeholder,
  name,
  value,
  onChange,
  disabled,
  autoFocus,
  type = "text",
  error,
  label,
  className,
}: Props) {
  return (
    <div className={`flex flex-col  gap-2 capitalize ${className}`}>
      {error && <p className="text-sm text-gray-600">{error}</p>}
      <p>{label}</p>
      <Input
        classNames={{
          input: [""],
        }}
        type={type}
        placeholder={placeholder}
        name={name}
        variant="bordered"
        value={value}
        onChange={onChange}
        disabled={disabled}
        autoFocus={autoFocus}
      />
    </div>
  );
}

export default TextInput;
