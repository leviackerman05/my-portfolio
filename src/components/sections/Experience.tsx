import { experience, education } from '../../data/portfolio';
import Timeline from '../Timeline';

const experienceItems = experience.map((exp) => ({
  id: exp.id,
  title: exp.title,
  subtitle: exp.company,
  date: `${exp.date} · ${exp.location}`,
  description: exp.highlights.join(' '),
}));

const educationItems = education.map((edu) => ({
  id: edu.id,
  title: edu.degree,
  subtitle: edu.school,
  date: `${edu.date} · ${edu.location}`,
}));

const Experience = () => (
  <section id="experience" className="mb-24 scroll-mt-24">
    <h2 className="text-muted text-sm font-mono uppercase tracking-widest mb-12">
      Experience & Education
    </h2>
    <div className="grid md:grid-cols-2 gap-16 md:gap-12">
      <div>
        <h3 className="text-foreground font-display font-semibold mb-8">Experience</h3>
        <Timeline items={experienceItems} variant="column" />
      </div>
      <div>
        <h3 className="text-foreground font-display font-semibold mb-8">Education</h3>
        <Timeline items={educationItems} variant="column" />
      </div>
    </div>
  </section>
);

export default Experience;
