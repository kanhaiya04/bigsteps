import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "./PokemonSlice";
import { typesReducer } from "./TypeSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    type: typesReducer,
  },
});
