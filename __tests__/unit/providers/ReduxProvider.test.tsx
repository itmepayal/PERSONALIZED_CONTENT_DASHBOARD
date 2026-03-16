import { render, screen } from "@testing-library/react";
import ReduxProvider from "@/providers/redux-provider";

describe("ReduxProvider", () => {
  test("renders children inside provider", () => {
    render(
      <ReduxProvider>
        <div>Test Child</div>
      </ReduxProvider>
    );

    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});
