import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];
const planetSlice = createSlice({
  name: "planet",
  initialState,
  reducers: {},
});

export default planetSlice.reducer;
