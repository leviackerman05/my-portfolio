export const isHomePath = (pathname: string) =>
  pathname === '/' || pathname === '/home';

export const sectionLink = (id: string) =>
  id === 'home' ? '/home' : `/home#${id}`;
