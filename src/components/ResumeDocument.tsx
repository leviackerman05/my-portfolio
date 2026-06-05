import { ReactNode } from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import {
  resumeProfile,
  resumeEducation,
  resumeExperience,
  resumeProjects,
  resumeSkills,
} from '../data/resume';

const ResumeSection = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => (
  <section className="resume-section">
    <h2 className="resume-label">{label}</h2>
    <div className="resume-content">{children}</div>
  </section>
);

const ResumeDocument = () => (
  <article className="resume-doc">
    <header className="resume-header">
      <div>
        <h1 className="resume-name">{resumeProfile.name}</h1>
        <p className="resume-role">{resumeProfile.title}</p>
        <p className="resume-contact-line">
          <a href={`mailto:${resumeProfile.email}`}>{resumeProfile.email}</a>
        </p>
      </div>
      <div className="resume-socials">
        <a
          href={resumeProfile.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="resume-social-link"
        >
          <SiLinkedin size={20} />
        </a>
        <a
          href={resumeProfile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="resume-social-link"
        >
          <SiGithub size={20} />
        </a>
      </div>
    </header>

    <ResumeSection label="Professional Summary">
      <p>{resumeProfile.summary}</p>
    </ResumeSection>

    <ResumeSection label="Education">
      <div className="resume-entry">
        <p className="resume-entry-title">{resumeEducation.school}</p>
        <p className="resume-entry-sub">{resumeEducation.degree}</p>
        <p className="resume-entry-meta">
          {resumeEducation.date} · {resumeEducation.location}
        </p>
      </div>
    </ResumeSection>

    <ResumeSection label="Experience">
      {resumeExperience.map((exp) => (
        <div key={exp.id} className="resume-entry">
          <p className="resume-entry-title">{exp.company}</p>
          <p className="resume-entry-sub">{exp.title}</p>
          <p className="resume-entry-meta">
            {exp.date} · {exp.location}
          </p>
          <ul className="resume-bullets">
            {exp.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      ))}
    </ResumeSection>

    <ResumeSection label="Projects">
      {resumeProjects.map((p) => (
        <div key={p.id} className="resume-entry">
          <p className="resume-entry-title">
            {p.link ? (
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                {p.title}
              </a>
            ) : (
              <>
                {p.title}
                <span className="resume-entry-tags"> | {p.tags}</span>
              </>
            )}
          </p>
          {p.link && <p className="resume-entry-meta resume-entry-tags">{p.tags}</p>}
          <p>{p.summary}</p>
        </div>
      ))}
    </ResumeSection>

    <ResumeSection label="Technical Skills">
      <p>
        <span className="resume-skill-label">Languages/Frameworks:</span>{' '}
        {resumeSkills.languagesFrameworks}
      </p>
      <p className="mt-2">
        <span className="resume-skill-label">Tools:</span> {resumeSkills.tools}
      </p>
    </ResumeSection>
  </article>
);

export default ResumeDocument;
