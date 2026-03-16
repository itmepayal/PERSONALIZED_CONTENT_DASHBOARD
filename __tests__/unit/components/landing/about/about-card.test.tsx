import React from "react";
import { render, screen } from "@testing-library/react";
import { AboutCard } from "@/components/landing/about/about-card";
import { HiLightningBolt } from "react-icons/hi";

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

describe("AboutCard Component", () => {
  const props = {
    icon: HiLightningBolt,
    title: "Lightning-Fast Performance",
    description:
      "Built with speed — minimal load times and optimized rendering.",
  };

  test("renders title", () => {
    render(<AboutCard {...props} />);

    expect(screen.getByText("Lightning-Fast Performance")).toBeInTheDocument();
  });

  test("renders description", () => {
    render(<AboutCard {...props} />);

    expect(
      screen.getByText(
        "Built with speed — minimal load times and optimized rendering."
      )
    ).toBeInTheDocument();
  });

  test("renders icon", () => {
    const { container } = render(<AboutCard {...props} />);

    const icon = container.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  test("renders title as heading", () => {
    render(<AboutCard {...props} />);

    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toHaveTextContent("Lightning-Fast Performance");
  });
});
