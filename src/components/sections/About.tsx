import { profile, skills } from '../../data/portfolio';
import Reveal from '../Reveal';

const About = () => (
  <section id="about" className="mb-24 scroll-mt-24">
    <Reveal>
      <h2 className="text-muted text-sm font-mono uppercase tracking-widest mb-6">About</h2>
      <p className="text-foreground/80 leading-relaxed">{profile.bio}</p>

      <div className="mt-8">
        <h3 className="text-muted text-xs font-mono uppercase tracking-widest mb-4">Skills</h3>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="skill-pill"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  </section>
);

export default About;
