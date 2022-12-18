import Stack from "./Stack";

export const baseConverter = (number: number, base: number): string => {
  const stack = new Stack<number>();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let num = number;
  let rem = 0;
  let baseString = "";

  if (!(base >= 2 && base <= 36)) {
    return "";
  }

  while (num > 0) {
    rem = Math.floor(num % base);
    stack.push(rem);
    number = Math.floor(number / base);
  }

  while (!stack.isEmpty()) {
    baseString += digits[stack.pop()];
  }

  return baseString;
};
