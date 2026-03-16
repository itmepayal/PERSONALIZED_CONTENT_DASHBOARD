import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PreferencesState {
  categories: string[];
  loaded: boolean;
}

const initialState: PreferencesState = {
  categories: ["technology"],
  loaded: false,
};

const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<string[]>) {
      state.categories = action.payload;
      state.loaded = true;

      if (typeof window !== "undefined") {
        localStorage.setItem(
          "preferences",
          JSON.stringify({ categories: action.payload })
        );
      }
    },

    addCategory(state, action: PayloadAction<string>) {
      if (!state.categories.includes(action.payload)) {
        state.categories.push(action.payload);

        if (typeof window !== "undefined") {
          localStorage.setItem(
            "preferences",
            JSON.stringify({ categories: state.categories })
          );
        }
      }
    },

    removeCategory(state, action: PayloadAction<string>) {
      state.categories = state.categories.filter(
        (cat) => cat !== action.payload
      );

      if (typeof window !== "undefined") {
        localStorage.setItem(
          "preferences",
          JSON.stringify({ categories: state.categories })
        );
      }
    },
  },
});

export const { setCategories, addCategory, removeCategory } =
  preferencesSlice.actions;

export default preferencesSlice.reducer;
