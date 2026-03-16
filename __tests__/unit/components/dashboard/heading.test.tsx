import { render, screen, fireEvent, act } from "@testing-library/react";
import { DashboardHeader } from "@/components/dashboard/common/header";

jest.useFakeTimers();

describe("DashboardHeader Component", () => {
  const onSearchMock = jest.fn();

  beforeEach(() => {
    onSearchMock.mockClear();
  });

  test("renders the title", () => {
    render(<DashboardHeader onSearch={onSearchMock} />);
    expect(
      screen.getByText("Personalized Content Dashboard")
    ).toBeInTheDocument();
  });

  test("renders the search input", () => {
    render(<DashboardHeader onSearch={onSearchMock} />);
    expect(
      screen.getByPlaceholderText("Search news, movies...")
    ).toBeInTheDocument();
  });

  test("typing triggers onSearch after debounce", () => {
    render(<DashboardHeader onSearch={onSearchMock} />);
    const input = screen.getByPlaceholderText("Search news, movies...");

    fireEvent.change(input, { target: { value: "movie" } });
    fireEvent.change(input, { target: { value: "movie news" } });

    // Fast-forward debounce delay
    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith("movie news");
  });

  test("input value updates when typing", () => {
    render(<DashboardHeader onSearch={onSearchMock} />);
    const input = screen.getByPlaceholderText("Search news, movies...");
    fireEvent.change(input, { target: { value: "hello" } });
    expect((input as HTMLInputElement).value).toBe("hello");
  });
});
