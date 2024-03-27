import { map } from "./map";

export const convertToBase10 = (number: string, base: number) => {
  if (number === undefined || base === undefined || isNaN(base)) {
    return NaN;
  }

  const dotIndex = number.indexOf(".");
  let integerPart = number;
  let fractionalPart = "";

  // Split the number into integer and fractional parts if there is a decimal point
  if (dotIndex !== -1) {
    integerPart = number.substring(0, dotIndex);
    fractionalPart = number.substring(dotIndex + 1);
  }

  // Convert the integer part to base 10
  let integerResult = 0;
  for (let i = 0; i < integerPart.length; i++) {
    let digit: any = integerPart[i];
    if (digit >= "0" && digit <= "9") {
      digit = Number(digit);
    } else {
      digit = map[digit.toUpperCase()];
    }
    if (digit >= base) {
      return NaN; // Invalid digit for the specified base
    }
    integerResult += digit * Math.pow(base, integerPart.length - i - 1);
  }

  // Convert the fractional part to base 10
  let fractionalResult = 0;
  for (let i = 0; i < fractionalPart.length; i++) {
    let digit: any = fractionalPart[i];
    if (digit >= "0" && digit <= "9") {
      digit = Number(digit);
    } else {
      digit = map[digit.toUpperCase()];
    }
    if (digit >= base) {
      return NaN; // Invalid digit for the specified base
    }
    fractionalResult += digit * Math.pow(base, -(i + 1));
  }

  return integerResult + fractionalResult;
};
