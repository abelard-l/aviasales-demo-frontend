import { lang } from "./res/languages/rus.loc.js";

export function makeDigits(price) {
  return price.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "$1 ");
}

export function translate(str) {
  return lang[str] !== undefined ? lang[str] : str;
}
