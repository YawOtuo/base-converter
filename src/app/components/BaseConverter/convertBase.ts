export const convertBase = (number : number, base : number) => {
  // Mapping remainders greater than 9 to letters
  const map : any = {
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
