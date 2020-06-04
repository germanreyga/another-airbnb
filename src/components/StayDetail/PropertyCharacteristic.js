import React from "react";

function PropertyCharacteristic({ icon, title, description }) {
  return (
    <div className="d-flex align-items-top">
      <img
        src={icon}
        width="25px"
        height="25px"
        alt="characteristic-icon"
        className="mr-3"
      />
      <div>
        <p className="characteristic-title ">{title}</p>
        <p className="characteristic-description font-weight-light">
          {description}
        </p>
      </div>
    </div>
  );
}

export default PropertyCharacteristic;
