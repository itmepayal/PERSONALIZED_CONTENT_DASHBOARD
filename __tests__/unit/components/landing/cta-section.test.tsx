import React from "react";
import { render, screen } from "@testing-library/react";
import { CTASection } from "@/components/landing/cta-section";

// Mock Framer Motion
jest.mock("framer-motion", () => {
  const React = require("react");

  const cleanProps = (props: any) => {
    const {
      initial,
      animate,
      transition,
      whileHover,
      whileTap,
      variants,
      viewport,
      ...rest
    } = props;

    return rest;
  };

  const motion = new Proxy(
    {},
    {
      get: (_, tag) => {
        return ({ children, ...props }: any) =>
          React.createElement(tag, cleanProps(props), children);
      },
    }
  );

  return { motion };
});

describe("CTASection Component", () => {
  test("renders section element", () => {
    const { container } = render(<CTASection />);
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  test("renders badge text", () => {
    render(<CTASection />);
    expect(screen.getByText("Community & Support")).toBeInTheDocument();
  });

  test("renders main heading", () => {
    render(<CTASection />);
    expect(
      screen.getByText(/Join 10,000\+ AI Influencers/i)
    ).toBeInTheDocument();
  });

  test("renders sub heading text", () => {
    render(<CTASection />);
    expect(screen.getByText(/in the AI Community/i)).toBeInTheDocument();
  });

  test("renders description text", () => {
    render(<CTASection />);
    expect(
      screen.getByText("Unlock all our free resources instantly.")
    ).toBeInTheDocument();
  });

  test("renders Get Started button", () => {
    render(<CTASection />);
    const button = screen.getByRole("button", { name: /get started/i });
    expect(button).toBeInTheDocument();
  });
});
