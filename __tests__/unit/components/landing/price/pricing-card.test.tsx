import React from "react";
import { render, screen } from "@testing-library/react";
import { PricingCard } from "@/components/landing/price/pricing-card";

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

describe("PricingCard Component", () => {
  const props = {
    name: "Pro Plan",
    description: "Best plan for professionals",
    price: 29,
    buttonText: "Get Started",
    subtext: "Cancel anytime",
    features: ["Unlimited Projects", "Priority Support", "Advanced Analytics"],
    featured: true,
  };

  test("renders plan name", () => {
    render(<PricingCard {...props} />);
    expect(screen.getByText("Pro Plan")).toBeInTheDocument();
  });

  test("renders description", () => {
    render(<PricingCard {...props} />);
    expect(screen.getByText("Best plan for professionals")).toBeInTheDocument();
  });

  test("renders price", () => {
    render(<PricingCard {...props} />);
    expect(screen.getByText("29")).toBeInTheDocument();
  });

  test("renders button text", () => {
    render(<PricingCard {...props} />);
    expect(
      screen.getByRole("button", { name: "Get Started" })
    ).toBeInTheDocument();
  });

  test("renders subtext", () => {
    render(<PricingCard {...props} />);
    expect(screen.getByText("Cancel anytime")).toBeInTheDocument();
  });

  test("renders all features", () => {
    render(<PricingCard {...props} />);
    props.features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  test("renders Popular badge when featured", () => {
    render(<PricingCard {...props} />);
    expect(screen.getByText("Popular")).toBeInTheDocument();
  });
});
