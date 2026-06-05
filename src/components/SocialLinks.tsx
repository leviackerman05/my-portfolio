import { SiGithub, SiLinkedin } from 'react-icons/si';
import { socials } from '../data/portfolio';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = '' }: SocialLinksProps) => {
  const github = socials.find((s) => s.name === 'GitHub');
  const linkedIn = socials.find((s) => s.name === 'LinkedIn');

  const linkClass =
    'text-muted hover:text-ember transition-colors active:scale-95';

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {github && (
        <a
          href={github.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={linkClass}
        >
          <SiGithub size={20} />
        </a>
      )}
      {linkedIn && (
        <a
          href={linkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={linkClass}
        >
          <SiLinkedin size={20} />
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
