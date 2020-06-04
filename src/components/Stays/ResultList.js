import React, { useState, useEffect } from "react";
import SingleResult from "./SingleResult";
import findResults from "./_API-Calls/Find";
import FilterButtons from "./FilterButtons";

function ResultList(props) {
  let [properties, setProperties] = useState([]);

  const title = "Monthly stays in Montreal";
  const subtitle = "300+ stays · Aug 17 - Sep 14";
  const city = "Montreal, QC";

  useEffect(() => {
    setProperties(findResults());
  }, []);

  let propertyList = properties.map((property, index) => {
    return <SingleResult property={property} />;
  });

  const filtersLabels = [
    "cancellation flexibility",
    "entire place",
    "price",
    "instant book",
    "more filters",
  ];

  return (
    <>
      <div className="search-info">
        <p className="font-weight-light mt-3"> {subtitle}</p>
        <h2 className="mt-3">{title}</h2>
        <FilterButtons labels={filtersLabels} />
        <p className="mt-4">Showing you results for "{city}"</p>
      </div>
      <div></div>
      {propertyList}
    </>
  );
}

export default ResultList;
