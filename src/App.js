import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./logo.svg";
import NavMenu from "./components/Navbar/NavMenu";

function App() {
  let languages = [
    { languageName: "English", languageLink: "#english" },
    { languageName: "Spanish", languageLink: "#spanish" },
    { languageName: "Chinese", languageLink: "#chinese" },
  ];

  return <NavMenu languages={languages} logo={logo}></NavMenu>;
}

export default App;
