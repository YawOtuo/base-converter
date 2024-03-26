const map: any = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    G: 16,
    H: 17,
    I: 18,
    J: 19,
    K: 20,
    L: 21,
    M: 22,
    N: 23,

    O: 24,
    P: 25,
    Q: 26,
  };

  export const validateNumber = (number: string, base: number) => {
    const numberString = number.toString();

    let dotCount = 0; // Count of decimal points encountered

    // Check if each character of the number is valid
    return numberString.split("").every((char) => {
        if (char === ".") {
            // Allow at most one decimal point
            if (dotCount === 0) {
                dotCount++;
                return true;
            }
            return false;
        } else if (!isNaN(parseInt(char, 10))) {
            // If the character is a digit (0-9), check if it's less than the base
            return parseInt(char, 10) < base;
        } else {
            // If the character is not a digit, check if it's a valid hexadecimal digit
            return (
                (char.toUpperCase() >= "A" && char.toUpperCase() <= "F") ||
                (char.toUpperCase() >= "0" && char.toUpperCase() <= "9")
            );
        }
    });
};
