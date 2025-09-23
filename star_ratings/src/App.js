import logo from "./logo.svg";
import "./App.css";
import StarRatings from "./components";

function App() {
  return (
    <div className="App">
      <StarRatings totalStars={5}></StarRatings>
    </div>
  );
}

export default App;
