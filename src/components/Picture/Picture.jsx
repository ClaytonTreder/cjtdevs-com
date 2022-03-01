export default function Picture(props) {
  return props.src ? (
    <img
      onClick={props.onClick}
      src={`/${props.src}`}
      alt={props.imgAlt}
      style={props.style}
      className={props.className}
    />
  ) : null;
}
