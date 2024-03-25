import { useState } from "react";
import { convertBase } from "../BaseConverter/convertBase";
import { calculateResult } from "./calculateResult";

function useBaseCalculator() {
  const [result, setResult] = useState<string>();
  const [loading, setLoading] = useState();
  const [numberBase, setNumberBase] = useState<number>();

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

  const generateResult = (
    number1: number,
    operation: string,
    number2: number,
    base: number
  ) => {
    setNumberBase(base);
    const ans: number = calculateResult(number1, operation, number2);

    const converted_ans: string = convertBase(ans, base);
    setResult(converted_ans);

    scrollToBottom();
  };
  return { generateResult, result, numberBase };
}

export default useBaseCalculator;
