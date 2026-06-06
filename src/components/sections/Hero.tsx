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
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 mb-2 w-full">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            {profile.name.split(' ')[0]}
          </h1>
          <SocialLinks className="shrink-0" />
        </div>
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
