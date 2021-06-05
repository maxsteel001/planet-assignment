import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPlanets, increment } from "./planetSlice";
import "./PlanetForm.css";
import axios from "axios";
import Filter from "./Filter";

function PlanetForm() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlanets());
    dispatch(increment());
  }, []);

  const baseUrl = "http://localhost:3000";
  //const [list, updateList] = useState([]);
  const [shapesList, updateShapes] = useState([]);
  const [colorsList, updateColors] = useState([]);
  const [sizesList, updateSizes] = useState([]);
  const [selectedShape, updateSelectedShape] = useState([]);
  const [selectedSize, updateSelectedSize] = useState([]);
  const [selectedColor, updateSelectedColor] = useState([]);
  const [text, updateText] = useState("");

  useEffect(() => {
    axios.get(`${baseUrl}/shapes`).then((res) => updateShapes(res.data));
    axios.get(`${baseUrl}/colors`).then((res) => updateColors(res.data));
    axios.get(`${baseUrl}/sizes`).then((res) => updateSizes(res.data));
  }, []);

  const state = useSelector((state) => state);
  console.log(state);

  const handleCheck = (event, heading, id) => {
    const { checked } = event.target;
    switch (heading) {
      case "Colors":
        const arrColor = [...selectedColor];
        if (checked) {
          if (!arrColor.includes(id)) {
            arrColor.push(id);
          }
        } else {
          arrColor.splice(arrColor.indexOf(id), 1);
        }
        updateSelectedColor(arrColor);
        break;
      case "Shapes":
        const arrShape = [...selectedShape];
        if (checked) {
          if (!arrShape.includes(id)) {
            arrShape.push(id);
          }
        } else {
          arrShape.splice(arrShape.indexOf(id), 1);
        }
        updateSelectedShape(arrShape);
        break;
      case "Sizes":
        const arrSize = [...selectedSize];
        if (checked) {
          if (!arrSize.includes(id)) {
            arrSize.push(id);
          }
        } else {
          arrSize.splice(arrSize.indexOf(id), 1);
        }
        updateSelectedSize(arrSize);
        break;
    }
  };

  const handleChange = (event) => {
    updateText(event.target.value);
  };

  const colorString =
    selectedColor.join(",") !== "" ? `&color=${selectedColor.join(",")}` : "";

  const sizeString = selectedSize.join(",")
    ? `&size=${selectedSize.join(",")}`
    : "";

  const shapeString = selectedShape.join(",")
    ? `&shape=${selectedShape.join(",")}`
    : "";
  localStorage.setItem("color", colorString);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        `${baseUrl}/planets?q=${text}${colorString}${shapeString}${sizeString}`
      )
      .then((res) => console.log(res.data));
  };

  return (
    <div className="container px-30 ">
      <div className="pb-30">
        <form onSubmit={handleSubmit} className="input-container">
          <input className="width-90" onChange={handleChange} />
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
        <div className="list"></div>
      </div>
    </div>
  );
}

export default PlanetForm;
