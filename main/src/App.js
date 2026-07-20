// import logo from "./logo.svg";
import "./App.css";
import FeatureContextGlobalState from "./components/basics/feature-flag/context/feature-flag.jsx";
import FeatureFlags from "./components/basics/feature-flag/feature-index.jsx";
// import QrCodeGenerator from "./components/basics/qr-generator";
// import ThemeChanger from "./components/basics/theme-changer";
// import ScrollIndicator from "./components/app-progress-indicator";
// import Navigation from "./components/navigation/menu.jsx";
// import { menu } from "./components/navigation/index";
// import TabContainer from "./components/basics/tab-container";
// import Modal from "./components/basics/custom-modal-popup/modal-index.jsx";
// import GithubProfileFinder from "./components/applications/git-profile-finder/index.jsx";
// import Autocomplete from "./components/applications/search-autocomplete-api/autocomplete.jsx";
// import TicTacToe from "./components/applications/tic-tac-toe/index.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import UseFetch from "./components/basics/use-fetch/test.jsx";
import ClickOutsideFragment from "./components/basics/close-fragment/test.jsx";
import WindowResizeHook from "./components/basics/window-resize-hook/test.jsx";
import ScrollFunctionality from "./components/basics/scroll-top-bottom/index.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
// import Homepage from "./components/homepage.jsx";
import { useState } from "react";
import Navbar from "./components/navigation/navbar.jsx";
import NavigationMenu from "./components/navigation/navigation.jsx";
function App() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    // <div className="App">
    //   {

    // {/* <Homepage></Homepage> */}
    // {/* <QrCodeGenerator></QrCodeGenerator> */}
    // {/* <ThemeChanger></ThemeChanger> */}
    // {/* <ScrollIndicator
    //   url={"https://dummyjson.com/products?limit=100"}
    // ></ScrollIndicator> */}
    // {/* <TabContainer></TabContainer> */}
    // {/* <Modal></Modal> */}
    // {/* <div style={{ marginLeft: "100px" }}>
    //   <GithubProfileFinder></GithubProfileFinder>
    //   <Autocomplete></Autocomplete>
    //   <TicTacToe></TicTacToe>
    // </div> */}

    // {/* <FeatureContextGlobalState>
    //   <FeatureFlags></FeatureFlags>
    // </FeatureContextGlobalState> */}

    // {/* <UseFetch></UseFetch> */}

    // {/* <ClickOutsideFragment></ClickOutsideFragment>
    // <WindowResizeHook></WindowResizeHook>
    // <ScrollFunctionality></ScrollFunctionality> */}
    // {/* </div> */}
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
          <NavigationMenu showMenu={showMenu}></NavigationMenu>
        </div>
      </Router>
    </>
  );
}

export default App;
