import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import StarRating from "../StayDetail/StarRating";

function SingleResult({ property }) {
  const propProperty = property;
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
              src={propProperty.imgsUrls[0]}
              alt="prop-img"
              className="propProperty-img"
            ></img>
          </Col>
          <Col xs={12} md={4} className="mt-2">
            <div className="prop-type">{propProperty.type}</div>
            <div className="prop-title">{propProperty.title}</div>
            <div className="prop-description">
              {propProperty.description.join(" · ")}
            </div>
          </Col>
          <Col xs={12} md={4} className="text-right">
            <StarRating
              rating={propProperty.rating}
              reviews={propProperty.reviews}
            />
            <br />
            <div className="prop-price text-right">
              ${propProperty.price.toLocaleString("en-US")} MXN /
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
