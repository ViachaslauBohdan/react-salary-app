import { dateToUIFormat, MONTHS } from "./App.helpers";
import { DATE, DAYS, Table } from "./App.types";

export const calculateTable = (dateString: string): Table => {
  const table = [] as Table;
  let date = new Date(dateString);

  for (let i = 0; i < 12; i++) {
    const monthName = MONTHS[date.getMonth()];
    const salaryDate = getSalaryDate(date);
    const bonusDate = getBonusDate(date);
    table.push({ monthName, salaryDate, bonusDate });

    date = setNextMonthDate(date, 1);
  }
  return table;
};

function getSalaryDate(dateString: DATE) {
  let POSSIBLY_MONTH_LAST_WORKING_DATE = 0;
  let salaryDate = "" as DATE;

  salaryDate = setNextMonthDate(dateString, POSSIBLY_MONTH_LAST_WORKING_DATE);
  const weekDay = salaryDate.getDay();

  if ([DAYS.SATURDAY, DAYS.SUNDAY].includes(weekDay)) {
    const fridayDay =
      weekDay === DAYS.SATURDAY
        ? POSSIBLY_MONTH_LAST_WORKING_DATE - 1
        : POSSIBLY_MONTH_LAST_WORKING_DATE - 2;
    salaryDate = setNextMonthDate(dateString, fridayDay);
  }
  return dateToUIFormat(salaryDate);
}

function getBonusDate(dateString: DATE) {
  let BONUS_DEFAULT_MONTH_DAY = 15;
  let bonusDate = "" as DATE;

  bonusDate = setNextMonthDate(dateString, BONUS_DEFAULT_MONTH_DAY);
  const weekDay = bonusDate.getDay();

  if ([DAYS.SATURDAY, DAYS.SUNDAY].includes(weekDay)) {
    const wednesdayDay =
      weekDay === DAYS.SATURDAY
        ? BONUS_DEFAULT_MONTH_DAY + 4
        : BONUS_DEFAULT_MONTH_DAY + 3;
    bonusDate = setNextMonthDate(dateString, wednesdayDay);
  }

  return dateToUIFormat(bonusDate);
}

function setNextMonthDate(dateString: DATE, monthDay: number) {
  const date = new Date(dateString);

  return new Date(date.getFullYear(), date.getMonth() + 1, monthDay);
}
