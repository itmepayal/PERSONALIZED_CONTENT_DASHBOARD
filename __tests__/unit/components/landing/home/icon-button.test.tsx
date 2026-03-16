import { render, screen } from "@testing-library/react";
import { IconButton } from "@/components/landing/home/icon-button";
import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

jest.mock("next/link", () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>;
});

describe("IconButton", () => {
  it("renders with correct text and icon", () => {
    render(<IconButton text="Click Me" icon="/icon.svg" href="/test" />);

    expect(screen.getByText("Click Me")).toBeInTheDocument();

    const img = screen.getByAltText("Click Me") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain("/icon.svg");

    const link = screen.getByRole("link") as HTMLAnchorElement;
    expect(link).toHaveAttribute("href", "/test");
  });

  it("uses default href if not provided", () => {
    render(<IconButton text="Default Link" icon="/icon.svg" />);
    const link = screen.getByRole("link") as HTMLAnchorElement;
    expect(link).toHaveAttribute("href", "#");
  });
});
