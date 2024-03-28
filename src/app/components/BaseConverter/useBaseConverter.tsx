import { useState } from "react";
import { convertBase } from "./convertBase";
import { validateNumber } from "./validateNumber";
import { convertToBase10 } from "./convertToBase10";
import useStoreInLC from "../useStoreInLC";

function useBaseConverter() {
  const [result, setResult] = useState<string>();
  const [loading, setLoading] = useState();
  const [numberBase, setNumberBase] = useState<number>();
  const [error, setError] = useState("");
  const { prev, setPrev } = useStoreInLC();

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };
  const getAnswer = (from_base: number, number: string, to_base: number) => {
    // Define the mapping for alphanumeric characters from 10 to 26

    // Check if each digit of the number is less than the base
    const isValidNumber = validateNumber(number, from_base);

    if (!isValidNumber) {
      setError("Invalid number for selected base");
      return;
    } else {
      setError("");
    }

    setNumberBase(to_base);
    let neg = false;

    if (number.charAt(0) === "-") {
      neg = true;
      number = number.slice(1);
    }

    const convertedToBaseTenValue = convertToBase10(number, from_base);

    let ans: string = convertBase(convertedToBaseTenValue, to_base);

    if (neg) {
      ans = "-" + ans;
    }
    setResult(ans);

    console.log("conveertedBase10 value, ", convertedToBaseTenValue);

    setPrev(() => {
      return [
        ...prev,
        {
          number: number,
          from_base: from_base,
          answer: ans,
          to_base: to_base,
        }
      ];
    });
    

    console.log("final result", result);
    scrollToBottom();
  };

  return { getAnswer, result, numberBase, error, setError };
}

export default useBaseConverter;
