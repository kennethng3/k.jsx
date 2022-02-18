import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SideInfo from "./components/SideInfo";
import Presentation from "./components/Presentation";
import About from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
function App() {
  return (
    <div>
      <Navbar />
      <SideInfo />
      <Presentation />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
