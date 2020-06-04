import React from "react";
import { Navbar, Nav, Container, Col } from "react-bootstrap";
import BrandLogo from "./BrandLogo";
import SearchBar from "./SearchBar";
import globe from "../../imgs/globe.svg";
import LanguageItems from "./LanguageItems";

function NavMenu({ logo, languages }) {
  let buttonLabels = [
    { name: "Add a location" },
    { name: "Add dates" },
    { name: "Add guests" },
  ];

  return (
    <Container className="navbar-container sticky-top">
      <Navbar
        expand="lg"
        className="nav-menu shadow-sm bg-white row d-flex justify-content-around"
      >
        <Col sm={12} md={2} className="text-center">
          <BrandLogo logo={logo} className="ml-5" />
        </Col>
        <Col sm={12} md={5} className="text-center">
          <SearchBar buttonLabels={buttonLabels} />
        </Col>
        <Col sm={12} md={3} className="d-none d-md-block">
          <Nav>
            <LanguageItems languages={languages} img={globe} />
            <Nav.Link href="#help" className="navlink-btn ml">
              Help
            </Nav.Link>
            <Nav.Link href="#signup" className="signup-btn">
              Signup
            </Nav.Link>
          </Nav>
        </Col>
      </Navbar>
    </Container>
  );
}

export default NavMenu;
