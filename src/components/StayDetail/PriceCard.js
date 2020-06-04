import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import StarRating from "./StarRating";

function PriceCard() {
  return (
    <Card className="shadow-lg text-center price-card">
      <Card.Body>
        <div class="d-flex justify-content-between">
          <p>
            <b className="price-before mr-1">$20,019</b>
            <span>$16,015/ month</span>
          </p>
          <StarRating rating={"5.0"} reviews={32} />
        </div>

        <ButtonGroup aria-label="Basic example" className="check-group">
          <Button variant="light" className="check-btn">
            Check-in
          </Button>
          <Button variant="light" className="check-btn">
            Checkout
          </Button>
        </ButtonGroup>
        <Button variant="light" className="guests-btn">
          Guests
        </Button>
        <br />
        <Button variant="light" className="reserve-btn btn-block">
          Reserve
        </Button>
        <p className="font-weight-light mt-3">You won't be charged yet</p>
        <div className="font-weight-light">
          <div class="d-flex justify-content-between">
            <p>
              <u>Accomodation</u>
            </p>
            <p>$22,973</p>
          </div>
          <div class="d-flex justify-content-between">
            <p>
              <u>20% monthly price discount</u>
            </p>
            <p>
              <b className="text-success">-$4,595</b>
            </p>
          </div>
          <div class="d-flex justify-content-between">
            <p>
              <u>Service fee</u>
            </p>
            <p>$1,547</p>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <p>
              <b>Total</b>
            </p>
            <p>
              <b>$19,925</b>
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PriceCard;
