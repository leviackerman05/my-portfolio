import { FC } from "react";
import { motion } from "framer-motion";
import ScrollSection from "../components/ScrollSection";
import SectionHeading from "../components/SectionHeading";
import Timeline from "../components/Timeline";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGraphql,
  SiFigma,
  SiGit,
  SiVuedotjs,
  SiRedux,
} from "react-icons/si";
import { FaHeart, FaRegComment, FaRegPaperPlane } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

// Placeholder image for About section
import aboutImage from "../assets/devspace.png";

const TECH_STACK = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Redux", icon: SiRedux },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Figma", icon: SiFigma },
  { name: "Git", icon: SiGit },
];

const EXPERIENCE_DATA = [
  {
    id: "1",
    title: "Software Engineer 2 - Frontend",
    subtitle: "SurveyMonkey (Momentive)",
    date: "Nov 2024 - Present",
    description: "Took ownership of critical areas in the Enterprise Admin Dashboard. Improved UI responsiveness, implemented validation/sorting/export logic, and delivered features across 30+ pull requests.",
  },
  {
    id: "2",
    title: "SDE - Frontend Engineer",
    subtitle: "Mile Tech (prev. Automatad INC)",
    date: "June 2022 - Oct 2024",
    description: "Led development of reusable design systems using Vue & React. Migrated legacy apps to Micro Frontend architecture, cutting build times by 90%. Integrated REST/GraphQL APIs and enabled CI/CD with GitHub Actions.",
  },
  {
    id: "3",
    title: "Associate Software Developer",
    subtitle: "Accenture",
    date: "Aug 2021 - Jun 2022",
    description: "Contributed to AngularJS-based internal tools and led migration efforts to Angular 11. Participated in code reviews and internal workshops on cloud-native practices.",
  },
];

const EDUCATION_DATA = [
  {
    id: "1",
    title: "Bachelor of Engineering in Computer Science",
    subtitle: "Sir. M Visvesvarya Institute of Technology, Bangalore",
    date: "2017 - 2021",
    description: "Graduated with a focus on Computer Science fundamentals.",
  },
  {
    id: "2",
    title: "Higher Secondary Education",
    subtitle: "OP Jindal School, Raigarh, Chhattisgarh",
    date: "Completed 2017",
    description: "Completed school education with a focus on Science and Mathematics.",
  },
];

const Home: FC = () => {
  return (
    <div className="px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <ScrollSection id="hero" className="min-h-screen flex items-center justify-center py-12">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(100px,auto)]">
          
          {/* Top Left: Script Quote */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3 flex flex-col justify-center p-4"
          >
            <p className="font-script text-2xl text-secondary/80 -rotate-6">
              Roses are <span className="text-accent">red</span>, <br/>
              violets are <span className="text-blue-400">blue</span>. <br/>
              I love to code and create <br/>
              something new!
            </p>
          </motion.div>

          {/* Top Center: Main Title "Portfolio" */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 flex items-center justify-center"
          >
            <h1 className="text-6xl md:text-9xl font-serif font-bold text-secondary tracking-tighter">
              Portfolio
            </h1>
          </motion.div>

          {/* Top Right: Red Image Block 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-3 bg-accent/20 rounded-lg min-h-[200px] relative overflow-hidden group"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-transparent mix-blend-overlay" />
             <div className="absolute inset-0 flex items-center justify-center">
                <SiReact className="text-6xl text-accent/50 group-hover:scale-110 transition-transform duration-500" />
             </div>
          </motion.div>

          {/* Middle Left: Red Image Block 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:col-span-4 bg-accent rounded-lg min-h-[250px] relative overflow-hidden flex items-center justify-center"
          >
             <div className="text-center p-6">
                <div className="bg-black text-accent font-bold px-4 py-2 rounded-full inline-block mb-4 transform -rotate-3 shadow-lg border border-accent-dark">
                  Frontend Wizard
                </div>
                <div className="text-black/60 font-bold text-4xl opacity-20 absolute bottom-[-20px] right-[-20px] rotate-[-15deg]">
                  REACT
                </div>
             </div>
          </motion.div>

          {/* Middle Center: Name & Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-5 flex flex-col justify-center p-6 border-l-2 border-secondary/20 pl-8"
          >
            <p className="text-xl text-secondary/60 font-serif mb-2">Hello there, My name is...</p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-4">
              Priyansh Singh
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full"></div>
          </motion.div>

          {/* Middle Right: Year "2025" */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:col-span-3 flex items-center justify-center relative"
          >
             <div className="border-b-2 border-r-2 border-secondary/40 absolute bottom-4 right-4 w-16 h-16"></div>
             <h2 className="text-7xl md:text-8xl font-serif font-bold text-secondary">
               2025
             </h2>
          </motion.div>

          {/* Bottom Left: Red Image Block 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="md:col-span-3 bg-surface rounded-lg min-h-[200px] p-4 border border-white/5"
          >
             <div className="grid grid-cols-2 gap-2 h-full">
                <div className="bg-accent/10 rounded"></div>
                <div className="bg-accent/20 rounded"></div>
                <div className="bg-accent/30 rounded"></div>
                <div className="bg-accent/40 rounded"></div>
             </div>
          </motion.div>

           {/* Bottom Center: Red Image Block 4 */}
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="md:col-span-6 bg-accent/10 rounded-lg min-h-[200px] relative overflow-hidden"
          >
             <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" alt="Tech" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
             <div className="absolute inset-0 bg-accent/20 mix-blend-overlay"></div>
          </motion.div>

          {/* Bottom Right: Script Definition */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="md:col-span-3 flex flex-col justify-center p-4 text-right"
          >
            <p className="font-script text-2xl text-accent mb-2">What's Portfolio?</p>
            <p className="font-script text-lg text-secondary/60">
              The word 'portfolio' can refer to a collection of items, such as financial assets, documents, or work samples.
            </p>
          </motion.div>

        </div>
      </ScrollSection>

      {/* About Section */}
      <ScrollSection id="about">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Instagram Card */}
          <div className="relative flex justify-center">
            <div className="relative bg-white p-4 rounded-xl shadow-2xl max-w-sm w-full transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
                    <img src={aboutImage} alt="Profile" className="w-full h-full rounded-full object-cover border border-white" />
                  </div>
                  <span className="text-black font-semibold text-sm">priyansh_singh</span>
                </div>
                <BsThreeDotsVertical className="text-black" />
              </div>
              
              {/* Image */}
              <div className="aspect-square bg-black rounded-lg overflow-hidden mb-3 relative">
                 <img src={aboutImage} alt="Priyansh" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-accent/20 mix-blend-overlay"></div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 text-black text-xl">
                <FaHeart className="text-red-500" />
                <FaRegComment />
                <FaRegPaperPlane />
              </div>
            </div>

            {/* Decorative Arrow & Text */}
            <div className="absolute -bottom-12 -right-4 md:-right-12 hidden md:block">
               <p className="font-script text-2xl text-secondary/80 rotate-[-10deg]">
                 You can call me 'Priyansh' <span className="text-4xl">↙</span>
               </p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-8">About me</h2>
            
            <p className="text-lg md:text-xl text-secondary/80 leading-loose mb-10">
              Hi, I'm <span className="bg-accent text-white px-2 py-1 font-bold mx-1">Priyansh Singh</span>, 
              a versatile <span className="bg-accent text-white px-2 py-1 font-bold mx-1">Frontend Engineer</span> 
              with 4+ years of experience building scalable, high-performance web applications.
              I specialize in leading complex UI initiatives and optimizing architecture across the stack.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif text-secondary mb-4">Technical Skill</h3>
                <div className="flex flex-wrap gap-3">
                  {["NextJS", "ReactJS", "VueJS", "TypeScript", "Tailwind CSS", "Redux", "NodeJS"].map((skill) => (
                    <span key={skill} className="px-4 py-2 border border-white/20 rounded-full text-secondary/80 hover:border-accent hover:text-accent transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-secondary mb-4">Softskill</h3>
                <div className="flex flex-wrap gap-3">
                  {["Problem Solving", "Communication", "Adaptability", "Creativity", "Teamwork"].map((skill) => (
                    <span key={skill} className="px-4 py-2 border border-white/20 rounded-full text-secondary/80 hover:border-accent hover:text-accent transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Experience & Education Section */}
      <ScrollSection id="experience">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <SectionHeading title="Experience" className="text-left mb-12" />
            <Timeline items={EXPERIENCE_DATA} />
          </div>
          <div>
            <SectionHeading title="Education" className="text-left mb-12" />
            <Timeline items={EDUCATION_DATA} />
          </div>
        </div>
      </ScrollSection>

      {/* Tech Stack */}
      <ScrollSection id="tech-stack" className="py-32">
        <SectionHeading title="Tech Arsenal" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {TECH_STACK.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center justify-center gap-4 p-6 rounded-xl transition-all duration-300 hover:bg-white/5 cursor-default"
            >
              <tech.icon size={40} className="text-secondary/40 group-hover:text-accent transition-colors duration-300" />
              <span className="text-secondary/40 font-sans text-sm uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </ScrollSection>

      {/* Projects Placeholder */}
      <ScrollSection id="projects">
        <SectionHeading title="Selected Work" />
        <div className="text-center text-secondary/40 py-20 border border-dashed border-white/10 rounded-lg">
          <h3 className="text-2xl font-serif">Projects Coming Soon</h3>
          <p className="mt-4">Waiting to unveil the magic ✨</p>
        </div>
      </ScrollSection>
    </div>
  );
};

export default Home;