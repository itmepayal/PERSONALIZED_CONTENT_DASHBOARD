import React from "react";
import { render, screen } from "@testing-library/react";
import { AboutSection } from "@/components/landing/about-section";

// Mock framer-motion
jest.mock("framer-motion", () => {
  const React = require("react");

  const cleanProps = (props: any) => {
    const {
      initial,
      animate,
      transition,
      variants,
      whileHover,
      whileTap,
      viewport,
      ...rest
    } = props;

    return rest;
  };

  const motion = new Proxy(
    {},
    {
      get:
        (_, tag) =>
        ({ children, ...props }: any) =>
          React.createElement(tag, cleanProps(props), children),
    }
  );

  return { motion };
});

// Mock Heading component
jest.mock("@/components/common/header", () => ({
  Heading: ({ title, description }: any) => (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  ),
}));

// Mock AboutCard component
jest.mock("@/components/landing/about/about-card", () => ({
  AboutCard: ({ title, description }: any) => (
    <div data-testid="about-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  ),
}));

describe("AboutSection Component", () => {
  test("renders heading title", () => {
    render(<AboutSection />);

    expect(screen.getByText("About Us")).toBeInTheDocument();
  });

  test("renders heading description", () => {
    render(<AboutSection />);

    expect(
      screen.getByText(/A visual collection of our most recent works/i)
    ).toBeInTheDocument();
  });

  test("renders all feature cards", () => {
    render(<AboutSection />);

    const cards = screen.getAllByTestId("about-card");
    expect(cards.length).toBe(6);
  });

  test("renders specific feature title", () => {
    render(<AboutSection />);

    expect(screen.getByText("Lightning-Fast Performance")).toBeInTheDocument();
  });

  test("renders specific feature description", () => {
    render(<AboutSection />);

    expect(
      screen.getByText(
        "Built with speed — minimal load times and optimized rendering."
      )
    ).toBeInTheDocument();
  });
});
