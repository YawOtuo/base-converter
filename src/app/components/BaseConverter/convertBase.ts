import { map } from "./map";

export const convertBase = (number: number, base: number) => {
  if (Number.isInteger(number)) {
    return convertBaseInt(number, base);
  } else {
    return convertBaseFloat(number, base);
  }
};

const convertBaseInt = (number: number, base: number) => {
  if (number === 0) {
    return "0";
  }

  const stack: any[] = []; // Stack to store remainders for integer part

  let integerPart = Math.abs(number);

  // Convert the integer part to the specified base
  while (integerPart > 0) {
    let remainder = integerPart % base;
    integerPart = Math.floor(integerPart / base);
    stack.push(
      remainder >= 10
        ? Object.keys(map).find((key) => map[key] === remainder)
        : remainder
    );
  }

  // Construct the integer part of the result string by popping elements from the stack
  let integerResult = "";
  while (stack.length > 0) {
    integerResult += stack.pop();
  }

  return integerResult;
};

const convertBaseFloat = (number: number, base: number) => {
  const integerPart = Math.floor(Math.abs(number));
  const fractionalPart = Math.abs(number) - integerPart;

  const integerResult = convertBaseInt(integerPart, base);
  const fractionalResult = convertFractionalPart(fractionalPart, base);

  return integerResult + "." + fractionalResult;
};

const convertFractionalPart = (fractionalPart: number, base: number) => {
  let fractionalResult = ""; // Variable to store the fractional part of the result

  // Convert the fractional part to the specified base
  const maxPrecision = 10; // Maximum number of digits in the fractional part
  let precision = 0;

  // Queue to store digits of the fractional part
  const queue: any[] = [];

  while (fractionalPart > 0 && precision < maxPrecision) {
    fractionalPart *= base; // Multiply the fractional part by the base
    let digit = Math.floor(fractionalPart); // Get the integer part of the multiplied value
    queue.push(
      digit >= 10 ? Object.keys(map).find((key) => map[key] === digit) : digit
    );
    fractionalPart -= digit; // Subtract the integer part from the multiplied value
    precision++;
  }

  // Construct the fractional part of the result string by dequeuing elements from the queue
  while (queue.length > 0) {
    fractionalResult += queue.shift();
  }

  return fractionalResult;
};
