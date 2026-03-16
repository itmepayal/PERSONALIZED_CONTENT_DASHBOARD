import React from "react";
import { render, screen } from "@testing-library/react";
import { FooterBottom } from "@/components/landing/footer/footer-bottom";

// Mock SocialIcons
jest.mock("@/components/landing/footer/social-Icons", () => ({
  SocialIcons: () => <div data-testid="social-icons" />,
}));

// Mock Framer Motion
jest.mock("framer-motion", () => {
  const React = require("react");

  const cleanProps = (props: any) => {
    const {
      whileHover,
      whileTap,
      whileInView,
      initial,
      animate,
      variants,
      transition,
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

describe("FooterBottom Component", () => {
  test("renders copyright text with current year", () => {
    const year = new Date().getFullYear();

    render(<FooterBottom />);

    expect(screen.getByText(`© ${year}`)).toBeInTheDocument();
  });

  test("renders the author name", () => {
    render(<FooterBottom />);

    expect(screen.getByText("Payal Yadav")).toBeInTheDocument();
  });

  test("renders SocialIcons component", () => {
    render(<FooterBottom />);

    expect(screen.getByTestId("social-icons")).toBeInTheDocument();
  });
});
