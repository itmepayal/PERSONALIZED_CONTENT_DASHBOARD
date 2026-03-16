import { render, screen } from "@testing-library/react";
import { PageTitle } from "@/components/dashboard/common/page-title";

jest.mock("framer-motion", () => ({
  motion: {
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
  },
}));

describe("PageTitle Component", () => {
  test("renders the title text", () => {
    render(<PageTitle title="Dashboard" />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  test("renders with correct className", () => {
    render(<PageTitle title="Dashboard" />);
    const heading = screen.getByText("Dashboard");
    expect(heading).toHaveClass("text-2xl md:text-3xl font-semibold");
  });
});
