import { render, screen } from "@testing-library/react";
import { StarRating } from "@/components/landing/home/star-rating";
import "@testing-library/jest-dom";

// Mock framer-motion to avoid errors about whileHover/animate/etc
jest.mock("framer-motion", () => {
  const React = require("react");

  // omit motion props to prevent warnings in tests
  const omitMotionProps = (props: any) => {
    const { initial, animate, transition, whileHover, whileTap, ...rest } =
      props;
    return rest;
  };

  return {
    motion: {
      svg: ({ children, ...props }: any) => (
        <svg {...omitMotionProps(props)}>{children}</svg>
      ),
      div: ({ children, ...props }: any) => (
        <div {...omitMotionProps(props)}>{children}</div>
      ),
    },
  };
});

describe("StarRating Component", () => {
  it("renders 5 stars", () => {
    render(<StarRating />);
    const stars = screen.getAllByTestId("star");
    expect(stars.length).toBe(5);
  });

  it("each star has the correct class and aria-hidden attribute", () => {
    render(<StarRating />);
    const stars = screen.getAllByTestId("star");

    stars.forEach((star) => {
      expect(star).toHaveClass(
        "lucide lucide-star text-transparent fill-[#615FFF]"
      );
      expect(star).toHaveAttribute("aria-hidden", "true");
    });
  });

  it("renders a path inside each star", () => {
    render(<StarRating />);
    const stars = screen.getAllByTestId("star");

    stars.forEach((star) => {
      expect(star.querySelector("path")).toBeInTheDocument();
    });
  });
});
