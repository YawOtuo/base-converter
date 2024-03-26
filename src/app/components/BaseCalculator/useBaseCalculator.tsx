import { useState } from "react";
import { convertBase, convertToBase10 } from "../BaseConverter/convertBase";
import { calculateResult } from "./calculateResult";
import { validateNumber } from "../BaseConverter/validateNumber";

function useBaseCalculator() {
  const [result, setResult] = useState<string>();
  const [loading, setLoading] = useState();
  const [numberBase, setNumberBase] = useState<number>();
  const [error, setError] = useState("");

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

  const generateResult = (
    number1: string,
    operation: string,
    number2: string,
    base: number
  ) => {
    setNumberBase(base);

    const isValidNumber1 = validateNumber(number1, base);
    const isValidNumber2 = validateNumber(number2, base);

    if (!isValidNumber1 || !isValidNumber2) {
      setError("Invalid number for selected base");
      return;
    } else {
      setError("");
    }

    const convertedToBase10Value1 = convertToBase10(number1, base);

    const convertedToBase10Value2 = convertToBase10(number2, base);

    console.log("converted to base 10 value", convertedToBase10Value1);
    const ans: any = calculateResult(
      convertedToBase10Value1,
      operation,
      convertedToBase10Value2
    );

    const converted_ans: string = convertBase(ans, base);
    setResult(converted_ans);

    scrollToBottom();
  };
  return { generateResult, result, numberBase, error, setError };
}

export default useBaseCalculator;
