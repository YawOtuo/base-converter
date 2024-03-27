import { Button } from "@nextui-org/react";

type Props = {
  label: string;
  onClick?: any;
  variant: "convert";
  type?: any;
};

function CustomButton({ label, onClick, variant, type = "button" }: Props) {
  const options: any = {
    convert: "bg-yellow1 py-2 !rounded-0 text-white",
  };
  return (
    <Button
      className={`${options[variant]} font-semibold w-full `}
      onPress={onClick}
      type={type}>
      {label}
    </Button>
  );
}

export default CustomButton;
