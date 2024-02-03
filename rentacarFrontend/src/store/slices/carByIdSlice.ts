import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import CarService from "../../services/CarService/CarService";
interface CarState {
  car: [];
}
const initialState: CarState = {
  car: [],
};

export const getCar = createAsyncThunk("getCountry", async (id: number) => {
  const service = new CarService();
  const response = await service.getByIdCar(id);
  return response.data.products;
});

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCar.fulfilled, (state, action) => {
      state.car = action.payload;
    });
  },
});

export const carReducer = carSlice.reducer;
