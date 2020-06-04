import React from "react";
import ArrangementCard from "./ArrangementCard";
import bed from "../../imgs/bed.svg";

function Arrangements() {
  return (
    <>
      <h5 className="mt-3">Sleeping arrangements</h5>
      <div>
        <div className="d-flex justify-content-around  mt-4">
          <ArrangementCard
            img={bed}
            type="Bedroom 1"
            description="1 queen bed"
          />
          <ArrangementCard
            img={bed}
            type="Common spaces"
            description="1 queen bed, 1 sofa bed"
          />
        </div>
      </div>
    </>
  );
}

export default Arrangements;
