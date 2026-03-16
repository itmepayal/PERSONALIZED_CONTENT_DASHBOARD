import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";

import TrendingPage from "@/app/dashboard/trending/page";
import contentReducer, {
  ContentState,
  ContentItem,
} from "@/features/content/contentSlice";
import * as contentSlice from "@/features/content/contentSlice";

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

// --------------------
// Helper to render with store
// --------------------
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

  return {
    store,
    ...render(
      <Provider store={store}>
        <TrendingPage />
      </Provider>
    ),
  };
};

// --------------------
// Tests
// --------------------
describe("TrendingPage Integration Tests", () => {
  it("renders page title", () => {
    renderWithStore();
    expect(screen.getByText(/🔥 Trending Today/i)).toBeInTheDocument();
  });

  it("shows empty state when no trending content", async () => {
    renderWithStore({
      content: {
        trendingNews: [],
        trendingMovies: [],
        loadingNews: false,
        loadingMovies: false,
      },
    });

    await waitFor(() => {
      expect(
        screen.getByText(/No trending news available right now/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/No trending movies available right now/i)
      ).toBeInTheDocument();
    });
  });

  it("renders trending news correctly", async () => {
    const trendingNews: ContentItem[] = [
      { id: 1, title: "Trending News 1", url: "https://news.com/1" },
      { id: 2, title: "Trending News 2", url: "https://news.com/2" },
    ];

    renderWithStore({ content: { trendingNews, trendingMovies: [] } });

    await waitFor(() => {
      expect(screen.getByText(/📰 Trending News/i)).toBeInTheDocument();
      expect(screen.getByText("Trending News 1")).toBeInTheDocument();
      expect(screen.getByText("Trending News 2")).toBeInTheDocument();
    });
  });

  it("renders trending movies correctly", async () => {
    const trendingMovies: ContentItem[] = [
      { id: 1, name: "Trending Movie 1", poster_path: "/poster1.jpg" },
      { id: 2, name: "Trending Movie 2", poster_path: "/poster2.jpg" },
    ];

    renderWithStore({ content: { trendingNews: [], trendingMovies } });

    await waitFor(() => {
      expect(screen.getByText(/🎬 Trending Movies/i)).toBeInTheDocument();
      expect(screen.getByText("Trending Movie 1")).toBeInTheDocument();
      expect(screen.getByText("Trending Movie 2")).toBeInTheDocument();
    });
  });

  it("renders both trending news and movies", async () => {
    const trendingNews: ContentItem[] = [
      { id: 1, title: "Trending News 1", url: "https://news.com/1" },
    ];
    const trendingMovies: ContentItem[] = [
      { id: 2, name: "Trending Movie 1", poster_path: "/poster1.jpg" },
    ];

    renderWithStore({ content: { trendingNews, trendingMovies } });

    await waitFor(() => {
      expect(screen.getByText(/📰 Trending News/i)).toBeInTheDocument();
      expect(screen.getByText(/🎬 Trending Movies/i)).toBeInTheDocument();
      expect(screen.getByText("Trending News 1")).toBeInTheDocument();
      expect(screen.getByText("Trending Movie 1")).toBeInTheDocument();
    });
  });

  it("dispatches fetchTrendingNews and fetchTrendingMovies on mount", () => {
    const fetchTrendingNewsSpy = jest.spyOn(contentSlice, "fetchTrendingNews");
    const fetchTrendingMoviesSpy = jest.spyOn(
      contentSlice,
      "fetchTrendingMovies"
    );

    renderWithStore();

    expect(fetchTrendingNewsSpy).toHaveBeenCalled();
    expect(fetchTrendingMoviesSpy).toHaveBeenCalled();
  });
});
