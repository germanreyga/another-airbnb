import React from "react";
import GoogleMapReact from "google-map-react";

function LocationMap(props) {
  let location = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return (
    <div className="sticky-item">
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={location.center}
          defaultZoom={location.zoom}
        ></GoogleMapReact>
      </div>
    </div>
  );
}

export default LocationMap;
