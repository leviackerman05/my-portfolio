import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  HiExternalLink,
  HiArrowLeft,
  HiCode,
  HiBookOpen,
  HiChevronDown,
  HiDownload,
} from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import IconRail from '../components/IconRail';
import MobileNav from '../components/MobileNav';
import ThemeToggle from '../components/ThemeToggle';
import Reveal from '../components/Reveal';
import ImageLightbox from '../components/ImageLightbox';
import ScreenshotSlider from '../components/ScreenshotSlider';
import { projects } from '../data/portfolio';
import { sectionLink } from '../utils/nav';
import { scrollToSection } from '../utils/scroll';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-canvas text-foreground flex items-center justify-center">
        <p className="text-muted">Project not found</p>
      </div>
    );
  }

  const heroTarget = project.liveUrl ?? project.downloadUrl ?? project.repos?.[0]?.url;
  const heroLabel = project.liveUrl
    ? 'Visit'
    : project.downloadUrl
      ? (project.downloadLabel ?? 'Download')
      : 'View on GitHub';
  const heroIsDownload = Boolean(!project.liveUrl && project.downloadUrl);
  const hasImage = Boolean(project.image);
  const hasScreenshots = Boolean(project.screenshots && project.screenshots.length > 0);

  return (
    <div className="min-h-screen bg-canvas text-foreground relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none dot-bg" />
      <ThemeToggle />
      <IconRail />
      <MobileNav />

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}

      <main className="relative max-w-3xl mx-auto px-6 pt-20 md:pt-12 pb-20 md:pl-24">
        <Reveal>
          <Link
            to={sectionLink('projects')}
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-ember transition-colors mb-8 font-mono"
          >
            <HiArrowLeft size={14} aria-hidden />
            Back to projects
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h1 className="text-3xl md:text-4xl font-display font-bold">{project.title}</h1>
            {project.badge && (
              <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-ember/30 bg-ember-soft text-ember">
                {project.badge}
              </span>
            )}
          </div>

          {project.tagline && (
            <p className="text-lg text-foreground/70 mb-4 leading-relaxed">{project.tagline}</p>
          )}

          <p className="text-sm text-muted font-mono mb-8">{project.tags.join(' · ')}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="project-hero relative rounded-2xl overflow-hidden mb-8 glass">
            {hasImage ? (
              <>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover object-top"
                />
                <div className="project-hero-overlay" />
                {heroTarget && (
                  <a
                    href={heroTarget}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-visit-btn group"
                  >
                    <span className="project-visit-btn-inner">
                      {project.liveUrl ? (
                        <HiExternalLink size={18} aria-hidden />
                      ) : heroIsDownload ? (
                        <HiDownload size={18} aria-hidden />
                      ) : (
                        <FaGithub size={18} aria-hidden />
                      )}
                      <span>{heroLabel}</span>
                    </span>
                  </a>
                )}
              </>
            ) : (
              <div className="project-hero-placeholder aspect-video flex flex-col items-center justify-center gap-4 p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-ember-soft flex items-center justify-center">
                  <HiCode size={28} className="text-ember" aria-hidden />
                </div>
                <div>
                  <p className="font-display font-semibold text-lg text-foreground">
                    {project.badge ?? 'Coming soon'}
                  </p>
                  <p className="text-muted text-sm mt-1 max-w-xs">
                    Screenshots will be added once closed testing wraps up.
                  </p>
                </div>
                {heroTarget && (
                  <a
                    href={heroTarget}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-visit-btn-static"
                  >
                    <FaGithub size={16} aria-hidden />
                    View on GitHub
                  </a>
                )}
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ember-ghost inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
              >
                <HiExternalLink size={14} aria-hidden />
                Live site
              </a>
            )}
            {project.downloadUrl && (
              <a
                href={project.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ember-ghost inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
              >
                <HiDownload size={14} aria-hidden />
                {project.downloadLabel ?? 'Download'}
              </a>
            )}
            {project.repos?.map((repo) => (
              <a
                key={repo.url}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ember-ghost inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
              >
                <FaGithub size={14} aria-hidden />
                {repo.label}
              </a>
            ))}
            {project.blogSlug && (
              <Link
                to={`/blog/${project.blogSlug}`}
                className="btn-ember-ghost inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
              >
                <HiBookOpen size={14} aria-hidden />
                Read the story
              </Link>
            )}
            {project.video && (
              <button
                type="button"
                onClick={() => scrollToSection('see-it-in-action')}
                className="btn-ember-ghost inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
              >
                <HiChevronDown size={14} aria-hidden />
                See it in action
              </button>
            )}
            {hasScreenshots && (
              <button
                type="button"
                onClick={() => scrollToSection('screenshots')}
                className="btn-ember-ghost inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
              >
                <HiChevronDown size={14} aria-hidden />
                Screenshots
              </button>
            )}
          </div>
        </Reveal>

        {project.overview && (
          <Reveal delay={0.11}>
            <p className="text-foreground/80 text-base leading-relaxed mb-8">{project.overview}</p>
          </Reveal>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <Reveal delay={0.12}>
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
              Highlights
            </h2>
            <ul className="project-highlights-list space-y-2.5 mb-8">
              {project.highlights.map((item) => (
                <li key={item} className="text-sm text-foreground/80 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {hasScreenshots && (
          <div id="screenshots">
            <Reveal delay={0.13}>
              <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
                Screenshots
              </h2>
              <ScreenshotSlider
                screenshots={project.screenshots!}
                onOpen={(shot) => setLightbox({ src: shot.src, alt: shot.alt })}
              />
            </Reveal>
          </div>
        )}

        {project.stack && project.stack.length > 0 && (
          <Reveal delay={0.16}>
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
              Tech stack
            </h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map((tech) => (
                <span key={tech} className="skill-pill">
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        )}

        {project.sections?.map((section, i) => (
          <Reveal key={section.heading} delay={0.18 + i * 0.04}>
            <h2 className="text-lg font-display font-semibold text-foreground mb-2 mt-6">
              {section.heading}
            </h2>
            <p className="text-foreground/75 text-sm leading-relaxed mb-4">{section.body}</p>
          </Reveal>
        ))}

        {project.video && (
          <Reveal delay={0.22}>
            <h2
              id="see-it-in-action"
              className="text-xl font-display font-semibold text-foreground mb-4 mt-10 scroll-mt-28"
            >
              See it in action
            </h2>
            <div className="rounded-2xl overflow-hidden glass">
              <video
                controls
                poster={project.poster}
                className="w-full aspect-video bg-surface"
                preload="metadata"
              >
                <source src={project.video} type="video/mp4" />
              </video>
            </div>
          </Reveal>
        )}
      </main>
    </div>
  );
};

export default ProjectDetail;
