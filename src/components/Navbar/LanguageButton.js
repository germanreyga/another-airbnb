import React from "react";
import { NavDropdown } from "react-bootstrap";

function LanguageButton(props) {
  return (
    <NavDropdown.Item href={props.languageLink}>
      {props.languageName}
    </NavDropdown.Item>
  );
}

export default LanguageButton;
