import logo from "./logo.svg";
import "./App.css";
import LoadMoreData from "./components/loadMore";

function App() {
  return (
    <div className="App">
      <LoadMoreData url={"https://dummyjson.com/products"}></LoadMoreData>
    </div>
  );
}

export default App;
