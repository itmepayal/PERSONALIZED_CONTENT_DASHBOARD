import { render, screen } from "@testing-library/react";
import { Logo } from "@/components/common/logo";

// mock framer motion
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

describe("Logo Component", () => {
  test("renders logo container", () => {
    render(<Logo />);

    const container = screen.getByTestId("logo-container");
    expect(container).toBeInTheDocument();
  });

  test("renders feedly icon", () => {
    render(<Logo />);

    const icon = screen.getByTestId("logo-icon");
    expect(icon).toBeInTheDocument();
  });

  test("logo wrapper has correct class styles", () => {
    render(<Logo />);

    const wrapper = screen.getByTestId("logo-container");
    expect(wrapper).toHaveClass("flex");
    expect(wrapper).toHaveClass("items-center");
  });
});
