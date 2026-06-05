import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'ghost' | 'link';

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined; to?: undefined };

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: undefined };

type RouteProps = BaseProps & { to: string; href?: undefined };

const variantClass: Record<Variant, string> = {
  primary: 'btn-ember btn-ember-primary',
  ghost: 'btn-ember btn-ember-ghost',
  link: 'btn-ember-link',
};

const EmberButton = ({
  variant = 'ghost',
  children,
  className = '',
  ...props
}: ButtonProps | AnchorProps | RouteProps) => {
  const classes = `${variantClass[variant]} ${className}`.trim();

  if ('to' in props && props.to) {
    const { to, ...rest } = props as RouteProps;
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    const { href, ...rest } = props as AnchorProps;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { ...rest } = props as ButtonProps;
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
};

export default EmberButton;
