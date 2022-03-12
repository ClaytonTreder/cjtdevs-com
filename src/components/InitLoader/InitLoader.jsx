import { Fragment, useEffect } from "react";

import { attributes as aboutMD } from "content/pages/about.md";
import { attributes as clientsMD } from "content/pages/clients.md";
import { attributes as contactMD } from "content/pages/contact.md";
import { attributes as homeMD } from "content/pages/home.md";
import { attributes as servicesMD } from "content/pages/services.md";
import Picture from "components/Picture/Picture";
import useSessionStorage from "shared/hooks/useSessionStorage";

export default function InitLoader(props) {
  const [imagesLoaded, setImagesLoaded] = useSessionStorage("imagesLoaded", [
    { loaded: false, key: "about", image: aboutMD.background },
    { loaded: false, key: "clients", image: clientsMD.background },
    { loaded: false, key: "contact", image: contactMD.background },
    { loaded: false, key: "home", image: homeMD.home_bg },
    { loaded: false, key: "services", image: servicesMD.background },
  ]);

  useEffect(() => {
    props.setInitLoading(
      imagesLoaded.filter((il) => il.loaded !== false).length < 1
    );
    // eslint-disable-next-line
  }, []);

  const checkLoaded = () => {
    if (imagesLoaded.filter((il) => il.loaded !== false).length < 1) {
      props.setInitLoading(false);
    }
  };

  return (
    <Fragment>
      <div style={{ padding: "5%" }} className="flex-row-center">
        <h1 style={{ color: "var(--color-white)" }}>Hang Tight!</h1>
        <Picture
          style={{ marginLeft: "10%" }}
          src="images/heartbeat.gif"
          alt="initial loading"
          className="bg-img"
        />
      </div>
      <div style={{ display: "none" }}>
        <Picture
          style={{ display: "none" }}
          src="images/logo.svg"
          alt="initial loading"
        />
        {imagesLoaded.map((il) => {
          return (
            <Picture
              style={{ display: "none" }}
              src={il.image}
              alt="imgCheck"
              onLoad={() => {
                setImagesLoaded((prevState) =>
                  prevState.map((el) =>
                    el.key === il.key ? { ...el, loaded: true } : el
                  )
                );
                checkLoaded();
              }}
            />
          );
        })}
      </div>
    </Fragment>
  );
}
