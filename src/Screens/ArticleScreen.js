import Article from "./Modules/Article";
import SideMenu from "./Modules/SideMenu";
import "./screens.css";

export default function ArticleScreen(props) {
  return (
    <div className="screen">
      <div className="container">
        <SideMenu />
        <Article />
      </div>
    </div>
  );
}
