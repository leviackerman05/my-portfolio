import { ReactNode, HTMLAttributes } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const GlassCard = ({
  children,
  className = '',
  ...props
}: GlassCardProps) => (
  <div className={`glass rounded-2xl relative overflow-hidden ${className}`} {...props}>
    {children}
  </div>
);

export default GlassCard;
