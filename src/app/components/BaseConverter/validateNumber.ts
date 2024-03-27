import { map } from "./map";

export const validateNumber = (number: string, base: number) => {
    const numberString = number.toString();
  
    let dotCount = 0; // Count of decimal points encountered
  
    // Check if each character of the number is valid
    return numberString.split("").every((char, index) => {
      if (char === ".") {
        // Allow at most one decimal point
        if (dotCount === 0) {
          dotCount++;
          return true;
        }
        return false;
      } else if (char === "-" && index === 0) {
        // Skip validation for the first character if it's a minus sign
        return true;
      } else if (!isNaN(parseInt(char, 10))) {
        // If the character is a digit (0-9), check if it's less than the base
        return parseInt(char, 10) < base;
      } else {
        // If the character is not a digit, check if it's a valid hexadecimal digit
        const mapValue = map[char.toUpperCase()];
        return mapValue !== undefined && mapValue < base;
      }
    });
  };
  