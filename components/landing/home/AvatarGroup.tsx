import Image from "next/image";
import { motion } from "framer-motion";

const users = [
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
];

export function AvatarGroup() {
  return (
    <div className="flex -space-x-3 pr-3">
      {users.map((src, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.2 }}
        >
          <Image
            src={src}
            alt="user"
            width={38}
            height={38}
            className="rounded-full border-2 border-white"
          />
        </motion.div>
      ))}
    </div>
  );
}
