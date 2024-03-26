import { useState } from "react";
import { convertBase, convertToBase10 } from "./convertBase";
import { validateNumber } from "./validateNumber";

function useBaseConverter() {
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
  const getAnswer = (from_base: number, number: string, to_base: number) => {
    // Define the mapping for alphanumeric characters from 10 to 26


    // Check if each digit of the number is less than the base
    const isValidNumber = validateNumber(number, from_base)

    if (!isValidNumber) {
      setError("Invalid number for selected base");
      return;
    } else {
      setError("");
    }

    setNumberBase(to_base);

    const convertedToBaseTenValue = convertToBase10(number, from_base);

    const ans: string = convertBase(convertedToBaseTenValue, to_base);
    setResult(ans);
    console.log(convertedToBaseTenValue);
    scrollToBottom();
  };

  return { getAnswer, result, numberBase, error, setError };
}

export default useBaseConverter;
