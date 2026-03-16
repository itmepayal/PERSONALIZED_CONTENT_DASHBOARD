import React from "react";
import { render, screen } from "@testing-library/react";
import { HomeSection } from "@/components/landing/home-section";

// Mock framer-motion to strip animation props
jest.mock("framer-motion", () => {
  const React = require("react");

  const motion = new Proxy(
    {},
    {
      get: (_target, key: string) => {
        return ({
          children,
          initial,
          animate,
          transition,
          whileHover,
          whileTap,
          ...props
        }: any) => {
          // Remove motion-specific props before passing to DOM
          return React.createElement(key, props, children);
        };
      },
    }
  );

  return { motion };
});

// Mock all child components
jest.mock("@/components/landing/home/star-rating", () => ({
  StarRating: () => <div data-testid="star-rating" />,
}));

jest.mock("@/components/landing/home/avatar-group", () => ({
  AvatarGroup: () => <div data-testid="avatar-group" />,
}));

jest.mock("@/components/landing/home/navbar", () => ({
  Navbar: () => <div data-testid="navbar" />,
}));

jest.mock("@/components/landing/home/brand-logos", () => ({
  BrandLogos: () => <div data-testid="brand-logos" />,
}));

describe("HomeSection Component", () => {
  it("renders all main elements", () => {
    render(<HomeSection />);

    // Check Navbar
    expect(screen.getByTestId("navbar")).toBeInTheDocument();

    // Check announcement banner
    expect(
      screen.getByText(/Announcing our next round of funding/i)
    ).toBeInTheDocument();

    // Check heading
    expect(
      screen.getByRole("heading", {
        name: /Helping Your Remote Team Thrive and Perform/i,
      })
    ).toBeInTheDocument();

    // Check button
    expect(
      screen.getByRole("button", { name: /Get Started/i })
    ).toBeInTheDocument();

    // Check avatars and ratings
    expect(screen.getByTestId("avatar-group")).toBeInTheDocument();
    expect(screen.getByTestId("star-rating")).toBeInTheDocument();
    expect(screen.getByText(/Used by 10,000\+ users/i)).toBeInTheDocument();

    // Check brand logos
    expect(screen.getByTestId("brand-logos")).toBeInTheDocument();
  });
});
