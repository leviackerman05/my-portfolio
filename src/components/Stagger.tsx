import { ReactNode } from 'react';

interface StaggerProps {
  children: ReactNode;
  className?: string;
}

const Stagger = ({ children, className = '' }: StaggerProps) => (
  <div className={className}>{children}</div>
);

export default Stagger;
