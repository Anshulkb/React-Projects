import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components";
import Navbar from "./components/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Navigation from "./pages/Navigation";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Router>
        <header>
          <GiHamburgerMenu
            className="show-menu-icon"
            onClick={() => setShowMenu(!showMenu)}
          ></GiHamburgerMenu>
        </header>
        <div>
          <Navbar expanded={showMenu}></Navbar>
        </div>
        <div className={showMenu ? `details-page active` : "details-page"}>
          <Navigation></Navigation>
        </div>
      </Router>
    </>
  );
}

export default App;
