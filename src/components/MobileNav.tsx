import { Link, useLocation } from 'react-router-dom';
import { scrollToSection } from '../utils/scroll';
import { mobileNavItems } from '../data/nav';

const MobileNav = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isBlog = location.pathname === '/blog' || location.pathname.startsWith('/blog/');

  const itemClass = (id: string) => {
    const active = (id === 'blog' && isBlog) || false;
    return `px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-colors ${
      active
        ? 'text-foreground bg-white/10'
        : 'text-muted hover:text-foreground hover:bg-white/10'
    }`;
  };

  return (
    <nav className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-40 glass-rail rounded-full px-2 py-1.5 flex gap-1 max-w-[95vw] overflow-x-auto items-center">
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
          <Link key={item.id} to={`/#${item.id}`} className={itemClass(item.id)}>
            {item.label}
          </Link>
        )
      )}
    </nav>
  );
};

export default MobileNav;
