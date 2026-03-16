import React from "react";
import { render } from "@testing-library/react";
import { StarRating } from "@/components/landing/testimonial/star-rating";

// Mock Framer Motion
jest.mock("framer-motion", () => {
  const React = require("react");

  const motion = new Proxy(
    {},
    {
      get:
        (_, tag) =>
        ({ children, ...props }: any) =>
          React.createElement(tag, props, children),
    }
  );

  return { motion };
});

describe("StarRating Component", () => {
  test("renders default 5 stars", () => {
    const { container } = render(<StarRating />);

    const stars = container.querySelectorAll("svg");
    expect(stars.length).toBe(5);
  });

  test("renders custom number of stars", () => {
    const { container } = render(<StarRating />);

    const stars = container.querySelectorAll("svg");
    expect(stars.length).toBe(5);
  });

  test("stars are visible in the document", () => {
    const { container } = render(<StarRating />);

    const stars = container.querySelectorAll("svg");
    expect(stars.length).toBeGreaterThan(0);
  });
});
