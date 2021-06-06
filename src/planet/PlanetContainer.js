import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PlanetForm from "./PlanetForm";
import { getPlanets } from "./planetSlice";
import axios from "axios";
function PlanetContainer() {
  const baseUrl = "http://localhost:3000";

  const [shapesList, updateShapes] = useState([]);
  const [colorsList, updateColors] = useState([]);
  const [sizesList, updateSizes] = useState([]);
  const [selectedShape, updateSelectedShape] = useState([]);
  const [selectedSize, updateSelectedSize] = useState([]);
  const [selectedColor, updateSelectedColor] = useState([]);

  const [text, updateText] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state);
  const colorString =
    selectedColor.join(",") !== "" ? `&color=${selectedColor.join(",")}` : "";
  const sizeString = selectedSize.join(",")
    ? `&size=${selectedSize.join(",")}`
    : "";
  const shapeString = selectedShape.join(",")
    ? `&shape=${selectedShape.join(",")}`
    : "";

  useEffect(() => {
    axios.get(`${baseUrl}/shapes`).then((res) => updateShapes(res.data));
    axios.get(`${baseUrl}/colors`).then((res) => updateColors(res.data));
    axios.get(`${baseUrl}/sizes`).then((res) => updateSizes(res.data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text !== "") {
      dispatch(getPlanets({ text, colorString, sizeString, shapeString }));
    }
  };
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
      default:
        break;
    }
  };
  const handleChange = (event) => {
    updateText(event.target.value);
  };
  const listDesc = (item, index) => {
    const color = colorsList.find((colors) => colors.id === item.color)?.name;
    const shape = shapesList.find((shapes) => shapes.id === item.shape)?.name;
    const size = sizesList.find((size) => size.id === item.size)?.name;
    return `The color is${color} , the size is ${size} and the shape is ${shape}`;
    console.log(color);
  };
  return (
    <div>
      <PlanetForm
        shapesList={shapesList}
        colorsList={colorsList}
        sizesList={sizesList}
        list={list}
        listDesc={listDesc}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleCheck={handleCheck}
      />
    </div>
  );
}

export default PlanetContainer;
