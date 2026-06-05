import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import IconRail from '../components/IconRail';
import MobileNav from '../components/MobileNav';
import ThemeToggle from '../components/ThemeToggle';
import ScrollProgress from '../components/ScrollProgress';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Writing from '../components/sections/Writing';
import { scrollToSection } from '../utils/scroll';

const Portfolio = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const timer = setTimeout(() => scrollToSection(id), 50);
    return () => clearTimeout(timer);
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-canvas text-foreground relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none dot-bg" />

      <ScrollProgress />
      <ThemeToggle />
      <IconRail />
      <MobileNav />

      <div className="relative max-w-5xl mx-auto px-6 pt-20 md:pt-12 pb-20 md:pl-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Writing />
      </div>
    </div>
  );
};

export default Portfolio;
