import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import StarRating from "./StarRating";

function DetailPhotos({ photos, title, rating, reviews }) {
  const urls = photos.slice(0, 5);

  const size = {
    width: "50%",
    height: "200px",
  };

  return (
    <>
      <Container>
        <div className="detail-header">
          <h2 className="mt-3">{title}</h2>
          <div className="d-flex align-items-center">
            <div className="d-md-block ">
              <StarRating rating={rating} reviews={reviews} />
            </div>
            <div>
              <p className="font-weight-light mt-3 text-underline">
                {"·"} <u>Montréal, Quebec, Canada</u>
              </p>
            </div>
          </div>
        </div>
        <Row className="photo-detail-gallery">
          <div className="more-photos-btn no-select">Show all photos</div>
          <Col sm={12} md={6}>
            <img
              src={urls[0]}
              alt="property-0"
              width="100%"
              height="100%"
              className="p-1 main-gallery-photo"
            ></img>
          </Col>
          <Col sm={12} md={6}>
            <img
              src={urls[1]}
              alt="property-1"
              width={size.width}
              height={size.height}
              className="p-1"
            ></img>
            <img
              src={urls[2]}
              alt="property-2"
              width={size.width}
              height={size.height}
              className="p-1"
            ></img>
            <img
              src={urls[3]}
              alt="property-3"
              width={size.width}
              height={size.height}
              className="p-1"
            ></img>
            <img
              src={urls[4]}
              alt="property-4"
              width={size.width}
              height={size.height}
              className="p-1"
            ></img>
          </Col>
        </Row>
        <Row className="d-flex flex-row-reverse"></Row>
      </Container>
    </>
  );
}

export default DetailPhotos;
