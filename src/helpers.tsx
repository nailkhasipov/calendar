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
