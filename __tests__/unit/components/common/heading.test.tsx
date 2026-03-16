import { render, screen } from "@testing-library/react";
import { Heading } from "@/components/common/header";

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    h2: ({ children }: any) => <h2>{children}</h2>,
    div: ({ children }: any) => <div>{children}</div>,
    p: ({ children }: any) => <p>{children}</p>,
  },
}));

describe("Heading Component", () => {
  test("renders title correctly", () => {
    render(<Heading title="Dashboard" />);

    const title = screen.getByText("Dashboard");
    expect(title).toBeInTheDocument();
  });

  test("renders description when provided", () => {
    render(
      <Heading
        title="Dashboard"
        description="Your personalized content dashboard"
      />
    );

    const description = screen.getByText("Your personalized content dashboard");

    expect(description).toBeInTheDocument();
  });

  test("does not render description when not provided", () => {
    render(<Heading title="Dashboard" />);

    const description = screen.queryByText(
      "Your personalized content dashboard"
    );

    expect(description).not.toBeInTheDocument();
  });

  test("renders heading element", () => {
    render(<Heading title="Dashboard" />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
  });
});
