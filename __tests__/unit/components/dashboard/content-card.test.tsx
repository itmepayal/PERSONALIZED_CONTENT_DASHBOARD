import { render, screen, fireEvent } from "@testing-library/react";
import { ContentCard } from "@/components/dashboard/common/content-card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addFavorite, removeFavorite } from "@/features/content/contentSlice";

// Mock Redux hooks
jest.mock("@/store/hooks", () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: any) => <div>{children}</div>,
  },
}));

describe("ContentCard Component", () => {
  const dispatch = jest.fn();

  const mockItem = {
    id: "1",
    title: "Test Article",
    description: "Test description",
    url: "https://example.com",
    urlToImage: "https://example.com/image.jpg",
    source: { name: "BBC" },
  };

  beforeEach(() => {
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);

    (useAppSelector as jest.Mock).mockImplementation((selector) =>
      selector({
        content: { favorites: [] },
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders title", () => {
    render(<ContentCard item={mockItem as any} />);

    expect(screen.getByText("Test Article")).toBeInTheDocument();
  });

  test("renders description", () => {
    render(<ContentCard item={mockItem as any} />);

    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  test("renders source badge", () => {
    render(<ContentCard item={mockItem as any} />);

    expect(screen.getByText("BBC")).toBeInTheDocument();
  });

  test("renders image", () => {
    render(<ContentCard item={mockItem as any} />);

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "https://example.com/image.jpg");
  });

  test("renders read article link", () => {
    render(<ContentCard item={mockItem as any} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  test("dispatches addFavorite when clicking favorite button", () => {
    render(<ContentCard item={mockItem as any} />);

    const button = screen.getAllByRole("button")[0];

    fireEvent.click(button);

    expect(dispatch).toHaveBeenCalledWith(addFavorite(mockItem));
  });

  test("dispatches removeFavorite when item is already favorited", () => {
    (useAppSelector as jest.Mock).mockImplementation((selector) =>
      selector({
        content: { favorites: [mockItem] },
      })
    );

    render(<ContentCard item={mockItem as any} />);

    const button = screen.getAllByRole("button")[0];

    fireEvent.click(button);

    expect(dispatch).toHaveBeenCalledWith(removeFavorite(mockItem.id));
  });

  test("uses placeholder image when no image provided", () => {
    const itemWithoutImage = {
      ...mockItem,
      urlToImage: null,
      poster_path: null,
    };

    render(<ContentCard item={itemWithoutImage as any} />);

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/images/placeholder.png");
  });

  test("uses fallback title", () => {
    const itemWithoutTitle = {
      ...mockItem,
      title: "",
      name: "",
    };

    render(<ContentCard item={itemWithoutTitle as any} />);

    expect(screen.getByText("Untitled")).toBeInTheDocument();
  });

  test("uses fallback description", () => {
    const itemWithoutDescription = {
      ...mockItem,
      description: "",
      overview: "",
    };

    render(<ContentCard item={itemWithoutDescription as any} />);

    expect(screen.getByText("No description")).toBeInTheDocument();
  });
});
