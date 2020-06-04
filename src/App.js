import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./logo.svg";
import NavMenu from "./components/Navbar/NavMenu";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StayList from "./components/Stays/Stays";
import StayDetail from "./components/StayDetail/StayDetail";

function App() {
  let languages = [
    { languageName: "English", languageLink: "#english" },
    { languageName: "Spanish", languageLink: "#spanish" },
    { languageName: "Chinese", languageLink: "#chinese" },
  ];

  return (
    <>
      <NavMenu languages={languages} logo={logo} />
      <Router>
        <Switch>
          <Route exact path="/">
            <StayList />
          </Route>
          <Route path="/detail">
            <StayDetail />
          </Route>
          <Route path="*">
            <StayList />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
