import React from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative max-w-3xl mx-auto pl-8 md:pl-0">
      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/20 transform -translate-x-1/2" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary border-2 border-accent rounded-full transform -translate-x-[9px] z-10" />

            {/* Content */}
            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
              index % 2 === 0 ? "md:pl-12 text-left" : "md:pr-12 md:text-right"
            }`}>
              <h3 className="text-xl font-bold text-secondary">{item.title}</h3>
              <p className="text-accent font-medium mb-1">{item.subtitle}</p>
              <span className="text-sm text-secondary/60 block mb-2">{item.date}</span>
              {item.description && (
                <p className="text-secondary/80 text-sm leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
