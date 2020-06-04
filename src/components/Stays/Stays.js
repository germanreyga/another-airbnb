import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LocationMap from "./LocationMap";
import ResultList from "./ResultList";

function Stays(props) {
  return (
    <Container className="box-container">
      <Row>
        <Col xs={12} md={7}>
          <ResultList />
        </Col>
        <Col xs={12} md={5} className="pad-0">
          <LocationMap className="sidebar-item" />
        </Col>
      </Row>
    </Container>
  );
}

export default Stays;
