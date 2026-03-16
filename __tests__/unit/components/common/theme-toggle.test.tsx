import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeToggle } from "@/components/common/theme-toggler";
import { useTheme } from "next-themes";

// Mock next-themes
jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

// Mock framer motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock dropdown menu
jest.mock("@/components/ui/dropdown-menu", () => ({
  DropdownMenu: ({ children }: any) => <div>{children}</div>,
  DropdownMenuTrigger: ({ children }: any) => <div>{children}</div>,
  DropdownMenuContent: ({ children }: any) => <div>{children}</div>,
  DropdownMenuItem: ({ children, onClick }: any) => (
    <button onClick={onClick}>{children}</button>
  ),
}));

describe("ThemeToggle Component", () => {
  const setTheme = jest.fn();

  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: "light",
      setTheme,
    });
  });

  test("renders toggle button", async () => {
    render(<ThemeToggle />);

    const button = await screen.findByRole("button", {
      name: /toggle theme/i,
    });

    expect(button).toBeInTheDocument();
  });

  test("renders theme options", async () => {
    render(<ThemeToggle />);

    const light = await screen.findByText("Light");
    const dark = await screen.findByText("Dark");

    expect(light).toBeInTheDocument();
    expect(dark).toBeInTheDocument();
  });

  test("calls setTheme when dark clicked", async () => {
    render(<ThemeToggle />);

    const dark = await screen.findByText("Dark");
    fireEvent.click(dark);

    expect(setTheme).toHaveBeenCalledWith("dark");
  });

  test("calls setTheme when light clicked", async () => {
    render(<ThemeToggle />);

    const light = await screen.findByText("Light");
    fireEvent.click(light);

    expect(setTheme).toHaveBeenCalledWith("light");
  });
});
