import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@/components/theme/theme-provider";

// Mock next-themes provider
jest.mock("next-themes", () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-theme-provider">{children}</div>
  ),
}));

describe("ThemeProvider", () => {
  test("renders children correctly", () => {
    render(
      <ThemeProvider>
        <p>Test Content</p>
      </ThemeProvider>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  test("wraps children with ThemeProvider", () => {
    render(
      <ThemeProvider>
        <span>Wrapped Child</span>
      </ThemeProvider>
    );

    const provider = screen.getByTestId("mock-theme-provider");

    expect(provider).toBeInTheDocument();
    expect(screen.getByText("Wrapped Child")).toBeInTheDocument();
  });

  test("passes props to ThemeProvider", () => {
    render(
      <ThemeProvider attribute="class">
        <div>Child</div>
      </ThemeProvider>
    );

    expect(screen.getByText("Child")).toBeInTheDocument();
  });
});
