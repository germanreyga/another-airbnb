import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import BrandLogo from "./BrandLogo";
import SearchBar from "./SearchBar";
import globe from "../../imgs/globe.svg";

function NavMenu(props) {
  return (
    <Navbar expand="lg" className="nav-menu shadow-sm">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="d-flex justify-content-around"
      >
        <BrandLogo logo={props.logo} />
        <SearchBar
          buttonLabels={[
            { name: "Add a location" },
            { name: "Add dates" },
            { name: "Add guests" },
          ]}
        />
        <Nav className="justify-content-end">
          <LanguageItems languages={props.languages} globe={globe} />
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

function LanguageItems(props) {
  let languageItems = props.languages.map((languageInfo) => {
    return (
      <LanguageButton
        languageLink={languageInfo.languageLink}
        languageName={languageInfo.languageName}
      />
    );
  });

  return (
    <>
      <NavDropdown
        title={<GlobeImg img={props.globe}></GlobeImg>}
        id="basic-nav-dropdown"
        className="navlink-dropdown"
      >
        {languageItems}
      </NavDropdown>
    </>
  );
}

function GlobeImg(props) {
  return <img src={globe} className="default-icon" alt="globe" />;
}

function LanguageButton(props) {
  return (
    <NavDropdown.Item href={props.languageLink}>
      {props.languageName}
    </NavDropdown.Item>
  );
}

export default NavMenu;
