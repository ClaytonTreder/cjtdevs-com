import Picture from "components/Picture/Picture";
import { Fragment } from "react";
import LinkShare from "components/LinkShare/LinkShare";

export default function BlogContainer(props) {
  const blogFile = require(`../../content/blogs/${props.fileName}`);
  const blog = blogFile.attributes;
  const BlogComp = blogFile.react;
  const trimedFileName = props.fileName.replace(".md", "");

  return (
    <Fragment>
      {props.isActive ? (
        <div>
          <h4>{blog.title}</h4>
          <h5> {blog.subTitle}</h5>
          <Picture
            style={{
              opacity: "80%",
              width: "100%",
              height: "20vh",
              objectFit: "cover",
              objectPosition: "center",
            }}
            src={blog.img}
          />
          <br />
          <br />
          <BlogComp />
          <span>
            Thanks for reading - <i>{blog.author}</i>
          </span>
          <LinkShare
            link={`${window.location.hostname}/blog?post=${trimedFileName}`}
          />
          <div>
            <button
              onClick={() => {
                window.location.href = `/blog`;
              }}
              style={{ marginTop: "5%", width: "25%" }}
            >
              Back
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-row" style={{ marginBottom: "2.5%" }}>
          <div className="column" style={{ width: "35%", paddingTop: "2.5%" }}>
            <h3>{blog.title}</h3>
            <h5>{blog.subTitle}</h5>
            <p>
              <small>Author: {blog.author}</small>
            </p>
            <LinkShare
              link={`${window.location.hostname}/blog?post=${trimedFileName}`}
            />
            <button
              onClick={() => {
                window.location.href = `/blog?post=${trimedFileName}`;
              }}
              style={{ marginTop: "5%", width: "75%" }}
            >
              Read
            </button>
          </div>
          <div className="column" style={{ width: "65%" }}>
            <Picture
              src={blog.img}
              style={{
                width: "100%",
                height: "35vh",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
}
