import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./logo.svg";
import NavMenu from "./components/Navbar/NavMenu";
import StayList from "./components/Stays/Stays";
import Footer from "./components/Footer/Footer";

function App() {
  let languages = [
    { languageName: "English", languageLink: "#english" },
    { languageName: "Spanish", languageLink: "#spanish" },
    { languageName: "Chinese", languageLink: "#chinese" },
  ];

  return (
    <>
      <NavMenu languages={languages} logo={logo} />
      <div className="page-container">
        <StayList className="sidebar-item" />
      </div>

      <Footer />
    </>
  );
}

export default App;
