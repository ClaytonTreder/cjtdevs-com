export default function Picture(props) {
  return props.s3ImgKey ? (
    <img
      src={`/api/S3/${props.s3ImgKey}`}
      alt={props.imgAlt}
      style={props.style}
      className={props.className}
    />
  ) : null;
}
