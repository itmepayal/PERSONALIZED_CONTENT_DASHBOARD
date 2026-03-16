import { render, screen } from "@testing-library/react";
import { ContentGrid } from "@/components/dashboard/common/content-grid";

jest.mock("@/components/dashboard/common/content-card", () => ({
  ContentCard: ({ item }: any) => (
    <div data-testid="content-card">{item.title}</div>
  ),
}));

jest.mock("@/skeleton/ContentCardSkeleton", () => ({
  ContentCardSkeleton: () => <div data-testid="skeleton" />,
}));

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: any) => <div>{children}</div>,
  },
  Reorder: {
    Group: ({ children }: any) => <div>{children}</div>,
    Item: ({ children }: any) => <div>{children}</div>,
  },
}));

describe("ContentGrid", () => {
  const mockItems = [
    { id: 1, title: "Article 1" },
    { id: 2, title: "Article 2" },
    { id: 3, title: "Article 3" },
  ];

  test("renders skeletons when loading", () => {
    render(<ContentGrid items={[]} loading skeletonCount={4} />);

    const skeletons = screen.getAllByTestId("skeleton");

    expect(skeletons.length).toBe(4);
  });

  test("renders content cards when not loading", () => {
    render(<ContentGrid items={mockItems as any} loading={false} />);

    const cards = screen.getAllByTestId("content-card");

    expect(cards.length).toBe(3);
  });

  test("renders correct content titles", () => {
    render(<ContentGrid items={mockItems as any} loading={false} />);

    expect(screen.getByText("Article 1")).toBeInTheDocument();
    expect(screen.getByText("Article 2")).toBeInTheDocument();
    expect(screen.getByText("Article 3")).toBeInTheDocument();
  });

  test("renders empty state when no items", () => {
    render(<ContentGrid items={[]} loading={false} />);

    const cards = screen.queryAllByTestId("content-card");

    expect(cards.length).toBe(0);
  });
});
