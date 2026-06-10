import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IconRail from '../components/IconRail';
import MobileNav from '../components/MobileNav';
import ThemeToggle from '../components/ThemeToggle';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Writing from '../components/sections/Writing';
import { scrollToSection } from '../utils/scroll';

const Portfolio = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.slice(1);
    const section = document.getElementById(id);
    const scrollTimer = setTimeout(() => scrollToSection(id), 50);

    if (!section) return () => clearTimeout(scrollTimer);

    let armed = false;
    const armTimer = setTimeout(() => {
      armed = true;
    }, 500);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!armed) return;
        if (!entry.isIntersecting || entry.intersectionRatio < 0.2) {
          navigate(location.pathname, { replace: true });
          observer.disconnect();
        }
      },
      { threshold: [0, 0.2, 0.5, 1] },
    );

    observer.observe(section);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(armTimer);
      observer.disconnect();
    };
  }, [location.hash, location.pathname, navigate]);

  return (
    <div className="min-h-screen bg-canvas text-foreground relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none dot-bg" />

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
