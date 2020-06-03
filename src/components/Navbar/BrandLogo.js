import React from "react";
import { Navbar } from "react-bootstrap";

function BrandLogo(props) {
  return (
    <Navbar.Brand href="#home" className="brand-logo">
      <img src={props.logo} className="App-logo" alt="logo" />
      airbnb
    </Navbar.Brand>
  );
}

export default BrandLogo;
