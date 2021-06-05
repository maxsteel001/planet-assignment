import React, { useState, useEffect } from "react";
import "./PlanetForm.css";
import axios from "axios";
import Filter from "./Filter";

function PlanetForm() {
  const baseUrl = "http://localhost:3000";
  const [list, updateList] = useState([]);
  const [shapes, updateShapes] = useState([]);
  const [colors, updateColors] = useState([]);
  const [sizes, updateSizes] = useState([]);
  useEffect(() => {
    axios.get(`${baseUrl}/planets`).then((res) => updateList(res.data));
    axios.get(`${baseUrl}/shapes`).then((res) => updateShapes(res.data));
    axios.get(`${baseUrl}/sizes`).then((res) => updateColors(res.data));
    axios.get(`${baseUrl}/colors`).then((res) => updateSizes(res.data));
  }, []);

  return (
    <div className="container px-30">
      <div className="input-container">
        <input className="width-90" />
        <button className="width-10 button-primary">
          <img src="./searchicon.png" alt="search" />
        </button>
      </div>
      <div className="flex-row">
        <div className="filter">
          <Filter heading="Colors" filterList={colors} />
          <Filter heading="Shapes" filterList={shapes} />
          <Filter heading="Sizes" filterList={sizes} />
        </div>
        <div className="list">
          {list.map((item) => (
            <div>{item.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlanetForm;
