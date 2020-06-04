import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

function LocationMap(props) {
  const navMenuHeight = 80;
  let location = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        height: windowDimensions.height - navMenuHeight + "px",
        width: "100%",
      }}
      className="sticky-item d-none d-md-block"
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location.center}
        defaultZoom={location.zoom}
      ></GoogleMapReact>
    </div>
  );
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default LocationMap;
