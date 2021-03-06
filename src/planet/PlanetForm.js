import React from "react";
import "./PlanetForm.css";
import Filter from "./Filter";

function PlanetForm({
  handleCheck,
  handleChange,
  list,
  text,
  colorsList,
  shapesList,
  sizesList,
  handleSubmit,
  listDesc,
}) {
  return (
    <div className="container">
      <div className="pb-30">
        <form onSubmit={handleSubmit} className="input-container">
          <input className="width-90" onChange={handleChange} value={text} />
          <button
            type="submit"
            className="width-10 button-primary"
            onClick={handleSubmit}
          >
            <img src="./searchicon.png" alt="search" />
          </button>
        </form>
      </div>
      <div className="flex-row">
        <div className="filter">
          <Filter
            noTopPadding
            heading="Colors"
            filterList={colorsList}
            handleCheck={handleCheck}
          />
          <Filter
            heading="Shapes"
            filterList={shapesList}
            handleCheck={handleCheck}
          />
          <Filter
            heading="Sizes"
            filterList={sizesList}
            handleCheck={handleCheck}
          />
        </div>
        <div className="list">
          {list?.planet?.planets.map((item, index) => (
            <div key={`name-${index}`} className="card">
              <p className="listHeading">{item.name}</p>
              <p className="listDesc">{listDesc(item, index)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlanetForm;
