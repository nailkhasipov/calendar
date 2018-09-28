function getMonthArray(timestamp) {
  const month = [[]];
  const date = new Date(timestamp);
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const start = firstDay.getDay();
  const end = lastDay.getDate();

  for (var i = 1; i < start; i++) {
    month[0].push('');
  }
  
  for (let i = 1; i <= end; i++) {
    let currentWeek = month[month.length - 1];
    let day = String(i);
    if (currentWeek.length  === 7) {
      month.push([day]);
    } else {
      currentWeek.push(day);   
    }
  }

  return month;
}

function getDateTitle(timestamp) {
  const date = new Date(timestamp);
  const options = { year: 'numeric', month: 'long' };
  return date.toLocaleDateString('en-EN', options);
}

function getMondayDate(d) {
  d = new Date(d);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6:1);
  return new Date(d.setDate(diff)).getDate();
}

export { getMonthArray, getMondayDate, getDateTitle };