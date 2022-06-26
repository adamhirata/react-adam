import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import "./modules.css";
import test1 from "./test.md";

const articleURL = "oof";

const MDStyle = {
  display: "flex",
  flexDirection: "column",
  width: "90%",
  backgroundColor: "rgba(0, 0, 0, 0.0)",
  color: "#132243",
  fontFamily: "Courier",
};

export default function Article(props) {
  const [articleObj, setArticleObj] = useState();
  const [markdown, setMarkdown] = useState();
  const [keywords, setKeywords] = useState();

  const getJSON = async () => {
    await fetch(
      "https://raw.githubusercontent.com/adamhirata/blog-data/master/articles/article.json"
    )
      .then((response) => response.json())
      .then((data) => setArticleObj(data))
      .catch((error) => {
        alert("oof");
      });
  };

  useEffect(() => {
    getJSON();
  }, []);

  useEffect(() => {
    if (articleObj) {
      setMarkdown(articleObj.markdown);
      setKeywords(articleObj.keywords);
    }
  }, [articleObj]);

  return (
    <div className="article">
      <div className="card" data-color-mode="light">
        <InfoComp articleObj={articleObj} />
        <MDEditor.Markdown style={MDStyle} source={markdown} />
        <div className="keywords">
          <div>
            <p>
              <b>Keywords: </b>
              {" " + keywords}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const rowStyle = { display: "flex", flexDirection: "row" };

function InfoComp(props) {
  const [title, setTitle] = useState();
  const [readTime, setReadTime] = useState();
  const [createDate, setCreateDate] = useState();
  const [modifyDate, setModifyDate] = useState();

  const articleObj = props.articleObj;
  useEffect(() => {
    if (articleObj) {
      setTitle(articleObj.title);
      setReadTime(articleObj.read_time);
      setCreateDate(articleObj.create_date);
      setModifyDate(articleObj.modify_date);
    }
  }, [articleObj]);
  return (
    <div className="info-comp">
      <div className="info-left">
        <a href="articles" className="info-right">
          Articles{" "}
        </a>
        <p
          className="info-right"
          style={{
            color: "blue",
            fontWeight: "bold",
            marginLeft: "3px",
            marginRight: "3px",
          }}
        >
          {"> "}{" "}
        </p>
        <p className="info-right">{title}</p>
      </div>
      <div style={rowStyle}>
        <p className="info-right">First published: {createDate}</p>
      </div>
      <div style={rowStyle}>
        <p className="info-right">Last modified: {modifyDate}</p>
      </div>
      <div style={rowStyle}>
        <p className="info-right">{readTime} minute read</p>
      </div>
      <div style={{ height: "40px" }} />
    </div>
  );
}
