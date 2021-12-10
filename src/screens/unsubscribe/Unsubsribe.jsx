import { useEffect } from "preact/hooks";
import { useLocation } from "react-router";

export default function Unsubscribe() {
  const loc = useLocation();
  useEffect(() => {
    console.log(loc);
  });
  return <span>You have successfully unsubscribed.</span>;
}
