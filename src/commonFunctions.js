//The function makes spaces in prices between each 3 numbers
export function makeDigits(str) {
  str += "";
  return str.replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "$1 ");
}
