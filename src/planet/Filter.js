import React from "react";
import "./PlanetForm.css";

function Filter({ heading, filterList, handleCheck, noTopPadding }) {
  const persistCheck = (event, id, name) => {
    const { checked } = event.target;
    //  console.log(checked);
    localStorage.setItem(name, checked);
    if (heading === "Colors") {
    }
  };
  const colorCheck = localStorage.getItem("selectedColorLocal")?.split(",");

  //console.log(colorCheck);
  return (
    <div className={`${!noTopPadding && "pt-30"} `}>
      <h1 className="heading pb-10">{heading}</h1>
      {filterList?.map((item, index) => (
        <div className="checkbox" key={item?.id}>
          {console.log(localStorage.getItem(item.name), item.name)}
          <input
            type="checkbox"
            //checked={localStorage.getItem(item.name) === "true" ? true : false}
            onClick={(event) => {
              handleCheck(event, heading, item.id);
              persistCheck(event, item.id, item.name);
            }}
          />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Filter;
