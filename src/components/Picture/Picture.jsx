import useSessionStorage from "hooks/useSessioStorage";
import { useEffect } from "react";

export default function Picture(props) {
  const [pic, setPic] = useSessionStorage(props.s3ImgKey);
  useEffect(() => {
    pic ??
      fetch(`/api/s3/${props.s3ImgKey}`)
        .then((res) => {
          return res.json();
        })
        .then((img) => {
          setPic(img);
        })
        .catch((err) => {
          console.log(err);
        });
  });
  return pic ? (
    <img
      src={`data:image/png;base64, ${pic}`}
      alt={props.imgAlt}
      style={props.style}
    />
  ) : null;
}
