import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchData from "../Hooks/fetchData";

export const getPokemonData = createAsyncThunk("getData", async () => {
  const data = await fetchData();
  return data;
});

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPokemonData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.concat(action.payload);
      })
      .addCase(getPokemonData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const pokemonReducer = PokemonSlice.reducer;
