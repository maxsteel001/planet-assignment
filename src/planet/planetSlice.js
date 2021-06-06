import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPlanets = createAsyncThunk(
  "planet/getPlanet",
  async ({ text, colorString, sizeString, shapeString }) => {
    const response = await axios.get(
      `http://localhost:3000/planets?q=${text}${colorString}${sizeString}${shapeString}`
    );
    return response;
  }
);

const initialState = {
  planets: [],
};
const planetSlice = createSlice({
  name: "planet",
  initialState,
  reducers: {},
  extraReducers: {
    [getPlanets.fulfilled]: (state, action) => {
      state.planets = action?.payload?.data;
    },
  },
});
export const { increment } = planetSlice.actions;
export default planetSlice.reducer;
