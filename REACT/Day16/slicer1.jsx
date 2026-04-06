import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchData = createAsyncThunk(
  "coin/fetch",
  async (args, thunkAPI) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`
      );

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const slicer1 = createSlice({
  name: "slice1",
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(FetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(FetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      .addCase(FetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default slicer1.reducer;