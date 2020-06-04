import React from "react";
import { Navbar } from "react-bootstrap";

function BrandLogo({ logo }) {
  return (
    <Navbar.Brand href="/" className="brand-logo">
      <img src={logo} className="App-logo" alt="logo" />
      windbnb
    </Navbar.Brand>
  );
}

export default BrandLogo;
