import Home from "../pages/Home";
import About from "../pages/About";
import Accordion from "../pages/Accordion";
// import Accordion from "../pages/Accordion";

export const menu = [
  {
    label: "Home",
    to: "/",
    // element: Home,
    element: <Home />,
  },
  {
    label: "About",
    to: "/about",
    // element: About,
    element: <About />,
  },
  {
    label: "Accordion",
    to: "/accordion",
    // element: Accordion,
    element: <Accordion />,
  },
  // {
  //   label: "Image Slider/ Carousel",
  //   to: "/image-slider",
  //   element: "",
  // },
  // {
  //   label: "Load more data",
  //   to: "/load-more-data",
  //   element: "",
  // },
  // {
  //   label: "Random color generator",
  //   to: "/random-color-generator",
  //   element: "",
  // },
  //   {
  //     label: "QR code generator",
  //     to: "/qr-generator",
  //     element: <QrCodeGenerator></QrCodeGenerator>,
  //   },

  // {
  //   label: "Star ratings",
  //   to: "/star-ratings",
  //   element: "",
  // },
  // {
  //   label: "Tree navigation view",
  //   to: "/tree-view",
  //   element: "",
  // },
  //   {
  //     label: "Github profile finder",
  //     to: "/git-profile-finder",
  //     element: <GithubProfileFinder></GithubProfileFinder>,
  //   },
  //   {
  //     label: "Autocomplete search",
  //     to: "/autocomplete-search",
  //     element: <Autocomplete></Autocomplete>,
  //   },
  //   {
  //     label: "Tic Tac Toe",
  //     to: "/tic-tac-toe",
  //     element: <TicTacToe></TicTacToe>,
  //   },
];

export default menu;
