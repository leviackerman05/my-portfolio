import { projects } from '../../data/portfolio';
import Reveal from '../Reveal';

const Projects = () => {
  const live = projects.filter((p) => !p.comingSoon);
  const upcoming = projects.filter((p) => p.comingSoon);

  return (
    <section id="projects" className="mb-24 scroll-mt-24">
      <Reveal>
        <h2 className="text-muted text-sm font-mono uppercase tracking-widest mb-8">Projects</h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
        {live.map((p) => (
          <Reveal key={p.id}>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              {p.image && (
                <div className="overflow-hidden rounded-lg mb-3">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-36 object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              )}
              <h3 className="font-display font-semibold text-foreground group-hover:text-ember transition-colors">
                {p.title}
              </h3>
              <p className="text-muted text-xs font-mono mt-1">{p.tags.join(' · ')}</p>
              <p className="text-foreground/70 text-sm mt-2 leading-relaxed">{p.summary}</p>
            </a>
          </Reveal>
        ))}
      </div>

      {upcoming.length > 0 && (
        <div className="mt-10 pt-8 border-t border-stroke/40 space-y-4">
          {upcoming.map((p) => (
            <Reveal key={p.id}>
              <div className="flex items-baseline gap-3">
                <span className="text-muted/50 text-xs font-mono uppercase shrink-0">Soon</span>
                <div>
                  <h3 className="font-display font-semibold text-muted">{p.title}</h3>
                  <p className="text-muted/60 text-sm mt-0.5">{p.summary}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
