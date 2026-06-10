import { useState } from 'react';
import { HiClipboardCopy } from 'react-icons/hi';
import { profile } from '../../data/portfolio';
import { copyEmail, scrollToSection } from '../../utils/scroll';
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
    <section id="home" className="mb-20 scroll-mt-24 text-center md:text-left relative">
      <Reveal>
        <div className="w-full">
          <div className="md:flex md:items-start md:justify-between md:gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-2">
                {profile.name.split(' ')[0]}
              </h1>
              <p className="text-foreground/75 text-sm mb-2">
                {profile.title} · {profile.location}
              </p>
              <p className="text-foreground/50 text-sm">
                {profile.yearsOfExperience} years building web products
              </p>
            </div>
            <SocialLinks className="hidden md:flex shrink-0 mt-1" />
          </div>
          <SocialLinks className="flex md:hidden justify-center mt-5 mb-1" />
        </div>
        <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl italic mt-6 md:mt-8">
          {profile.shortBio}
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-8 justify-center md:justify-start">
          <span className="btn-ember-resume-wrap">
            <EmberButton variant="primary" to={profile.resumeUrl} className="btn-hero-action">
              Resume
            </EmberButton>
          </span>
          <EmberButton
            variant="ghost"
            onClick={() => scrollToSection('projects')}
            className="btn-hero-action"
          >
            See my work
          </EmberButton>
          <EmberButton variant="link" onClick={handleCopy} className="btn-hero-action inline-flex items-center gap-1.5">
            <HiClipboardCopy size={14} aria-hidden />
            {copied ? 'Copied!' : 'Copy email'}
          </EmberButton>
        </div>
      </Reveal>
    </section>
  );
};

export default Hero;
