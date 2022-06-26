import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import "./App.css";

export default function BlogPreview(props) {
  const [innerMD, setInnerMD] = useState();
  const [externalMD, setExternalMD] = useState();

  const handleClick = () => {
    alert(innerMD.replace(/[\r\n]/gm, "\\n"));
  };

  return (
    <div className="blog-preview" data-color-mode="light">
      <MDEditor
        style={{ width: "95%" }}
        height="70%"
        visibleDragbar="false"
        value={innerMD}
        onChange={(val) => {
          setInnerMD(val);
        }}
      />
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <div onClick={() => handleClick()} className="button">
            <p>toString()</p>
          </div>
        </div>
        <div>
          <input
            placeholder="Insert markdown here"
            onChange={(val) => setExternalMD(val.target.value)}
          />
          <div
            onClick={() => setInnerMD(externalMD.replace(/\\n/gm, `\n`))}
            className="button"
          >
            <p>Markdown</p>
          </div>
        </div>
      </div>
    </div>
  );
}
