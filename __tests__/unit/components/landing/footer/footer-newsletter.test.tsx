import React from "react";
import { render, screen } from "@testing-library/react";
import { FooterNewsletter } from "@/components/landing/footer/footer-newsletter";

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

describe("FooterNewsletter Component", () => {
  test("renders newsletter text", () => {
    render(<FooterNewsletter />);

    expect(
      screen.getByText("Join our newsletter for regular updates.")
    ).toBeInTheDocument();
  });

  test("renders email input field", () => {
    render(<FooterNewsletter />);

    const input = screen.getByPlaceholderText("example@email.com");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "email");
  });

  test("renders subscribe button", () => {
    render(<FooterNewsletter />);

    const button = screen.getByRole("button", { name: /subscribe/i });

    expect(button).toBeInTheDocument();
  });

  test("input and button are present together", () => {
    render(<FooterNewsletter />);

    const input = screen.getByPlaceholderText("example@email.com");
    const button = screen.getByRole("button", { name: /subscribe/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
