import contentReducer, {
  addFavorite,
  removeFavorite,
  resetNews,
  addRealtimeNews,
} from "@/features/content/contentSlice";

const initialState = {
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
};

describe("contentSlice reducer", () => {
  test("should return initial state", () => {
    expect(contentReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  test("should add favorite", () => {
    const item = { id: 1, title: "Test News" };

    const state = contentReducer(initialState, addFavorite(item));

    expect(state.favorites.length).toBe(1);
    expect(state.favorites[0].title).toBe("Test News");
  });

  test("should remove favorite", () => {
    const stateWithFavorite = {
      ...initialState,
      favorites: [{ id: 1, title: "Test News" }],
    };

    const state = contentReducer(stateWithFavorite, removeFavorite(1));

    expect(state.favorites.length).toBe(0);
  });

  test("should reset news", () => {
    const stateWithNews = {
      ...initialState,
      news: [{ id: 1, title: "Old News" }],
      newsPage: 5,
    };

    const state = contentReducer(stateWithNews, resetNews());

    expect(state.news).toEqual([]);
    expect(state.newsPage).toBe(1);
  });

  test("should add realtime news", () => {
    const item = { id: 2, title: "Realtime News" };

    const state = contentReducer(initialState, addRealtimeNews(item));

    expect(state.news[0].title).toBe("Realtime News");
  });
});
