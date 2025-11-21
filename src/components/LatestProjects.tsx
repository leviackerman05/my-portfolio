import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import resumateImage from '../assets/Resumate.png';
import portfolioImage from '../assets/my-portfolio.png';

const PROJECTS = [
  {
    id: "1",
    title: "Resumate",
    image: resumateImage,
    summary:
      "Next.js-powered cover letter generator for streamlined job applications.",
    tags: ["Next.js", "React", "Tailwind"],
    link: "https://resumate-nextjs-294n.vercel.app/",
  },
  {
    id: "2",
    title: "My Portfolio",
    image: portfolioImage,
    summary:
      "Personal portfolio website showcasing projects and skills using React.",
    tags: ["React", "Tailwind", "Framer Motion"],
    link: "https://priyansh-singh.vercel.app/",
  },
];

const LatestProjects: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <h2 className="text-3xl font-bold text-charcoal">Latest Projects</h2>
        <Link to="/projects" className="text-accent font-medium hover:underline">
          View all projects →
        </Link>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={`/projects/${project.id}`} className="group block h-full bg-surface border border-white/5 rounded-lg overflow-hidden hover:border-accent/50 transition-colors duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 bg-white/5 text-secondary/70 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-serif font-bold text-secondary mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-secondary/70 text-sm leading-relaxed mb-4">
                  {project.summary}
                </p>
                <div className="flex items-center text-accent text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                  View Project →
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LatestProjects;
