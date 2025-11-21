import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import featuredPostImage from "../assets/featuredpostimage.png"; // Changed from featuredImage to featuredPostImage

const FeaturedPost: React.FC = () => {
  // The original `latestPost` variable is no longer used as the content is hardcoded in the new structure.
  // const latestPost = POSTS[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Link to="/blog/1" className="group block relative overflow-hidden rounded-lg bg-surface border border-white/5 hover:border-accent/50 transition-colors duration-300">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-auto overflow-hidden">
            <img
              src={featuredPostImage}
              alt="Featured Post"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center text-sm text-secondary/50 font-medium mb-4">
              <span>Oct 12, 2024</span>
              <span className="mx-2">•</span>
              <span>8 min read</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-secondary mb-4 group-hover:text-accent transition-colors duration-300">
              Learning Next.js 13 App Router: A Comprehensive Guide 🚀
            </h3>
            <p className="text-secondary/70 mb-6 line-clamp-3 leading-relaxed">
              Dive deep into Next.js 13's new App Router, exploring its powerful features and best practices. Learn how to leverage file-based routing, React Server Components, and advanced concepts.
            </p>
            <div className="flex items-center text-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
              Read Article →
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default FeaturedPost;