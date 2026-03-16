import React from "react";
import { render, screen } from "@testing-library/react";
import { FooterLinks } from "@/components/landing/footer/footer-links";

// Mock framer-motion
jest.mock("framer-motion", () => {
  const React = require("react");

  return {
    motion: new Proxy(
      {},
      {
        get:
          () =>
          ({ children, ...props }: any) => {
            // Remove motion-specific props
            const {
              initial,
              animate,
              variants,
              whileInView,
              viewport,
              ...rest
            } = props;

            return <div {...rest}>{children}</div>;
          },
      }
    ),
  };
});

describe("FooterLinks Component", () => {
  test("renders all section titles", () => {
    render(<FooterLinks />);

    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Resources")).toBeInTheDocument();
    expect(screen.getByText("Company")).toBeInTheDocument();
  });

  test("renders all footer links", () => {
    render(<FooterLinks />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(13);

    links.forEach((link) => {
      expect(link).toHaveAttribute("href", "#");
    });
  });

  test("all links have correct href", () => {
    render(<FooterLinks />);

    const links = screen.getAllByRole("link");

    expect(links.length).toBe(13);

    links.forEach((link) => {
      expect(link).toHaveAttribute("href", "#");
    });
  });
});
