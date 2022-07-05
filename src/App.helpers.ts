import { DATE } from "./App.types";

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function dateToUIFormat(dateString: DATE) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const JSmonth = date.getMonth() + 1;
  const JSday = date.getDate();

  const month = JSmonth < 10 ? "0" + JSmonth : JSmonth;
  const day = JSday < 10 ? "0" + JSday : JSday;

  return `${year}-${month}-${day}`;
}
