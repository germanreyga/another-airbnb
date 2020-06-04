import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import PropertyCharacteristic from "./PropertyCharacteristic";
import PriceCard from "./PriceCard";
import home1 from "../../imgs/home-1.svg";
import home2 from "../../imgs/home-2.svg";
import star from "../../imgs/black-star.svg";
import tag from "../../imgs/tag.svg";
import Arrangements from "./Arrangements";

function DetailInfo({ type, description }) {
  const ownerName = "Juanito";

  return (
    <Container>
      <Row>
        <Col xs={12} md={7}>
          <div className="">
            <h5 className="mt-3">
              {type} hosted by {ownerName}
            </h5>
            <p className="font-weight-light">{description.join(" · ")}</p>
          </div>
          <hr />
          <PropertyCharacteristic
            icon={home1}
            title="Entire home"
            description="You’ll have the apartment to yourself."
          />
          <PropertyCharacteristic
            icon={star}
            title="Free parking on premises"
            description="This is one of a few places in the area that has this feature."
          />
          <PropertyCharacteristic
            icon={home2}
            title="Amenities for everyday living"
            description="The host has equipped this place for long stays - kitchen, wifi, washer, and dryer included."
          />
          <PropertyCharacteristic
            icon={tag}
            title="Free cancellation for 48 hours"
            description="After that, cancel before 4:00 PM on Aug 4 and get a full refund, minus the first 30 days and the service fee."
          />
          <PropertyCharacteristic
            icon={home1}
            title="Entire home"
            description="You’ll have the apartment to yourself."
          />
          <PropertyCharacteristic
            icon={star}
            title="Free parking on premises"
            description="This is one of a few places in the area that has this feature."
          />
          <hr />
          <Arrangements />
        </Col>
        <Col xs={12} md={5} className="p-5">
          <div className="sidebar-item">
            <div className="sticky-price-card">
              <PriceCard />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DetailInfo;
