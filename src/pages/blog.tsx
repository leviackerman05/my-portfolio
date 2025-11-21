import { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const POSTS = [
  {
    id: "1",
    title: "Learning Next.js 13 App Router: A Comprehensive Guide 🚀",
    date: "Sat Oct 12, 2024",
    readTime: "8 min read",
    summary: "Dive deep into Next.js 13's new App Router, exploring its powerful features and best practices. Learn how to leverage file-based routing, React Server Components, and advanced concepts through a real-world cover letter generator project.",
    tags: ["Next.js", "App Router", "Web Dev"]
  },
  {
    id: "2",
    title: "Advanced State Management Patterns in React with TypeScript 🧠",
    date: "Tue Oct 3, 2024",
    readTime: "10 min read",
    summary: "Explore advanced state management techniques in React using TypeScript. Learn how to create type-safe, scalable, and maintainable state management solutions covering custom hooks and context optimization.",
    tags: ["React", "TypeScript", "State Management"]
  },
  {
    id: "3",
    title: "Understanding React Server Components: A Practical Guide",
    date: "Sat Sept 12, 2024",
    readTime: "6 min read",
    summary: "React Server Components (RSC) are revolutionizing how we approach server-side rendering in React applications. This guide will walk you through what they are, their benefits, and how to implement them.",
    tags: ["React", "RSC", "Performance"]
  }
];

const Blog: FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-secondary">Thoughts</h1>
        <p className="text-xl text-secondary/60 mb-16">
          Thoughts, code & everything in between.
        </p>

        <div className="space-y-16">
          {POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-b border-white/5 pb-12 last:border-0"
            >
              <Link to={`/blog/${post.id}`} className="block space-y-4">
                <div className="flex items-center text-sm text-secondary/40 font-medium mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-secondary group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-secondary/70 leading-relaxed text-lg">
                  {post.summary}
                </p>
                <div className="flex items-center text-accent font-medium pt-2 group-hover:translate-x-2 transition-transform duration-300">
                  Read more →
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;