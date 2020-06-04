import React from "react";
import { NavDropdown } from "react-bootstrap";

function LanguageButton({ languageLink, languageName }) {
  return (
    <NavDropdown.Item href={languageLink}>{languageName}</NavDropdown.Item>
  );
}

export default LanguageButton;
