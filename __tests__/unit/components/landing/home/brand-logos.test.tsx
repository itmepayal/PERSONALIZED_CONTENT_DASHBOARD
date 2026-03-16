import { render } from "@testing-library/react";
import { BrandLogos } from "@/components/landing/home/brand-logos";

jest.mock("framer-motion", () => {
  const React = require("react");
  return {
    motion: {
      div: ({ children, ...props }: any) => {
        const { initial, animate, whileInView, ...rest } = props;
        return <div {...rest}>{children}</div>;
      },
    },
  };
});

describe("BrandLogos Component", () => {
  it("renders the correct number of SVG elements", () => {
    render(<BrandLogos />);
    const svgs = document.querySelectorAll("svg");
    expect(svgs.length).toBe(5);
  });

  it("checks SVG attributes", () => {
    render(<BrandLogos />);
    const svgs = document.querySelectorAll("svg");
    expect(svgs[0]).toHaveAttribute("viewBox", "0 0 101 29");
    expect(svgs[1]).toHaveAttribute("viewBox", "0 0 100 33");
  });
});
