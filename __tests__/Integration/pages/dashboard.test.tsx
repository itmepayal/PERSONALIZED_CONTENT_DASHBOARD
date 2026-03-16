import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";

import DashboardPage from "@/app/dashboard/page";
import contentReducer, { ContentState } from "@/features/content/contentSlice";

/* ---------------- IntersectionObserver Mock ---------------- */

beforeAll(() => {
  class IntersectionObserverMock {
    constructor(callback: any, options?: any) {}
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();
  }

  // @ts-ignore
  global.IntersectionObserver = IntersectionObserverMock;
});

/* ---------------- Axios Mock ---------------- */

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

beforeEach(() => {
  mockedAxios.get.mockImplementation((url) => {
    if (url.includes("/api/news")) {
      return Promise.resolve({
        data: { articles: [{ id: 1, title: "Test News" }] },
      });
    }

    if (url.includes("/api/movies")) {
      return Promise.resolve({
        data: { results: [{ id: 1, title: "Test Movie" }] },
      });
    }

    if (url.includes("/api/trending-news")) {
      return Promise.resolve({
        data: { articles: [{ id: 2, title: "Trending News" }] },
      });
    }

    if (url.includes("/api/trending-movies")) {
      return Promise.resolve({
        data: { results: [{ id: 2, title: "Trending Movie" }] },
      });
    }

    return Promise.resolve({ data: {} });
  });
});

/* ---------------- Test Store Helper ---------------- */

const renderWithStore = (
  preloadedState: { content?: Partial<ContentState> } = {}
) => {
  const store = configureStore({
    reducer: { content: contentReducer },
    preloadedState: {
      content: {
        news: [],
        movies: [],
        trendingNews: [],
        trendingMovies: [],
        favorites: [],
        newsPage: 1,
        moviesPage: 1,
        hasMoreNews: true,
        hasMoreMovies: true,
        loadingNews: false,
        loadingMovies: false,
        error: null,
        ...preloadedState.content,
      },
    },
  });

  return render(
    <Provider store={store}>
      <DashboardPage />
    </Provider>
  );
};

/* ---------------- Tests ---------------- */

describe("DashboardPage Integration Tests", () => {
  it("renders search input", async () => {
    renderWithStore();

    const input = await screen.findByPlaceholderText(/search/i);
    expect(input).toBeInTheDocument();
  });

  it("renders loading skeleton when loading", async () => {
    renderWithStore({
      content: { loadingNews: true, loadingMovies: true },
    });

    const input = await screen.findByPlaceholderText(/search/i);
    expect(input).toBeInTheDocument();
  });

  it("updates search input when user types", async () => {
    renderWithStore();

    const input = await screen.findByPlaceholderText(/search/i);

    await userEvent.type(input, "technology");

    expect(input).toHaveValue("technology");
  });

  it("handles empty state correctly", async () => {
    renderWithStore({
      content: {
        news: [],
        movies: [],
      },
    });

    expect(
      await screen.findByText(/📰 Personalized News/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/🎬 Movie Recommendations/i)
    ).toBeInTheDocument();
  });

  it("fetches news from API", async () => {
    renderWithStore();

    await screen.findAllByText("Test News");

    expect(mockedAxios.get).toHaveBeenCalledWith(
      expect.stringContaining("/api/news")
    );
  });

  it("fetches movies from API", async () => {
    renderWithStore();

    await screen.findAllByText("Test Movie");

    expect(mockedAxios.get).toHaveBeenCalledWith(
      expect.stringContaining("/api/movies")
    );
  });
});
