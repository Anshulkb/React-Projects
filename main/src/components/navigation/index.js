// import Homepage from "../";
import QrCodeGenerator from "../basics/qr-generator";
import GithubProfileFinder from "../applications/git-profile-finder";
import Autocomplete from "../applications/search-autocomplete-api/autocomplete";
import TicTacToe from "../applications/tic-tac-toe";
import Home from "../../pages/Home";
import WeatherApp from "../applications/weather-app/index";

export const menu = [
  {
    label: "Home",
    to: "/",
    element: <Home />,
  },
  // {
  //   label: "Accordion",
  //   to: "/accordion",
  //   element: "",
  // },
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
  {
    label: "QR code generator",
    to: "/qr-generator",
    element: <QrCodeGenerator></QrCodeGenerator>,
  },

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
  {
    label: "Github profile finder",
    to: "/git-profile-finder",
    element: <GithubProfileFinder></GithubProfileFinder>,
  },
  {
    label: "Autocomplete search",
    to: "/autocomplete-search",
    element: <Autocomplete></Autocomplete>,
  },
  {
    label: "Tic Tac Toe",
    to: "/tic-tac-toe",
    element: <TicTacToe></TicTacToe>,
  },
  {
    label: "Weather App",
    to: "/weather",
    element: <WeatherApp></WeatherApp>,
  },
];

export default menu;
