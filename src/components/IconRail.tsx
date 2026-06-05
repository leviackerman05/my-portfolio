import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconType } from 'react-icons';
import { HiHome, HiBriefcase, HiUser, HiCollection, HiBookOpen } from 'react-icons/hi';
import { scrollToSection } from '../utils/scroll';

interface NavItem {
  id: string;
  icon: IconType;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'hero', icon: HiHome, label: 'Home' },
  { id: 'about', icon: HiUser, label: 'About' },
  { id: 'experience', icon: HiBriefcase, label: 'Work' },
  { id: 'projects', icon: HiCollection, label: 'Projects' },
  { id: 'blog', icon: HiBookOpen, label: 'Blog' },
];

const itemClass = (selected: boolean) =>
  selected ? 'glass-rail-item glass-rail-item-selected' : 'glass-rail-item';

const IconRail = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isBlog = location.pathname === '/blog' || location.pathname.startsWith('/blog/');

  const isSelected = (id: string) => id === 'blog' && isBlog;

  const renderItemContent = (item: NavItem) => (
    <>
      <span className="glass-rail-icon-slot">
        <item.icon className="glass-rail-icon" size={20} />
      </span>
      <span className="text-sm text-muted glass-rail-label">{item.label}</span>
    </>
  );

  const renderItem = (item: NavItem) => {
    const className = `${itemClass(isSelected(item.id))} text-left active:scale-95`;

    if (isHome) {
      return (
        <button key={item.id} onClick={() => scrollToSection(item.id)} className={className}>
          {renderItemContent(item)}
        </button>
      );
    }

    return (
      <Link key={item.id} to={`/#${item.id}`} className={className}>
        {renderItemContent(item)}
      </Link>
    );
  };

  return (
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`fixed left-4 top-1/2 -translate-y-1/2 z-40 glass-rail rounded-2xl hidden md:block transition-[width] duration-200 ease-out w-14 ${
        expanded ? 'glass-rail-expanded w-44' : ''
      }`}
    >
      {navItems.map(renderItem)}
    </aside>
  );
};

export default IconRail;
