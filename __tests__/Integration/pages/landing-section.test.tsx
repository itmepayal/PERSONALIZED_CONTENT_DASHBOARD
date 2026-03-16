import { render, screen } from "@testing-library/react";
import LandingSection from "@/sections/landing-section";

// Mock Clerk
jest.mock("@clerk/nextjs", () => ({
  useUser: () => ({
    isSignedIn: false,
    user: null,
  }),
  SignInButton: ({ children }: any) => children,
  SignUpButton: ({ children }: any) => children,
  UserButton: () => <div>User</div>,
}));

// Mock Framer Motion
jest.mock("framer-motion", () => {
  const React = require("react");

  const cleanProps = (props: any) => {
    const {
      initial,
      animate,
      exit,
      transition,
      variants,
      whileHover,
      whileTap,
      whileInView,
      viewport,
      layout,
      layoutId,
      drag,
      dragConstraints,
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

describe("LandingSection Integration Test", () => {
  test("renders all landing sections", () => {
    render(<LandingSection />);

    expect(screen.getByText(/pricing plans for everyone/i)).toBeInTheDocument();

    expect(screen.getByText(/about us/i)).toBeInTheDocument();

    expect(screen.getByRole("main")).toBeInTheDocument();

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
