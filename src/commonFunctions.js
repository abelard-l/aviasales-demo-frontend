import lang from './res/languages/rus.loc';

export function makeDigits(price) {
  return price.toLocaleString();
}

export function translate(str) {
  return lang[str] !== undefined ? lang[str] : str;
}
