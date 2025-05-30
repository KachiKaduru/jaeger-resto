"use client";

import { ChildrenProps } from "../types/childrenProps";
import { motion } from "framer-motion";

export default function PulseMotion({ children }: ChildrenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl text-center"
    >
      <>{children}</>
    </motion.div>
  );
}
