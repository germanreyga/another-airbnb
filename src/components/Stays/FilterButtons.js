import React from "react";

function FilterButtons(props) {
  const buttonLabels = props.labels;

  const buttons = buttonLabels.map((label, index) => {
    return (
      <a className="filter-button" href="/#">
        {label}
      </a>
    );
  });

  return <div className="filter-group mt-4">{buttons}</div>;
}

export default FilterButtons;
