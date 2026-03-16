import { render, screen, fireEvent } from "@testing-library/react";
import { Navbar } from "@/components/landing/home/navbar";
import "@testing-library/jest-dom";

jest.mock("framer-motion", () => {
  const React = require("react");
  const omitMotionProps = (props: any) => {
    const { initial, animate, transition, whileHover, whileTap, ...rest } =
      props;
    return rest;
  };

  return {
    motion: {
      div: ({ children, ...props }: any) => (
        <div {...omitMotionProps(props)}>{children}</div>
      ),
      nav: ({ children, ...props }: any) => (
        <nav {...omitMotionProps(props)}>{children}</nav>
      ),
      button: ({ children, ...props }: any) => (
        <button {...omitMotionProps(props)}>{children}</button>
      ),
    },
  };
});

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

jest.mock("@/components/landing/home/icon-button", () => ({
  IconButton: ({ text, href }: any) => <a href={href}>{text}</a>,
}));

jest.mock("@/components/common/logo", () => ({
  Logo: () => <div>Logo</div>,
}));

jest.mock("@clerk/nextjs", () => ({
  useUser: jest.fn(),
}));

import { useUser } from "@clerk/nextjs";

describe("Navbar Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders Logo", () => {
    (useUser as jest.Mock).mockReturnValue({ isSignedIn: false });
    render(<Navbar />);
    expect(screen.getByText("Logo")).toBeInTheDocument();
  });

  it("renders 'Get Started' when user is not signed in", () => {
    (useUser as jest.Mock).mockReturnValue({ isSignedIn: false });
    render(<Navbar />);
    expect(screen.getByText("Get Started")).toBeInTheDocument();
  });

  it("renders 'Dashboard' when user is signed in", () => {
    (useUser as jest.Mock).mockReturnValue({ isSignedIn: true });
    render(<Navbar />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("toggles menu button when clicked", () => {
    (useUser as jest.Mock).mockReturnValue({ isSignedIn: false });
    render(<Navbar />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    fireEvent.click(button);
  });
});
