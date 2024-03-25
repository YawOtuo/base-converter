export const convertToBase10 = (number: number, base: number) => {
  // Check if the number or base is not provided or invalid
  if (
    number === undefined ||
    base === undefined ||
    isNaN(number) ||
    isNaN(base)
  ) {
    return NaN;
  }

  // Convert the number to string and split it into individual digits
  const digits = `${number}`.split("");

  // Initialize the result to store the decimal equivalent
  let result = 0;

  // Iterate through each digit of the number
  for (let i = 0; i < digits.length; i++) {
    // Convert each digit to its decimal value
    let digitValue = parseInt(digits[i], base);

    // If the digit value is NaN, return NaN
    if (isNaN(digitValue)) {
      return NaN;
    }

    // Multiply the digit value by the base raised to the power of its position
    result += digitValue * Math.pow(base, digits.length - i - 1);
  }

  // Return the final decimal result
  return result;
};

export const convertBase = (number: number, base: number) => {
  // Mapping remainders greater than 9 to letters

  if (number == 0) {
    console.log("number is 0");
    return "0";
  }
  const map: any = {
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

  // Stack to store remainders
  const stack = [];

  // Base conversion
  while (number > 0) {
    let remainder: number = number % base;
    // Map remainders greater than 9 to letters
    if (remainder >= 10) {
      stack.push(map[remainder]);
    } else {
      stack.push(remainder);
    }
    number = Math.floor(number / base);
  }

  // Construct the result string by popping elements from the stack
  let result = "";
  while (stack.length > 0) {
    result += stack.pop();
  }
  console.log(result);
  return result;
};
