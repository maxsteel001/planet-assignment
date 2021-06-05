import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPlanets = createAsyncThunk("planet/getPlanet", async () => {
  const response = await axios.get("http://localhost:3000/planets");
  return response.payload;
});

const initialState = {
  planets: [],
};
const planetSlice = createSlice({
  name: "planet",
  initialState,
  reducers: {
    increment: (state, action) => {
      // console.log(state, action);
    },
  },
  extraReducers: {
    [getPlanets.fulfilled]: (state, action) => {
      state.planets = ["test"];
    },
  },
});
export const { increment } = planetSlice.actions;
export default planetSlice.reducer;
