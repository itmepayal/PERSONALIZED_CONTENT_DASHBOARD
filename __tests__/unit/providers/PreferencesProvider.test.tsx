import { render } from "@testing-library/react";
import PreferencesProvider from "@/providers/preferences-provider";
import * as hooks from "@/store/hooks";
import { setCategories } from "@/features/preferences/preferencesSlice";

describe("PreferencesProvider", () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.spyOn(hooks, "useAppDispatch").mockReturnValue(dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("loads categories from localStorage", () => {
    const preferences = { categories: ["sports"] };

    Storage.prototype.getItem = jest
      .fn()
      .mockReturnValue(JSON.stringify(preferences));

    render(
      <PreferencesProvider>
        <div>Child</div>
      </PreferencesProvider>
    );

    expect(dispatch).toHaveBeenCalledWith(setCategories(["sports"]));
  });

  test("sets default category if no localStorage", () => {
    Storage.prototype.getItem = jest.fn().mockReturnValue(null);

    render(
      <PreferencesProvider>
        <div>Child</div>
      </PreferencesProvider>
    );

    expect(dispatch).toHaveBeenCalledWith(setCategories(["technology"]));
  });
});
