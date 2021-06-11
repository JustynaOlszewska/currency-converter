export const currentDate = (): string => {
  const currentDate = new Date();
  let day = currentDate.getDate().toString();
  let month = (currentDate.getMonth() + 1).toString();
  const year = currentDate.getFullYear().toString();
  Number(day) < 10 && (day = `0${day}`);
  Number(month) < 10 && (month = `0${month}`);
  const current = `${day}.${month}.${year}`;
  return current;
};
