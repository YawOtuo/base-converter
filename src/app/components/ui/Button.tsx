import { Button } from "@nextui-org/react";

type Props = {
  label: string;
  onClick?: any;
  variant: "convert";
};

function CustomButton({ label, onClick, variant }: Props) {
  const options: any = {
    "convert": "bg-yellow1 py-2 !rounded-0",
  };
  return (
    <Button className={`${options[variant]} font-semibold w-full`} onPress={onClick}>
      {label}
    </Button>
  );
}

export default CustomButton;
