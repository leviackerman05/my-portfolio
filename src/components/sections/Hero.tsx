import { useState } from 'react';
import { profile } from '../../data/portfolio';
import { copyEmail } from '../../utils/scroll';
import Reveal from '../Reveal';
import EmberButton from '../EmberButton';
import SocialLinks from '../SocialLinks';

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyEmail(profile.email);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="hero" className="mb-20 scroll-mt-24 text-center md:text-left relative">
      <Reveal>
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-2">
          {profile.name.split(' ')[0]}
        </h1>
        <p className="text-foreground/75 text-sm mb-2">
          {profile.title} · {profile.location}
        </p>
        <p className="text-foreground/50 text-sm mb-8">
          {profile.yearsOfExperience} years building web products
        </p>
        <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl italic">
          {profile.shortBio}
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-8 justify-center md:justify-start">
          <EmberButton variant="primary" to={profile.resumeUrl}>
            Resume
          </EmberButton>
          <EmberButton variant="ghost" onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy email'}
          </EmberButton>
          <span className="hidden sm:block w-px h-5 bg-stroke/60 mx-1" aria-hidden />
          <SocialLinks />
        </div>
      </Reveal>
    </section>
  );
};

export default Hero;
