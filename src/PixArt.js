import { useEffect, useState } from "react";
import "./App.css";

let mouseDown = 0;

export default function PixArt() {
  window.onmousedown = () => {
    console.log("oof");
    mouseDown++;
  };
  window.onmouseup = () => {
    mouseDown--;
    console.log("foo");
  };
  const [side, setSide] = useState(15);
  const [dimensionsX, setDimensionsX] = useState(16);
  const [dimensionsY, setDimensionsY] = useState(16);
  const [rowComp, setRowComp] = useState(null);
  const [gridComp, setGridComp] = useState(null);
  const [eraser, setEraser] = useState(false);
  const handleChange = (val) => {
    setSide(val);
  };

  useEffect(() => {
    console.log(eraser);
  }, [eraser]);

  useEffect(() => {
    const tempRow = [];
    const tempGrid = [];
    for (let i = 0; i < dimensionsX; i++) {
      tempRow.push(0);
    }
    for (let j = 0; j < dimensionsY; j++) {
      tempGrid.push(0);
    }

    setGridComp(
      tempGrid.map(() => (
        <div className="grid-row">
          {tempRow.map(() => (
            <Pixel side={side} eraser={eraser} setEraser={setEraser} />
          ))}
        </div>
      ))
    );
  }, [dimensionsX, dimensionsY, side, eraser]);
  return (
    <div onContextMenu={(e) => e.preventDefault()} className="pix-art">
      <input
        type={"number"}
        onChange={(v) => {
          handleChange(v.target.value);
        }}
      />
      {gridComp}
    </div>
  );
}

function Pixel(props) {
  const [side, eraser, setEraser] = [props.side, props.eraser, props.setEraser];
  const [opac, setOpac] = useState(1);

  const styles = {
    width: side + "px",
    height: side + "px",
    borderRight: side / 5 + "px solid black",
    borderBottom: side / 5 + "px solid black",
    opacity: opac,
  };

  const handleDown = (val) => {
    switch (val.nativeEvent.button) {
      case 0:
        setOpac(1);
        setEraser(false);
        break;
      case 2:
        setOpac(0);
        setEraser(true);
        break;
    }
  };
  const handleHover = () => {
    if (mouseDown) {
      eraser ? setOpac(0) : setOpac(1);
    }
  };

  return (
    <div
      style={styles}
      onMouseDown={(v) => handleDown(v)}
      onMouseEnter={() => handleHover()}
      className="pixel"
    ></div>
  );
}
