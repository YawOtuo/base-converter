import { useState } from "react";
import { convertBase } from "../BaseConverter/convertBase";
import { calculateResult } from "./calculateResult";
import { validateNumber } from "../BaseConverter/validateNumber";
import { convertToBase10 } from "../BaseConverter/convertToBase10";
import useStoreInLC from "../useStoreInLC";

function useBaseCalculator() {
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
      setResult("");
      return;
    } else {
      setError("");
    }

    let neg1 = false;
    let neg2 = false;

    if (number1.charAt(0) === "-") {
      neg1 = true;
      number1 = number1.slice(1);
    }

    if (number2.charAt(0) === "-") {
      neg2 = true;
      number2 = number2.slice(1);
    }
    const convertedToBase10Value1 = convertToBase10(number1, base);

    const convertedToBase10Value2 = convertToBase10(number2, base);

    // console.log("converted to base 10 value", convertedToBase10Value1);
    // console.log("second number converted to base 10 value", convertedToBase10Value2);

    if (neg1) {
      number1 = "-" + number1;
    }

    if (neg2) {
      number2 = "-" + number2;
    }

    let ans: any = calculateResult(
      convertedToBase10Value1,
      operation,
      convertedToBase10Value2
    );

    console.log("calculated result", ans);
    let negans = false;

    if (ans < 0) {
      negans = true;
      ans = +ans;
    }

    let converted_ans: any = convertBase(ans, base);
    console.log("converted ans", converted_ans);

    if (negans) {
      converted_ans = `-${converted_ans.toString()}`;
    }

    setResult(converted_ans);


    scrollToBottom();
  };
  return { generateResult, result, numberBase, error, setError };
}

export default useBaseCalculator;
