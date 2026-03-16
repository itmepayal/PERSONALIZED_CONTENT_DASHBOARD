import { render, screen } from "@testing-library/react";
import { ContentSection } from "@/components/dashboard/common/content-section";

describe("ContentSection", () => {
  test("renders the title", () => {
    render(<ContentSection title="My Section">Hello</ContentSection>);

    const title = screen.getByText("My Section");
    expect(title).toBeInTheDocument();
  });

  test("renders children", () => {
    render(
      <ContentSection title="My Section">
        <p>Child Content</p>
      </ContentSection>
    );

    const child = screen.getByText("Child Content");
    expect(child).toBeInTheDocument();
  });
});
