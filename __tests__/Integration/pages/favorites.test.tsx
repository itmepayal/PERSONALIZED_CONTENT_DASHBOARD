import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import FavoritesPage from "@/app/dashboard/favorites/page";
import contentReducer, {
  ContentState,
  ContentItem,
} from "@/features/content/contentSlice";

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
      <FavoritesPage />
    </Provider>
  );
};

describe("FavoritesPage Integration Tests", () => {
  it("renders page title", () => {
    renderWithStore();
    expect(screen.getByText(/❤️ Your Favorites/i)).toBeInTheDocument();
  });

  it("shows empty state when no favorites", async () => {
    renderWithStore({ content: { favorites: [] } });

    await waitFor(() => {
      expect(
        screen.getByText(/You haven't added any favorites yet/i)
      ).toBeInTheDocument();
    });
  });

  it("renders favorite news correctly", async () => {
    const newsFavorites: ContentItem[] = [
      { id: 1, title: "Favorite News 1", url: "https://news.com/1" },
      { id: 2, title: "Favorite News 2", url: "https://news.com/2" },
    ];

    renderWithStore({ content: { favorites: newsFavorites } });

    await waitFor(() => {
      expect(screen.getByText(/📰 Favorite News/i)).toBeInTheDocument();
      expect(screen.getByText("Favorite News 1")).toBeInTheDocument();
      expect(screen.getByText("Favorite News 2")).toBeInTheDocument();
    });
  });

  it("renders favorite movies correctly", async () => {
    const movieFavorites: ContentItem[] = [
      { id: 1, name: "Favorite Movie 1", poster_path: "/poster1.jpg" },
      { id: 2, name: "Favorite Movie 2", poster_path: "/poster2.jpg" },
    ];

    renderWithStore({ content: { favorites: movieFavorites } });

    await waitFor(() => {
      expect(screen.getByText(/🎬 Favorite Movies/i)).toBeInTheDocument();
      expect(screen.getByText("Favorite Movie 1")).toBeInTheDocument();
      expect(screen.getByText("Favorite Movie 2")).toBeInTheDocument();
    });
  });

  it("renders both favorite news and movies", async () => {
    const favorites: ContentItem[] = [
      { id: 1, title: "News 1", url: "https://news.com/1" },
      { id: 2, name: "Movie 1", poster_path: "/poster1.jpg" },
    ];

    renderWithStore({ content: { favorites } });

    await waitFor(() => {
      expect(screen.getByText(/📰 Favorite News/i)).toBeInTheDocument();
      expect(screen.getByText(/🎬 Favorite Movies/i)).toBeInTheDocument();
      expect(screen.getByText("News 1")).toBeInTheDocument();
      expect(screen.getByText("Movie 1")).toBeInTheDocument();
    });
  });
});
