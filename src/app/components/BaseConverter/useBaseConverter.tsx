import { useState } from "react";
import { convertBase, convertToBase10 } from "./convertBase";

function useBaseConverter() {
  const [result, setResult] = useState<string>();
  const [loading, setLoading] = useState();
  const [numberBase, setNumberBase] = useState<number>();

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

  const getAnswer = (from_base: number, number: number, to_base: number) => {
    setNumberBase(to_base);

    const convertedToBasetenValue = convertToBase10(number, from_base);

    const ans: string = convertBase(convertedToBasetenValue, to_base);
    setResult(ans);

    scrollToBottom();
  };
  return { getAnswer, result, numberBase };
}

export default useBaseConverter;
