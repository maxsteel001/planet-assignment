import React from "react";
import "./PlanetForm.css";

function Filter({
  heading,
  filterList,
  handleCheck,
  noTopPadding,
  allList,
  selectedColor,
}) {
  const checkValue = (id) => {
    const x = selectedColor?.find((item) => item.id === id);
    console.log(x, selectedColor);
  };

  return (
    <div className={`${!noTopPadding && "pt-30"} `}>
      <h1 className="heading pb-10">{heading}</h1>
      {filterList?.map((item, index) => (
        <div className="checkbox" key={item?.id}>
          <input
            //checked={}
            type="checkbox"
            onClick={(event) => {
              handleCheck(event, heading, item.id);
              checkValue(item.id);
            }}
          />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Filter;
