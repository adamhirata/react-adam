import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import "./modules.css";
import test1 from "./test.md";

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
  const getJSON = async () => {
    await fetch(
      "https://raw.githubusercontent.com/adamhirata/blog-data/master/test.json"
    )
      .then((response) => response.json())
      .then((data) => setArticleObj(data));
  };

  useEffect(() => {
    getJSON();
  }, []);

  useEffect(() => {
    console.log(articleObj);
    if (articleObj) {
      setMarkdown(articleObj.markdown);
    }
  }, [articleObj]);

  return (
    <div className="article">
      <div className="card">
        <MDEditor.Markdown style={MDStyle} source={markdown} />
      </div>
    </div>
  );
}
