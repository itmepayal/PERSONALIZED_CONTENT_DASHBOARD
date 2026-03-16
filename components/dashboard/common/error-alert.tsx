"use client";

import { AlertCircle } from "lucide-react";
import { Card, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Props {
  message: string;
}

export function ErrorAlert({ message }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      role="alert"
    >
      <Card className="border-red-300">
        <CardDescription>
          <p className="flex items-center justify-center gap-2 text-lg text-center py-10 text-red-500/80 capitalize">
            <AlertCircle className="w-4 h-4" />
            {message}
          </p>
        </CardDescription>
      </Card>
    </motion.div>
  );
}
