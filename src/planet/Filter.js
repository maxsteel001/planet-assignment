import React from "react";
import "./PlanetForm.css";

function Filter({ heading, filterList, handleCheck, noTopPadding }) {
  const persistCheck = (id) => {};
  return (
    <div className={`${!noTopPadding && "pt-30"} `}>
      <h1 className="heading pb-10">{heading}</h1>
      {filterList?.map((item, index) => (
        <div className="checkbox" key={item?.id}>
          <input
            type="checkbox"
            value={persistCheck(item.id)}
            onClick={(event) => {
              handleCheck(event, heading, item.id);
            }}
          />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Filter;
