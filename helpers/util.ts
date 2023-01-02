import { appConfig } from "../config";

export function joinWithSpace(...arr: string[]) {
  return arr.join(" ");
}

// Create our number formatter.
export const currencyFormatter = new Intl.NumberFormat(appConfig.locale, {
  style: "currency",
  currency: appConfig.currency,
  notation: "compact",
});

export const isNonZeroPositiveNumber = (numStr: string) => /^[1-9]{1}([0-9]+)?$/.test(numStr);

export const isNonZeroPositiveNumberWithPlusSign = (numStr: string) => /^[1-9]{1}([0-9]+)?\+$/.test(numStr);