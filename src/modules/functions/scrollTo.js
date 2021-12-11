export default function scrollTo(elementId, scrollOptions) {
  const element = document.getElementById(elementId);

  element.scrollIntoView(scrollOptions);
}
