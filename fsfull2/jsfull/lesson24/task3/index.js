function getDiff(startDate, endDate) {
  // Берем разницу дат в секундах
  let delta = Math.floor(
    Math.abs(endDate.getTime() - startDate.getTime()) / 1000);
  // Вычисляем количество ПОЛНЫХ дней
  let days = Math.floor(delta / 86400);
  // А теперь вычитаем из секунд количество дней, выраженных в секундах
  delta -= days * 86400;
  // В оставшихся секунд вычленяем количество полных часов
  let hours = Math.floor(delta / 3600) % 24;
  // Также их потом вычитаем, выразив в секундах
  delta -= hours * 3600;
  // Из оставшихся секунд берем минуты
  let minutes = Math.floor(delta / 60) % 60;
  // Опять вычитаем
  delta -= minutes * 60;
  // И наконец секунды
  // В теории  деление по модулю на 60 не обязателен
  let seconds = delta % 60;
  // Итоговая дата
  let dateStr = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  return dateStr;
}
