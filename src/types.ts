export enum Navigate {
  TODAY = 'TODAY',
  NEXT = 'NEXT',
  PREVIOUS = 'PREVIOUS'
}

export enum Views {
  DAY = 'DAY',
  WEEK = 'WEEK',
  MONTH = 'MONTH'
}

export interface VEvent {
  title: string;
  start: number;
  end: number;
}
