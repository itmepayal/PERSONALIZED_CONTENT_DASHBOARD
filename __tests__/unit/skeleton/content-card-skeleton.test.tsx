import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ContentCardSkeleton } from "@/skeleton/ContentCardSkeleton";

describe("ContentCardSkeleton", () => {
  test("renders the skeleton component", () => {
    const { container } = render(<ContentCardSkeleton />);

    expect(container.firstChild).toBeInTheDocument();
  });

  test("has loading animation class", () => {
    const { container } = render(<ContentCardSkeleton />);

    const skeleton = container.firstChild as HTMLElement;

    expect(skeleton).toHaveClass("animate-pulse");
  });

  test("renders placeholder elements", () => {
    const { container } = render(<ContentCardSkeleton />);

    const placeholders = container.querySelectorAll("div");

    expect(placeholders.length).toBeGreaterThan(4);
  });
});
