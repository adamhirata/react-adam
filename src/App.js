import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import ArticleScreen from "./Screens/ArticleScreen";
import BlogPreview from "./BlogPreview";
import PixArt from "./PixArt";

function App() {
  const route = window.location.pathname;
  const params = new URLSearchParams(window.location.search);
  let routeComp;

  switch (route) {
    case "":
    case "/":
    case "/home":
      // [!] To-do: Home Screen
      routeComp = <PixArt />;
      break;
    case "/article":
    case "/article/":
      routeComp = <ArticleScreen id={params.get("id")} />;
      break;
    case "/tutorial/fun":
    case "/tutorial/fun/":
      // [!] To-do: Tutorial Screen
      break;
    case "/tutorial/functional":
    case "/tutorial/functional":
      // [!] To-do: Tutorial Screen
      break;
    case "/markdown":
    case "/markdown/":
      routeComp = <BlogPreview />;
    default:
      // [!] To-do: 404 Screen
      routeComp = "404";
      break;
  }

  return (
    <div className="App">
      {/* <p style={{ position: "absolute", marginLeft: "100px" }}>{route}</p> */}
      {routeComp}
      {/* <BlogPreview /> */}
    </div>
  );
}

export default App;
