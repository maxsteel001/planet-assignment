import React from "react";
import "./PlanetForm.css";

function Filter({ heading, filterList }) {
  return (
    <div className="pt-30">
      <h1 className="heading text-">{heading}</h1>
      {filterList?.map((item) => (
        <div className="checkbox">
          <input type="checkbox" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Filter;
