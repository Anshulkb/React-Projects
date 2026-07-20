// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React from "react";
import GalaxyScene from "./components/GalaxyScene";
import Section from "./components/Section";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <div className="relative w-full h-full">
      {/* 3D Background */}
      <GalaxyScene />

      {/* Scrollable Sections */}
      <div className="relative z-10">
        <Section id="home" bgColor="bg-black" title="Home" />
        <Section id="about" bgColor="bg-gradient-to-b from-purple-900 to-black" title="About" />
        <Section id="projects" bgColor="bg-gradient-to-b from-blue-900 to-black" title="Projects" />
        <Section id="contact" bgColor="bg-gradient-to-b from-red-900 to-black" title="Contact" />
      </div>

      {/* Scroll-to-Top */}
      <ScrollTop />
    </div>
  );
}

export default App;
