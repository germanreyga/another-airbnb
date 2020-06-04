import React from "react";
import { Card } from "react-bootstrap";

function ArrangementCard({ img, type, description }) {
  return (
    <Card className="text-left" style={{ maxWidth: "12em", minWidth: "12em" }}>
      <Card.Body>
        <img src={img} className="arrangement-img" alt="bed" />
        <p>{type}</p>
        <p className="font-weight-light">{description}</p>
      </Card.Body>
    </Card>
  );
}

export default ArrangementCard;
