export enum Navigate {
  TODAY = "TODAY",
  NEXT = "NEXT",
  PREVIOUS = "PREVIOUS",
  CREATE = "CREATE"
}

export enum Views {
  DAY = "DAY",
  WEEK = "WEEK",
  MONTH = "MONTH"
}

export interface VEvent {
  title: string;
  start: number;
  end: number;
}

export interface IDayPosition {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  [key: number]: number;
}
