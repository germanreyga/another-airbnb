import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import star from "../../imgs/star.svg";

function SingleResult(props) {
  const property = props.property;

  return (
    <>
      <Container>
        <Container>
          <Row>
            <Col xs={12} md={4} className="text-center">
              <img
                src={property.imgsUrls[0]}
                alt="prop-img"
                className="property-img"
              ></img>
            </Col>
            <Col xs={12} md={4} className="mt-2">
              <div className="prop-type">{property.type}</div>
              <div className="prop-title">{property.title}</div>
              <div className="prop-description">
                {property.description.join(" · ")}
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="prop-review text-right">
                <img src={star} className="star-review" alt="red-star" />{" "}
                {property.rating} ({property.reviews})
              </div>
              <br />
              <div className="prop-price text-right">
                ${property.price.toLocaleString("en-US")} MXN /
                <span class="font-weight-light">month</span>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <hr />
    </>
  );
}

export default SingleResult;
