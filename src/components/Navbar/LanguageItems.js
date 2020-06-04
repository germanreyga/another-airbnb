import React from "react";
import { NavDropdown } from "react-bootstrap";
import LanguageButton from "./LanguageButton";
import MenuImage from "./MenuImage";

function LanguageItems({ languages, img }) {
  let languageItems = languages.map((languageInfo, index) => {
    return (
      <LanguageButton
        key={index}
        languageLink={languageInfo.languageLink}
        languageName={languageInfo.languageName}
      />
    );
  });

  return (
    <>
      <NavDropdown
        title={<MenuImage img={img}></MenuImage>}
        id="basic-nav-dropdown"
        className="navlink-dropdown"
      >
        {languageItems}
      </NavDropdown>
    </>
  );
}

export default LanguageItems;
