import React from "react";
import { render, screen } from "@testing-library/react";
import { TestimonialCard } from "@/components/landing/testimonial/testimonial-card";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

// Mock StarRating
jest.mock("@/components/landing/testimonial/star-rating", () => ({
  StarRating: () => <div data-testid="star-rating" />,
}));

describe("TestimonialCard Component", () => {
  const props = {
    text: "This platform is amazing for AI creators.",
    name: "John Doe",
    role: "AI Engineer",
    image: "/images/user.jpg",
    index: 0,
  };

  test("renders testimonial text", () => {
    render(<TestimonialCard {...props} />);

    expect(
      screen.getByText("This platform is amazing for AI creators.")
    ).toBeInTheDocument();
  });

  test("renders user name", () => {
    render(<TestimonialCard {...props} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  test("renders user role", () => {
    render(<TestimonialCard {...props} />);

    expect(screen.getByText("AI Engineer")).toBeInTheDocument();
  });

  test("renders user image", () => {
    render(<TestimonialCard {...props} />);

    const image = screen.getByAltText("John Doe");
    expect(image).toBeInTheDocument();
  });

  test("renders star rating component", () => {
    render(<TestimonialCard {...props} />);

    expect(screen.getByTestId("star-rating")).toBeInTheDocument();
  });
});
