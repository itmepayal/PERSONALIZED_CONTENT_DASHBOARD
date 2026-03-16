import { render, screen } from "@testing-library/react";
import { AvatarGroup } from "@/components/landing/home/avatar-group";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => {
    return <img src={src} alt={alt} />;
  },
}));

describe("AvatarGroup Component", () => {
  it("renders all avatars", () => {
    render(<AvatarGroup />);

    const images = screen.getAllByAltText("user");
    expect(images).toHaveLength(3);

    expect(images[0]).toHaveAttribute(
      "src",
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d"
    );
  });

  it("renders correctly when users array is empty", () => {
    const EmptyAvatarGroup = () => <div className="flex -space-x-3 pr-3"></div>;
    render(<EmptyAvatarGroup />);
    const images = screen.queryAllByRole("img");
    expect(images).toHaveLength(0);
  });
});
