import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ id, children, className = "" }) => {
  return (
    <section id={id} className={`min-h-screen flex flex-col justify-center py-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default ScrollSection;
