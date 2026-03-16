import { render, screen } from "@testing-library/react";
import { ContentList } from "@/components/dashboard/common/content-list";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { ContentItem } from "@/features/content/contentSlice";

beforeAll(() => {
  class IntersectionObserverMock {
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();
  }

  (window as any).IntersectionObserver = IntersectionObserverMock;
});

jest.mock("@/store/hooks", () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(),
}));

jest.mock("@/components/dashboard/common/content-grid", () => ({
  ContentGrid: ({ items }: any) => (
    <div data-testid="content-grid">
      {items.map((i: any) => i.id).join(",")}
    </div>
  ),
}));

describe("ContentList - Unit Tests", () => {
  const mockDispatch = jest.fn();
  const sampleNews: ContentItem[] = [
    { id: 1, title: "News 1" },
    { id: 2, title: "News 2" },
  ];

  beforeEach(() => {
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useAppSelector as jest.Mock).mockReturnValue({
      news: sampleNews,
      movies: [],
      hasMoreNews: true,
      hasMoreMovies: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the section title", () => {
    render(<ContentList title="Latest News" type="news" />);
    expect(screen.getByText("Latest News")).toBeInTheDocument();
  });

  test("renders ContentGrid with items", () => {
    render(<ContentList title="Latest News" type="news" />);
    const grid = screen.getByTestId("content-grid");
    expect(grid).toHaveTextContent("1,2");
  });

  test("filters items based on search prop", () => {
    render(<ContentList title="Latest News" type="news" search="1" />);
    const grid = screen.getByTestId("content-grid");
    expect(grid).toHaveTextContent("1");
    expect(grid).not.toHaveTextContent("2");
  });

  test("shows end message when hasMore is false", () => {
    (useAppSelector as jest.Mock).mockReturnValue({
      news: sampleNews,
      movies: [],
      hasMoreNews: false,
      hasMoreMovies: true,
    });

    render(<ContentList title="Latest News" type="news" />);
    expect(screen.getByText(/🎉 You reached the end/)).toBeInTheDocument();
  });
});
