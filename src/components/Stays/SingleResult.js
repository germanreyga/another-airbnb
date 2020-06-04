import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import StarRating from "../StayDetail/StarRating";

function SingleResult(props) {
  const property = props.property;
  const history = useHistory();

  function goToDetail() {
    history.push("/detail");
  }

  return (
    <>
      <Container className="single-result" onClick={() => goToDetail()}>
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
          <Col xs={12} md={4} className="text-right">
            <StarRating rating={property.rating} reviews={property.reviews} />
            <br />
            <div className="prop-price text-right">
              ${property.price.toLocaleString("en-US")} MXN /
              <span class="font-weight-light">month</span>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
    </>
  );
}

export default SingleResult;
