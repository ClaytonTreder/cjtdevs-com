exports.getDate = (d) => {
  let date = new Date(d);

  let month =
    date.getMonth() + 1 < 10
      ? `0${date.getMonth() + 1}`
      : `${date.getMonth() + 1}`;
  let day = date.getDate();
  let year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

exports.scrollTo = (elementId) => {
  const element = document.getElementById(elementId);

  setTimeout(() => {
    window.scrollTo({
      behavior: element ? "smooth" : "auto",
      top: element ? element.offsetTop - 50 : 0,
    });
  }, 100);
};
