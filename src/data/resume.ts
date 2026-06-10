export const resumeProfile = {
  name: 'Priyansh Singh',
  title: 'Senior Software Engineer',
  email: 'singhpriyansh2000@gmail.com',
  portfolioUrl: 'https://priyansh-singh.vercel.app/',
  linkedIn: 'https://www.linkedin.com/in/priyansh-s-435504173/',
  github: 'https://github.com/leviackerman05',
  summary: `Senior Software Engineer with 5 years building enterprise admin platforms, design systems, and full-stack products. Strong in React, TypeScript, Next.js, GraphQL, Python, and Rust. Led admin modernization, security remediation, and production releases.`,
};

export const resumeEducation = {
  school: 'Sir M Visvesvaraya Institute of Technology, Bangalore',
  degree: 'Bachelor of Engineering in Computer Science',
  date: '2017 – 2021',
  location: 'Bangalore, India',
};

export const resumeExperience = [
  {
    id: '1',
    company: 'SurveyMonkey',
    title: 'Software Engineer II, Enterprise Admin',
    date: 'Nov 2024 – Present',
    location: 'Bangalore, India',
    highlights: [
      'Rebuilt the enterprise teammate management page in React: invite by email, link, or CSV; search and filter the team; change roles and license types; manage pending invites and export lists.',
      'Launched the admin home page enterprise customers see on login: seat usage, pending invites, and setup guidance; led rollout to US and Canada with in-app walkthroughs and banners.',
      'Built custom roles and permissions settings so admins control who can create surveys, view analytics, or share results; fixed role creation validation and permission edge cases.',
      'Fixed a multi-language login bug for global customers: users who chose Dutch, Japanese, or other languages still landed on English pages; patched the shared auth library and shipped the fix across our web apps.',
      'Improved the admin user activity report (SSO and join-date columns, sorting, pagination) and built a custom tag editor for organizing surveys in the enterprise content library.',
      'Security and release ownership: remediated XSS, log injection, SSRF, and vulnerable dependencies; raised test coverage to 85%+; owned deployments across all five services on the enterprise admin platform.',
    ],
  },
  {
    id: '2',
    company: 'Mile Tech (prev. Automatad)',
    title: 'SDE, Frontend Engineer',
    date: 'Jun 2022 – Oct 2024',
    location: 'Remote / Bangalore',
    highlights: [
      'Built reusable design systems and component libraries used across multiple Vue and React products.',
      'Worked across Vue 2/3 and React with Redux and Context API for complex application state.',
      'Migrated legacy apps to a micro frontend architecture, cutting build times by 90%.',
      'Delivered RBAC dashboards with dynamic forms and real-time APIs; reduced payload size by 25% and improved render performance by 15%.',
      'Set up GitHub Actions CI/CD for automated deployments across frontend services.',
    ],
  },
  {
    id: '3',
    company: 'Accenture',
    title: 'Associate Software Developer',
    date: 'Aug 2021 – Jun 2022',
    location: 'Bangalore, India',
    highlights: [
      'Contributed to AngularJS internal tools and led migration to Angular for improved maintainability.',
      'Participated in code reviews, documentation, and cloud-native architecture workshops.',
    ],
  },
];

export const resumeProjects = [
  {
    id: '1',
    title: 'Resumate',
    tags: 'NEXT.JS, GROQ, TYPESCRIPT, REACT PDF',
    summary:
      'AI cover letter studio with resume/JD parsing and vector PDF export.',
    link: 'https://priyansh-singh.vercel.app/projects/resumate',
  },
  {
    id: '2',
    title: 'Betternote',
    tags: 'RUST, REACT, TYPESCRIPT, SQLITE, TAURI',
    summary:
      'Local-first macOS notes with TipTap, Ollama AI, and Jira; shipped as DMG.',
    link: 'https://priyansh-singh.vercel.app/projects/betternote',
  },
  {
    id: '3',
    title: 'Nest',
    tags: 'REACT NATIVE, EXPO, TYPESCRIPT, SQLITE',
    summary:
      'Offline finance tracker parsing bank SMS into on-device SQLite dashboards.',
    link: 'https://priyansh-singh.vercel.app/projects/nest',
  },
  {
    id: '4',
    title: 'Vizion',
    tags: 'REACT, FASTAPI, PYTHON, MANIM, GEMINI',
    summary:
      'AI text-to-animation pipeline with Gemini and Manim rendering.',
    link: 'https://priyansh-singh.vercel.app/projects/vizion',
  },
];

export const resumeSkills = {
  languagesFrameworks:
    'React, Next.js, TypeScript, JavaScript, Vue.js, Node.js, GraphQL, Python, Rust, React Native, HTML, CSS, Tailwind CSS',
  tools: 'Git, GitHub Actions, Jest, React Testing Library, Vite, Docker, SQLite, REST APIs, CI/CD, Linux',
};
