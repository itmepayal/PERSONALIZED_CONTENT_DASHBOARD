import Image from "next/image";

const users = [
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
];

export function AvatarGroup() {
  return (
    <div className="flex -space-x-3 pr-3">
      {users.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt="user"
          width={38}
          height={38}
          className="rounded-full border-2 border-white"
          priority
        />
      ))}
    </div>
  );
}
