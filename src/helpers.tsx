export const getMonthMatrix = (date: Date) => {
  const calendarMatrix: Date[][] = [];
  const month = date.getMonth();
  const startDate = new Date(2019, month, 1);
  const endDate = new Date(2019, month + 1, 0);

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

export const getDaysOfYearArray = () => {
  var daysOfYear: Date[] = [];
  for (
    var d = new Date(2019, 0, 1);
    d <= new Date(2019, 11, 31);
    d.setDate(d.getDate() + 1)
  ) {
    daysOfYear.push(new Date(d));
  }
  while (daysOfYear[0].getDay() != 1) {
    const date = new Date(daysOfYear[0]);
    const previousDate = date.setDate(date.getDate() - 1);
    daysOfYear.unshift(new Date(previousDate));
  }
  while (daysOfYear[daysOfYear.length - 1].getDay() != 0) {
    const date = new Date(daysOfYear[0]);
    const nextDate = date.setDate(date.getDate() + 1);
    daysOfYear.push(new Date(nextDate));
  }
  return daysOfYear;
};

// export const getDaysArray = (year?: Date) => {
//   const daysArray: Date[] = [];
//   for (let month = 0; month < MONTHS.length; month++) {
//     for (let day = 0; day < MONTHS[month]; day++) {
//       const date = new Date(2019, month, day);
//       daysArray.push(date);
//     }
//   }
//   while (daysArray[0].getDay() != 1) {
//     const date = daysArray[0];
//     const previousDate = new Date(date.setDate(date.getDate() - 1));
//     daysArray.unshift(previousDate);
//   }
//   while (daysArray[daysArray.length - 1].getDay() != 0) {
//     const date = daysArray[0];
//     const nextDate = new Date(date.setDate(date.getDate() + 1));
//     daysArray.push(nextDate);
//   }
//   return daysArray;
// };

function getMonthArray(date: Date) {
  const month: any = [[]];
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const start = firstDay.getDay();
  const end = lastDay.getDate();

  for (let i = 1; i < start; i++) {
    month[0].push('');
  }

  for (let i = 1; i <= end; i++) {
    const currentWeek = month[month.length - 1];
    const day = String(i);
    if (currentWeek.length === 7) {
      month.push([day]);
    } else {
      currentWeek.push(day);
    }
  }

  return month;
}

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

export { getMonthArray, getMondayDate, getDateTitle, formatDate };
