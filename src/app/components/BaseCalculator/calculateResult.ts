export const calculateResult = (
  number1: number,
  operation: string,
  number2: number
) => {
  if (operation === "+") {
    return (Number(number1) + Number(number2));
  }

  if (operation === "-") {
    return (Number(number1) - Number(number2))
  }

  if (operation === "*") {
    return (Number(number1) * Number(number2))
  }

  if (operation === "/") {
    return (Number(number1) / Number(number2))
  }
};
