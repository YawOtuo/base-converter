export const map: any = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
  16: "G",
  17: "H",
  18: "I",
  19: "J",
  20: "K",
  21: "L",
  22: "M",
  23: "N",
  24: "O",
  25: "P",
  26: "Q", // Extend as needed
};
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
    let digit  : any = integerPart[i];
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
    let digit : any = fractionalPart[i];
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

  // Combine the integer and fractional parts
  return integerResult + fractionalResult;
};

export const convertBase = (number: number, base: number) => {
  if (number === 0) {
    return "0";
  }

  let integerPart = Math.floor(Math.abs(number));
  let fractionalPart = Math.abs(number) - integerPart;

  let integerResult = "";
  let fractionalResult = "";

  // Convert the integer part to the specified base
  while (integerPart > 0) {
    let remainder = integerPart % base;
    integerPart = Math.floor(integerPart / base);
    if (remainder >= 10) {
      integerResult = map[remainder] + integerResult;
    } else {
      integerResult = remainder + integerResult;
    }
  }

  // Convert the fractional part to the specified base
  const maxPrecision = 10; // Maximum number of digits in the fractional part
  let precision = 0;
  while (fractionalPart > 0 && precision < maxPrecision) {
    fractionalPart *= base;
    let digit = Math.floor(fractionalPart);
    fractionalResult += digit >= 10 ? map[digit] : digit;
    fractionalPart -= digit;
    precision++;
  }

  return fractionalResult === ""
    ? integerResult
    : integerResult + "." + fractionalResult;
};
