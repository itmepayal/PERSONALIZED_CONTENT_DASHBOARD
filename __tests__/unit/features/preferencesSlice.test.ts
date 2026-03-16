import preferencesReducer, {
  setCategories,
  addCategory,
  removeCategory,
} from "@/features/preferences/preferencesSlice";

const initialState = {
  categories: ["technology"],
  loaded: false,
};

describe("preferencesSlice reducer", () => {
  test("should set categories", () => {
    const state = preferencesReducer(
      initialState,
      setCategories(["sports", "science"])
    );

    expect(state.categories).toEqual(["sports", "science"]);
    expect(state.loaded).toBe(true);
  });

  test("should add category", () => {
    const state = preferencesReducer(initialState, addCategory("health"));

    expect(state.categories).toContain("health");
  });

  test("should remove category", () => {
    const stateWithCategories = {
      ...initialState,
      categories: ["technology", "sports"],
    };

    const state = preferencesReducer(
      stateWithCategories,
      removeCategory("sports")
    );

    expect(state.categories).not.toContain("sports");
  });
});
