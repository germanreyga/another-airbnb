import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import searchIcon from "../../imgs/search.svg";

function SearchBar(props) {
  let buttons = props.buttonLabels.map((label) => {
    return (
      <Button variant="light" className="searchbar-btn">
        {label.name}
      </Button>
    );
  });

  return (
    <ButtonGroup aria-label="Basic example" className="searchbar-group">
      {buttons}
      <Button variant="light" className="searchbar-search">
        <img src={searchIcon} alt="search" className="default-icon"></img>
      </Button>
    </ButtonGroup>
  );
}

export default SearchBar;
