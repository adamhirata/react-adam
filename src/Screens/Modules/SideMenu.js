import "./modules.css";
import logo from "../../assets/logo.png";
import logo1 from "../../assets/logo1.png";
import { useEffect, useState } from "react";

export default function SideMenu() {
  const [extendedComp, setExtendedComp] = useState();
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    switch (selected) {
      case 0:
        setExtendedComp();
        break;
      case 1:
        setExtendedComp(<Extension value={1} />);
        break;
      case 2:
        setExtendedComp(<Extension value={2} />);
        break;
      case 3:
        setExtendedComp(<Extension value={3} />);
        break;
      case 4:
        setExtendedComp(<Extension value={4} />);
        break;
    }
  }, [selected]);
  const routeHome = () => {
    window.open("./home", "_self");
  };
  return (
    <div className="menu-container">
      {extendedComp}
      <div className="side-menu">
        <img
          className="side-menu-logo"
          onClick={() => routeHome()}
          src={logo}
        />
        <div
          style={{
            height: "2px",
            width: "40px",
            backgroundColor: "#555555",
            margin: "5px",
          }}
        ></div>
        <OptionList selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
}

function Extension(props) {
  return <div className="menu-extension"></div>;
}

function OptionList(props) {
  const [selected, setSelected] = [props.selected, props.setSelected];
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Option
        src={logo1}
        selected={selected}
        setSelected={setSelected}
        value={1}
        title={"oof"}
      />
      <Option
        src={logo1}
        selected={selected}
        setSelected={setSelected}
        value={2}
        title={"oof"}
      />
      <Option
        src={logo1}
        selected={selected}
        setSelected={setSelected}
        value={3}
        title={"oof"}
      />
      <Option
        src={logo1}
        selected={selected}
        setSelected={setSelected}
        value={4}
        title={"oof"}
      />
    </div>
  );
}

function Option(props) {
  const [src, selected, setSelected, value, title] = [
    props.src,
    props.selected,
    props.setSelected,
    props.value,
    props.title,
  ];
  const [borderComp, setSelStyle] = useState();
  const [titleComp, setTitleComp] = useState();
  const [colorStyle, setColorStyle] = useState();
  const handleClick = () => {
    selected == value ? setSelected(0) : setSelected(value);
    setTitleComp();
  };
  const handleEnter = async () => {
    await new Promise((r) => setTimeout(r, 100));
    selected == value
      ? setTitleComp()
      : setTitleComp(
          <div className="option-title">
            <p>{title}</p>
          </div>
        );
  };
  const handleLeave = async () => {
    await new Promise((r) => setTimeout(r, 100));
    setTitleComp();
  };
  useEffect(() => {
    selected == value
      ? setSelStyle(
          <div
            style={{
              display: "flex",
              position: "absolute",
              left: "0",
              height: "100%",
              width: "3px",
              backgroundColor: "white",
            }}
          ></div>
        )
      : setSelStyle();
    selected == value
      ? setColorStyle({ filter: "brightness(0) invert(1)" })
      : setColorStyle();
  }, [selected]);
  return (
    <div
      onMouseEnter={() => handleEnter()}
      onMouseLeave={() => handleLeave()}
      className="option-container"
    >
      {borderComp}
      <img
        className="side-menu-option"
        style={colorStyle}
        onClick={() => {
          handleClick();
        }}
        src={src}
      />
      {titleComp}
    </div>
  );
}
