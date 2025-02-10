export function getBirthData(date) {
  const time = new Date(date);
  let day = String(time.getDate());
  day[1] ? "" : (day = "0" + day);
  let mouth = String(time.getMonth() + 1);
  mouth[1] ? "" : (mouth = "0" + mouth);

  const year = time.getFullYear();

  const changeDate = `${day}/${mouth}/${year}`;

  return changeDate;
}
