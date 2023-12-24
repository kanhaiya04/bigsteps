import { createSlice } from "@reduxjs/toolkit";

const typesSlice = createSlice({
  name: "types",
  initialState: {
    type: "none",
  },
  reducers: {
    updateType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { updateType } = typesSlice.actions;
// export const selectType = (state) => state.types.type;

export const typesReducer = typesSlice.reducer;
