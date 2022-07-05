export enum DAYS {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

export type DATE = Date | string;

interface Row {
  monthName: string;
  salaryDate: string;
  bonusDate: string;
}

export type Table = Row[];
