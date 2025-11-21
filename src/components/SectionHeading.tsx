import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, className = "" }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-4xl md:text-5xl font-serif font-bold text-secondary mb-12 text-center ${className}`}
    >
      {title}
    </motion.h2>
  );
};

export default SectionHeading;
