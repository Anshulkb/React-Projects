import logo from "./logo.svg";
import "./App.css";
import Index from "./component/index";
import menus from "./component/data";
import "./component/index.css";

function App() {
  return (
    <div className="App">
      <Index menu={menus}></Index>
    </div>
  );
}

export default App;
