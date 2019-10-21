export const isOffsetDay = (date: Date, selectedDate: Date) =>
  date.getMonth() != selectedDate.getMonth();
export const isSelectedDay = (date: Date, selectedDate: Date) =>
  date.getMonth() === selectedDate.getMonth() &&
  date.getDate() === selectedDate.getDate();
export const isToday = (date: Date) => {
  const today = new Date();
  return (
    date.getMonth() === today.getMonth() && date.getDate() === today.getDate()
  );
};

export const getMonthArray = (date: Date) => {
  const monthArray: Date[] = [];
  const month = date.getMonth();
  const year = date.getFullYear();
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);

  //@TODO !!!!!
  if (startDate.getDay() != 1) {
    startDate.setDate(startDate.getDay() - 8);
  }
  if (endDate.getDay() != 0) {
    endDate.setDate(endDate.getDate() + (7 - endDate.getDay()));
  }
  endDate.setDate(endDate.getDate() + 7);
  //@TODO !!!!!

  while (startDate <= endDate) {
    monthArray.push(new Date(startDate));
    startDate.setDate(startDate.getDate() + 1);
  }
  return monthArray;
};

export const getMonthArrayWithOffsetAndEvents = (
  date: Date,
  selectedDay: any,
  events: any
) => {
  const monthArray = [];
  const month = date.getMonth();
  const year = date.getFullYear();
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);

  //@TODO !!!!!
  if (startDate.getDay() != 1) {
    startDate.setDate(startDate.getDay() - 8);
  }
  if (endDate.getDay() != 0) {
    endDate.setDate(endDate.getDate() + (7 - endDate.getDay()));
  }
  endDate.setDate(endDate.getDate() + 7);
  //@TODO !!!!!

  for (
    let date = startDate;
    date < endDate;
    date.setDate(startDate.getDate() + 1)
  ) {
    const day = {
      date: new Date(startDate),
      offset: false,
      selected: false
    };

    if (date.getMonth() != selectedDay.getMonth()) day.offset = true;
    if (
      date.getMonth() === selectedDay.getMonth() &&
      date.getDate() === selectedDay.getDate()
    )
      day.selected = true;

    monthArray.push(day);
  }

  return monthArray;
};

export const getToday = (): Date => new Date();

export const getNextDay = (date: Date): Date =>
  new Date(date.setDate(date.getDate() + 1));

export const getPreviousDay = (date: Date): Date =>
  new Date(date.setDate(date.getDate() - 1));

function getDateTitle(date: Date) {
  const options = { year: "numeric", month: "long" };
  return date.toLocaleDateString("en-EN", options);
}

function getMondayDate(date: Date) {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff)).getDate();
}

function formatDate(date: number) {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join("-");
}

export const getCurrentWeekDates = () => {
  let curr = new Date();
  let week = [];

  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i;
    let day = new Date(curr.setDate(first));
    week.push(day);
  }
  return week;
};

export const getCurrentWeekDatesWithEvents = () => {
  const weekEvents: Array<Object> = [];
  const weekDates = getCurrentWeekDates();
  const items = JSON.parse(localStorage.getItem("events") || "[]");
  items.filter((event: any) => {
    const eventDateString = new Date(event.startDate).toDateString();
    for (var i = 0; i < weekDates.length; i++) {
      const currentWeekString = weekDates[i].toDateString();
      if (eventDateString === currentWeekString) {
        weekEvents.push(event);
      }
    }
  });
  return weekEvents;
};

export const getCurrentDayWithEvents = (date: Date) => {
  const items = JSON.parse(localStorage.getItem("events") || "[]");
  const currentDateString = date.toDateString();
  const currentDateEvents = items.filter((event: any) => {
    const eventDateString = new Date(event.startDate).toDateString();
    return eventDateString === currentDateString;
  });
  return currentDateEvents;
};

export const translatePositionByPxToDate = (
  date: Date,
  offsetY: number
): number => {
  const totalMinutes = Math.floor(offsetY / 10) * 15; //@TODO use constants
  const hours = (totalMinutes / 60) ^ 0;
  const minutes = totalMinutes % 60;

  return date.setHours(hours, minutes);
};

export const getMonthNameFromDate = (date: Date) =>
  date.toLocaleString("en-us", { month: "long" });
export const getFullYearFromDate = (date: Date) => date.getFullYear();

export { getMondayDate, getDateTitle, formatDate };

export const getFullDate = (date: Date) => {
  const inputDate =
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getDate()).slice(-2);
  return inputDate;
};

export const getTime = (date: Date, limitTime: string) => {
  let minutes = date.getMinutes();
  let currentHours = date.getHours();
  //@ts-ignore
  currentHours = ("0" + currentHours).slice(-2);
  limitTime === "endTime" ? (minutes += 10) : minutes;
  const time = currentHours + ":" + minutes;
  return time;
};
