import { useState } from "react";
import { convertBase } from "./convertBase";

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

  const getAnswer = (number: number, base: number) => {
    setNumberBase(base);
    const ans: string = convertBase(number, base);
    setResult(ans);

    scrollToBottom();
  };
  return { getAnswer, result, numberBase };
}

export default useBaseConverter;
