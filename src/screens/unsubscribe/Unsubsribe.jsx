import { useEffect } from "react";
import { useLocation } from "react-router";
import { useState } from "react";
import axios from "axios";

export default function Unsubscribe() {
  const loc = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const email = loc.search.replace("?email=", "");
    console.log(email);
    axios.delete("/api/newsletter/" + email).finally(() => {
      setLoading(false);
    });
  }, [loc.search]);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "5%" }}
    >
      {!loading ? (
        <h4>You have successfully unsubscribed.</h4>
      ) : (
        <h6>loading...</h6>
      )}
    </div>
  );
}
