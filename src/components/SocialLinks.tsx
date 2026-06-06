import { SiGithub, SiLinkedin } from 'react-icons/si';
import { socials } from '../data/portfolio';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = '' }: SocialLinksProps) => {
  const github = socials.find((s) => s.name === 'GitHub');
  const linkedIn = socials.find((s) => s.name === 'LinkedIn');

  const linkClass =
    'inline-flex items-center gap-2 text-sm text-muted hover:text-ember transition-colors active:scale-95';

  return (
    <div className={`flex flex-wrap items-center gap-5 ${className}`}>
      {github && (
        <a
          href={github.url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          <SiGithub size={18} aria-hidden />
          <span className="font-mono">GitHub</span>
        </a>
      )}
      {linkedIn && (
        <a
          href={linkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          <SiLinkedin size={18} aria-hidden />
          <span className="font-mono">LinkedIn</span>
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
