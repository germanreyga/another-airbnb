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
    <div style={{ height: "100vh", width: "100%" }} className="sticky-item">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location.center}
        defaultZoom={location.zoom}
      ></GoogleMapReact>
    </div>
  );
}

export default LocationMap;
