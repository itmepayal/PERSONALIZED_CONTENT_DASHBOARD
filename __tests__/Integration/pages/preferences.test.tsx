import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import preferencesReducer from "@/features/preferences/preferencesSlice";
import Preferences from "@/components/dashboard/preferences/preferences";

interface PreferencesState {
  categories: string[];
  loaded: boolean;
}

function renderWithStore(
  ui: React.ReactNode,
  preloadedState?: { preferences: PreferencesState }
) {
  const store = configureStore({
    reducer: { preferences: preferencesReducer },
    preloadedState: preloadedState || {
      preferences: {
        categories: ["technology"], // match slice default
        loaded: true,
      },
    },
  });

  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

beforeAll(() => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    },
    writable: true,
  });
});

describe("Preferences Component", () => {
  it("renders all categories", () => {
    renderWithStore(<Preferences />);

    const categories = [
      "technology",
      "business",
      "sports",
      "health",
      "science",
      "entertainment",
    ];

    categories.forEach((cat) => {
      expect(screen.getByText(cat)).toBeInTheDocument();
    });
  });

  it("toggles category selection (single selection)", () => {
    const { store } = renderWithStore(<Preferences />);

    const tech = screen.getByText("technology");
    const sports = screen.getByText("sports");

    expect(store.getState().preferences.categories).toEqual(["technology"]);

    fireEvent.click(sports);

    expect(store.getState().preferences.categories).toEqual(["sports"]);

    fireEvent.click(sports);

    expect(store.getState().preferences.categories).toEqual([]);
  });

  it("applies active styling when selected", () => {
    renderWithStore(<Preferences />, {
      preferences: {
        categories: ["sports"],
        loaded: true,
      },
    });

    const sportsBadge = screen.getByText("sports");

    expect(sportsBadge).toHaveClass("bg-primary");
  });
});
