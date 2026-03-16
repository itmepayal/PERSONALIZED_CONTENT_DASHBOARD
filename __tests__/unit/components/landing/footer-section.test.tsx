import React from "react";
import { render, screen } from "@testing-library/react";
import { FooterSection } from "@/components/landing/footer-section";

// Mock child components
jest.mock("@/components/common/logo", () => ({
  Logo: () => <div data-testid="logo" />,
}));

jest.mock("@/components/landing/footer/footer-newsletter", () => ({
  FooterNewsletter: () => <div data-testid="footer-newsletter" />,
}));

jest.mock("@/components/landing/footer/footer-links", () => ({
  FooterLinks: () => <div data-testid="footer-links" />,
}));

jest.mock("@/components/landing/footer/footer-bottom", () => ({
  FooterBottom: () => <div data-testid="footer-bottom" />,
}));

describe("FooterSection Component", () => {
  test("renders the footer element", () => {
    const { container } = render(<FooterSection />);

    expect(container.querySelector("footer")).toBeInTheDocument();
  });

  test("renders Logo component", () => {
    render(<FooterSection />);

    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });

  test("renders FooterNewsletter component", () => {
    render(<FooterSection />);

    expect(screen.getByTestId("footer-newsletter")).toBeInTheDocument();
  });

  test("renders FooterLinks component", () => {
    render(<FooterSection />);

    expect(screen.getByTestId("footer-links")).toBeInTheDocument();
  });

  test("renders FooterBottom component", () => {
    render(<FooterSection />);

    expect(screen.getByTestId("footer-bottom")).toBeInTheDocument();
  });
});
