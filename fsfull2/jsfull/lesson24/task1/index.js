const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate(); 
  const dateInFuture = new Date(date).setDate(day + days);
  return weekDay[new Date(dateInFuture).getDay()];
};
const result = dayOfWeek(new Date(2019, 0, 1), 14);
console.log(result);
