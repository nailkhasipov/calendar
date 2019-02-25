export const getMonthMatrix = (date: Date) => {
  const calendarMatrix: Date[][] = [];
  const month = date.getMonth();
  const year = date.getFullYear();
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);

  //@TODO !!!!!
  if (startDate.getDay() != 1) {
    startDate.setDate(startDate.getDay() - 8);
  }
  if (endDate.getDay() != 1) {
    endDate.setDate(endDate.getDate() + (7 - endDate.getDay()));
  }
  endDate.setDate(endDate.getDate() + 7);
  //@TODO !!!!!

  let week = [];
  while (startDate <= endDate) {
    week.push(new Date(startDate));
    if (week.length === 7) {
      calendarMatrix.push(week);
      week = [];
    }
    startDate.setDate(startDate.getDate() + 1);
  }
  return calendarMatrix;
};

function getDateTitle(date: Date) {
  const options = { year: 'numeric', month: 'long' };
  return date.toLocaleDateString('en-EN', options);
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

  return [year, month, day].join('-');
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

export { getMondayDate, getDateTitle, formatDate };
