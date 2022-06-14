import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import ArticleScreen from "./Screens/ArticleScreen";

function App() {
  const route = window.location.pathname;
  return (
    <div className="App">
      {/* <p style={{ position: "absolute", marginLeft: "100px" }}>{route}</p> */}
      <ArticleScreen />
    </div>
  );
}

export default App;
