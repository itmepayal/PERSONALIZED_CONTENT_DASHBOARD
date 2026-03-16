import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// --------------------
// Types
// --------------------
export interface ContentItem {
  id: string | number;
  title?: string;
  name?: string;
  text?: string;
  description?: string;
  overview?: string;
  url?: string;
  urlToImage?: string;
  poster_path?: string;
  source?: { name: string };
  publishedAt?: string;
}

interface ContentState {
  news: ContentItem[];
  movies: ContentItem[];
  trendingNews: ContentItem[];
  trendingMovies: ContentItem[];
  favorites: ContentItem[];

  newsPage: number;
  moviesPage: number;
  hasMoreNews: boolean;
  hasMoreMovies: boolean;
  loadingNews: boolean;
  loadingMovies: boolean;
  error: string | null;
}

// --------------------
// LocalStorage helpers
// --------------------
const loadFavorites = (): ContentItem[] => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  }
  return [];
};

const saveFavorites = (favorites: ContentItem[]) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (error) {
      console.error("Failed to save favorites:", error);
    }
  }
};

// --------------------
// Normalize Content
// --------------------
const normalizeContentItem = (item: any): ContentItem => {
  return {
    ...item,
    id:
      item.id ??
      item.url ??
      `${item.source?.name}-${item.title}-${item.publishedAt}`,
  };
};

// --------------------
// Initial State
// --------------------
const initialState: ContentState = {
  news: [],
  movies: [],
  trendingNews: [],
  trendingMovies: [],
  favorites: loadFavorites(),

  newsPage: 1,
  moviesPage: 1,
  hasMoreNews: true,
  hasMoreMovies: true,
  loadingNews: false,
  loadingMovies: false,
  error: null,
};

// --------------------
// Async Thunks
// --------------------

// NEWS
export const fetchNews = createAsyncThunk(
  "content/fetchNews",
  async (_, { getState }) => {
    const state = getState() as { content: ContentState };
    const page = state.content.newsPage;

    const cate = JSON.parse(localStorage.getItem("preferences") || "{}");
    const category = cate?.categories?.[0] || "technology";

    const res = await axios.get(`/api/news?category=${category}&page=${page}`);

    return res.data.articles.map(normalizeContentItem) as ContentItem[];
  }
);

// MOVIES
export const fetchMovies = createAsyncThunk(
  "content/fetchMovies",
  async (_, { getState }) => {
    const state = getState() as { content: ContentState };
    const page = state.content.moviesPage;
    const res = await axios.get(`/api/movies?page=${page}`);
    return res.data.results.map(normalizeContentItem) as ContentItem[];
  }
);

// TRENDING NEWS
export const fetchTrendingNews = createAsyncThunk(
  "content/fetchTrendingNews",
  async () => {
    const res = await axios.get("/api/trending-news");
    return res.data.articles.map(normalizeContentItem) as ContentItem[];
  }
);

// TRENDING MOVIES
export const fetchTrendingMovies = createAsyncThunk(
  "content/fetchTrendingMovies",
  async () => {
    const res = await axios.get(`/api/trending-movies`);
    return res.data.results.map(normalizeContentItem) as ContentItem[];
  }
);

// --------------------
// Slice
// --------------------
const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    // FAVORITES
    addFavorite(state, action: PayloadAction<ContentItem>) {
      if (
        !state.favorites.find((f) => String(f.id) === String(action.payload.id))
      ) {
        state.favorites.push(action.payload);
        saveFavorites(state.favorites);
      }
    },

    removeFavorite(state, action: PayloadAction<string | number>) {
      state.favorites = state.favorites.filter(
        (item) => String(item.id) !== String(action.payload)
      );
      saveFavorites(state.favorites);
    },

    // RESET NEWS
    resetNews(state) {
      state.news = [];
      state.newsPage = 1;
      state.hasMoreNews = true;
      state.error = null;
    },

    // REALTIME NEWS
    addRealtimeNews(state, action: PayloadAction<ContentItem>) {
      if (!state.news.find((n) => String(n.id) === String(action.payload.id))) {
        state.news.unshift(action.payload);
        state.trendingNews.unshift(action.payload);
      }
    },
  },

  extraReducers: (builder) => {
    builder
      // NEWS
      .addCase(fetchNews.pending, (state) => {
        state.loadingNews = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loadingNews = false;
        state.news = [...state.news, ...action.payload];
        state.newsPage += 1;
        state.hasMoreNews = action.payload.length > 0;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loadingNews = false;
        state.error = action.error.message || "Error fetching news";
      })

      // MOVIES
      .addCase(fetchMovies.pending, (state) => {
        state.loadingMovies = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loadingMovies = false;
        state.movies = [...state.movies, ...action.payload];
        state.moviesPage += 1;
        state.hasMoreMovies = action.payload.length > 0;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loadingMovies = false;
        state.error = action.error.message || "Error fetching movies";
      })

      // TRENDING NEWS
      .addCase(fetchTrendingNews.fulfilled, (state, action) => {
        state.trendingNews = action.payload;
      })

      // TRENDING MOVIES
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.trendingMovies = action.payload;
      });
  },
});

// --------------------
// Export Actions
// --------------------
export const { addFavorite, removeFavorite, resetNews, addRealtimeNews } =
  contentSlice.actions;

export default contentSlice.reducer;
