import { Link, useLocation } from 'react-router-dom';
import { scrollToSection } from '../utils/scroll';
import { mobileNavItems } from '../data/nav';
import { isHomePath, sectionLink } from '../utils/nav';
import ThemeToggle from './ThemeToggle';

const MobileNav = () => {
  const location = useLocation();
  const isHome = isHomePath(location.pathname);
  const isBlog = location.pathname === '/blog' || location.pathname.startsWith('/blog/');

  const itemClass = (id: string) => {
    const active = (id === 'blog' && isBlog) || false;
    const base =
      'flex-1 text-center px-0.5 py-1.5 rounded-full text-[11px] sm:text-xs whitespace-nowrap transition-colors';
    return active
      ? `${base} text-foreground bg-white/10`
      : `${base} text-muted hover:text-foreground hover:bg-white/10`;
  };

  return (
    <nav className="md:hidden fixed top-4 inset-x-4 z-40 glass-rail rounded-full px-1 py-1 flex items-center">
      <div className="flex flex-1 min-w-0 items-center">
        {mobileNavItems.map((item) =>
          isHome ? (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`${itemClass(item.id)} active:scale-95`}
            >
              {item.label}
            </button>
          ) : (
            <Link key={item.id} to={sectionLink(item.id)} className={itemClass(item.id)}>
              {item.label}
            </Link>
          )
        )}
      </div>

      <span className="w-px h-5 shrink-0 bg-foreground/10 mx-0.5" aria-hidden />

      <ThemeToggle
        floating={false}
        className="shrink-0 p-2 rounded-full hover:bg-white/10 flex items-center justify-center"
      />
    </nav>
  );
};

export default MobileNav;
