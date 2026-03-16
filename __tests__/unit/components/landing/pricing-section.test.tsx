import React from "react";
import { render, screen } from "@testing-library/react";
import { PricingSection } from "@/components/landing/pricing-section";

// Mock Framer Motion
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

describe("PricingSection Component", () => {
  test("renders section heading", () => {
    render(<PricingSection />);

    expect(screen.getByText("Pricing plans for everyone")).toBeInTheDocument();
  });

  test("renders pricing plan names", () => {
    render(<PricingSection />);

    expect(screen.getByText("Starter")).toBeInTheDocument();
    expect(screen.getByText("Growth")).toBeInTheDocument();
    expect(screen.getByText("Scale")).toBeInTheDocument();
  });

  test("renders plan prices", () => {
    render(<PricingSection />);

    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("199")).toBeInTheDocument();
    expect(screen.getByText("399")).toBeInTheDocument();
  });

  test("renders all pricing buttons", () => {
    render(<PricingSection />);

    expect(
      screen.getByRole("button", { name: "Start for free" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Unlock full access" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Get team access" })
    ).toBeInTheDocument();
  });

  test("renders featured badge for Growth plan", () => {
    render(<PricingSection />);

    expect(screen.getByText("Popular")).toBeInTheDocument();
  });

  test("renders plan descriptions", () => {
    render(<PricingSection />);

    expect(
      screen.getByText(/Perfect for trying out PrebuiltUI/)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Best for founders and developers/)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Built for teams and agencies/)
    ).toBeInTheDocument();
  });
});
