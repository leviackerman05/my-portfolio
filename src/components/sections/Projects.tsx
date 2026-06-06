import { Link } from 'react-router-dom';
import { projects } from '../../data/portfolio';
import Reveal from '../Reveal';

const Projects = () => {
  return (
    <section id="projects" className="mb-24 scroll-mt-24">
      <Reveal>
        <h2 className="text-muted text-sm font-mono uppercase tracking-widest mb-8">Projects</h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
        {projects.map((p) => (
          <Reveal key={p.id}>
            <Link to={`/projects/${p.slug}`} className="group block">
              {p.image ? (
                <div className="overflow-hidden rounded-lg mb-3 relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-36 object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  {p.badge && (
                    <span className="absolute top-2 right-2 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border border-ember/30 bg-canvas/80 text-ember backdrop-blur-sm">
                      {p.badge}
                    </span>
                  )}
                </div>
              ) : (
                <div className="h-36 rounded-lg mb-3 glass flex items-center justify-center relative">
                  <span className="text-muted text-sm font-mono">{p.badge ?? 'Coming soon'}</span>
                </div>
              )}
              <h3 className="font-display font-semibold text-foreground group-hover:text-ember transition-colors">
                {p.title}
              </h3>
              <p className="text-muted text-xs font-mono mt-1">{p.tags.join(' · ')}</p>
              <p className="text-foreground/70 text-sm mt-2 leading-relaxed">{p.summary}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
