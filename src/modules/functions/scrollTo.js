export default function scrollTo(elementId) {
  const element = document.getElementById(elementId);

  setTimeout(() => {
    window.scrollTo({
      behavior: element ? "smooth" : "auto",
      top: element ? element.offsetTop - 50 : 0,
    });
  }, 100);
}
