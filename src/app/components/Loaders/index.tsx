import { SyncLoader, HashLoader } from "react-spinners";

type Props = {
  variant: "syncloader" | "hashloader";
  colour?: "yellow1";
  size?: number;
};

const colors: any = {
  yellow1: "#E4A951",
};

export const CustomLoaders = ({ variant, colour = "yellow1", size }: Props) => {
  const loaders: any = {
    syncloader: <SyncLoader color={colors[colour]} size={size} />,
    hashloader: <HashLoader color={colors[colour]} size={size} />,
  };

  return <div>{loaders[variant]}</div>;
};
