export function getDate(d) {
  let date = new Date(d);

  let month =
    date.getMonth() + 1 < 10
      ? `0${date.getMonth() + 1}`
      : `${date.getMonth() + 1}`;
  let day = date.getDate();
  let year = date.getFullYear();
  return `${month}/${day}/${year}`;
}
