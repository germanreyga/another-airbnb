import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import BrandLogo from "./BrandLogo";
import SearchBar from "./SearchBar";
import globe from "../../imgs/globe.svg";
import LanguageItems from "./LanguageItems";

function NavMenu(props) {
  let buttonLabels = [
    { name: "Add a location" },
    { name: "Add dates" },
    { name: "Add guests" },
  ];

  return (
    <Navbar expand="lg" className="nav-menu shadow-sm">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="d-flex justify-content-around"
      >
        <BrandLogo logo={props.logo} />
        <SearchBar buttonLabels={buttonLabels} />
        <Nav className="justify-content-end">
          <LanguageItems languages={props.languages} img={globe} />
          <Nav.Link href="#help" className="navlink-btn ml">
            Help
          </Nav.Link>
          <Nav.Link href="#signup" className="signup-btn">
            Signup
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavMenu;
