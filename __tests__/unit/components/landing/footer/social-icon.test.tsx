import React from "react";
import { render, screen } from "@testing-library/react";
import { SocialIcons } from "@/components/landing/footer/social-Icons";

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
            const {
              whileHover,
              whileTap,
              whileInView,
              initial,
              variants,
              viewport,
              ...rest
            } = props;
            return <div {...rest}>{children}</div>;
          },
      }
    ),
  };
});

// Mock react-icons/fa6
jest.mock("react-icons/fa6", () => ({
  FaGithub: () => <div data-testid="FaGithub" />,
  FaLinkedin: () => <div data-testid="FaLinkedin" />,
  FaYoutube: () => <div data-testid="FaYoutube" />,
  FaInstagram: () => <div data-testid="FaInstagram" />,
  FaXTwitter: () => <div data-testid="FaXTwitter" />,
}));

// --------------------
// The actual tests must be inside 'describe' and 'it' blocks
// --------------------
describe("SocialIcons Component", () => {
  it("renders all social icons", () => {
    render(<SocialIcons />);

    expect(screen.getByTestId("FaGithub")).toBeInTheDocument();
    expect(screen.getByTestId("FaLinkedin")).toBeInTheDocument();
    expect(screen.getByTestId("FaYoutube")).toBeInTheDocument();
    expect(screen.getByTestId("FaInstagram")).toBeInTheDocument();
    expect(screen.getByTestId("FaXTwitter")).toBeInTheDocument();
  });
});
