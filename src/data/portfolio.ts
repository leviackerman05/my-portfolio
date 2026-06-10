import betternoteImage from '../assets/Betternote.png';
import resumateImage from '../assets/Resumate.png';
import portfolioImage from '../assets/my-portfolio.png';
import vizionImage from '../assets/vizion.png';

export interface Social {
  name: string;
  url: string;
  label: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  date: string;
  location: string;
  highlights: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  date: string;
  location: string;
}

export interface ProjectRepo {
  label: string;
  url: string;
}

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  image?: string;
  summary: string;
  tags: string[];
  tagline?: string;
  overview?: string;
  highlights?: string[];
  stack?: string[];
  sections?: ProjectSection[];
  liveUrl?: string;
  downloadUrl?: string;
  downloadLabel?: string;
  repos?: ProjectRepo[];
  blogSlug?: string;
  badge?: string;
  video?: string;
  poster?: string;
  screenshots?: { src: string; alt: string }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
}

export const profile = {
  name: 'Priyansh Singh',
  title: 'Senior Engineer',
  company: 'SurveyMonkey',
  role: 'SDE-2',
  yearsOfExperience: 5,
  location: 'Bangalore, India',
  email: 'singhpriyansh2000@gmail.com',
  phone: '9993122588',
  tagline: 'Building scalable, secure, and high-performance web applications.',
  bio: `Software Engineer with 5 years of experience building scalable, secure, and high-performance web applications. Skilled in modern frontend and backend development, API-driven architectures, and improving system reliability. Experienced in leading cross-functional initiatives and delivering impactful solutions using React, Next.js, Vue, Node.js, and GraphQL.`,
  shortBio: `I build the API, break it, fix it, and ship the UI that makes it look intentional.`,
  resumeUrl: '/resume',
  resumePdfUrl: '/resume.pdf',
};

export const socials: Social[] = [
  { name: 'GitHub', url: 'https://github.com/leviackerman05', label: 'GitHub' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/priyansh-s-435504173/', label: 'LinkedIn' },
  { name: 'Email', url: 'mailto:singhpriyansh2000@gmail.com', label: 'Email' },
];

export const experience: Experience[] = [
  {
    id: '1',
    title: 'Software Engineer - II',
    company: 'SurveyMonkey',
    date: 'Nov 2024 – Present',
    location: 'Bangalore, India',
    highlights: [
      'Led modernization of Enterprise Admin with React workflows, filtering, and user management.',
      'Integrated GraphQL and REST APIs; improved security by addressing XSS and injection vulnerabilities.',
      'Maintained 85%+ test coverage and 99.976% SLA across production systems.',
    ],
  },
  {
    id: '2',
    title: 'SDE - Frontend Engineer',
    company: 'Mile Tech (prev. Automatad)',
    date: 'Jun 2022 – Oct 2024',
    location: 'Remote / Bangalore',
    highlights: [
      'Built reusable design systems across Vue and React products.',
      'Migrated legacy apps to Micro Frontend architecture, cutting build times by 90%.',
      'Reduced API payload size by 25% and improved render performance by 15%.',
    ],
  },
  {
    id: '3',
    title: 'Associate Software Developer',
    company: 'Accenture',
    date: 'Aug 2021 – Jun 2022',
    location: 'Bangalore, India',
    highlights: [
      'Contributed to AngularJS internal tools and led migration to Angular.',
      'Participated in code reviews and cloud-native architecture workshops.',
    ],
  },
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'B.E. in Computer Science',
    school: 'Sir M Visvesvaraya Institute of Technology',
    date: '2017 – 2021',
    location: 'Bangalore, India',
  },
];

export const skills = [
  'React',
  'Next.js',
  'Vue.js',
  'TypeScript',
  'Redux',
  'Node.js',
  'GraphQL',
  'Tailwind CSS',
  'Git',
  'Jest',
];

export const projects: Project[] = [
  {
    id: '5',
    slug: 'betternote',
    title: 'Betternote',
    image: betternoteImage,
    summary:
      'Local-first macOS notes app for developers with wiki links, quick capture, and optional local AI.',
    tags: ['Tauri', 'React', 'TypeScript', 'SQLite'],
    tagline: 'Notes for developers who care where their data lives.',
    overview:
      'Betternote is a desktop notes app I designed and built end-to-end for macOS. It targets developers who need a fast, keyboard-driven workspace without accounts, servers, or data leaving their machine. On the frontend, I built a React + TypeScript UI with a custom TipTap editor: floating format toolbar, wiki-style [[links]], backlinks, tags, reminders, note locking, and a command palette (⌘K) for quick capture and navigation. The backend is Rust (Tauri v2) with SQLite for persistence, encrypted note locking, macOS keychain integration, and Tauri commands for CRUD, search, and exports. Optional integrations include Ollama for on-device LLM tasks, Jira for ticket creation from notes, and a generic MCP connector, all behind explicit privacy settings.',
    highlights: [
      'Local-first notes app with no backend, no login, and data on device',
      'Rich TipTap editor: bold/italic/links, task lists, slash commands, selection toolbar',
      'Wiki links and backlinks between notes via [[Note title]] syntax',
      'Global search (⌘K), find-in-note (⌘F), and quick capture (⌘N)',
      'Workspaces, tags, favorites, reminders, note lock, and export',
      'Optional local AI (Ollama): summarize, rewrite, extract tasks, explain',
      'Optional Jira and MCP integrations, disabled by default via Local Only Mode',
      'Shipped as a distributable .dmg with GitHub Actions CI/CD for macOS releases',
    ],
    stack: [
      'Tauri v2',
      'Rust',
      'React',
      'TypeScript',
      'SQLite',
      'TipTap',
      'Ollama',
      'Vite',
    ],
    sections: [
      {
        heading: 'Privacy by default',
        body: 'Local Only Mode blocks all outbound network calls until you opt in. Notes and settings live in ~/Library/Application Support/com.betternotes.desktop. Integrations for Jira, MCP, and Ollama require explicit enablement in Settings.',
      },
      {
        heading: 'Editor and navigation',
        body: 'The TipTap editor includes custom extensions for wiki links, find-in-note search, Jira chips, and AI agent blocks. Keyboard shortcuts cover search (⌘K), find in note (⌘F), quick capture (⌘N), and slash commands in the editor.',
      },
      {
        heading: 'Install on macOS',
        body: 'Download the DMG from GitHub Releases, drag Betternote into Applications, and open from there. Because the app is not Apple-notarized, macOS may block the first launch. Right-click the app and choose Open once, or run xattr -cr /Applications/Betternote.app in Terminal.',
      },
    ],
    downloadUrl:
      'https://github.com/leviackerman05/Betternotes/releases/latest/download/Betternote.dmg',
    downloadLabel: 'Download for macOS',
    repos: [{ label: 'GitHub', url: 'https://github.com/leviackerman05/Betternotes' }],
    screenshots: [
      { src: '/betternote/editor-home.png', alt: 'Betternote home screen with quick actions' },
      { src: '/betternote/jira-sprint.png', alt: 'Jira sprint board synced inside Betternote' },
      { src: '/betternote/settings.png', alt: 'Privacy and appearance settings' },
      { src: '/betternote/integrations.png', alt: 'Optional integrations including Jira and MCP' },
      { src: '/betternote/light-mode.png', alt: 'Betternote in light mode' },
    ],
  },
  {
    id: '1',
    slug: 'resumate',
    title: 'Resumate',
    image: resumateImage,
    summary:
      'AI cover letter studio that reads your resume and JD, generates a tailored letter, and exports a crisp single-page PDF.',
    tags: ['Next.js', 'Groq', 'React PDF', 'TypeScript'],
    tagline: 'Resume plus job description in. Tailored cover letter and PDF out.',
    overview:
      'Resumate is a web app that turns your resume PDF and job description into a tailored, editable cover letter with high-quality PDF export. Sign in with Google, upload documents, pick tone and length, and Groq writes structured content you can edit live. Choose from 12 templates, preview the PDF in the browser, and download vector output that actually fits on one page. Nothing is stored server-side except a daily usage counter.',
    highlights: [
      'PDF parsing for resume and JD uploads via /api/parse',
      'Groq Llama 3.3 generation with tone, length, and regenerate controls',
      '12 PDF templates with Compact, Standard, and Spacious density modes',
      'Live vector PDF preview via @react-pdf/renderer (replaced blurry react-to-pdf)',
      'Google auth, 5 generations/day via Upstash Redis, stateless privacy',
      'Vercel-inspired UI with dark mode, mobile layout, and template picker',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'NextAuth',
      'Groq',
      '@react-pdf/renderer',
      'Upstash Redis',
      'Vercel',
    ],
    sections: [
      {
        heading: 'What it was before',
        body: 'The original app was a manual cover letter form: users typed every field by hand, picked one hardcoded blue-banner template, and exported via react-to-pdf (a screenshot of the page, blurry and non-selectable). No AI, no resume parsing, no job description input.',
      },
      {
        heading: 'What changed',
        body: 'A full rebuild added document parsing, Groq-powered generation, Google sign-in with daily rate limits, and a real PDF pipeline with 12 styled templates. The UI moved to a Vercel-inspired monochrome design with dark mode, a two-pane editor, live PDF preview, and mobile-friendly uploads.',
      },
      {
        heading: 'How it works',
        body: 'Sign in with Google, upload a resume PDF and add a JD (paste or PDF). The parse API extracts text, the generate API checks rate limits and calls Groq for structured JSON. You edit every field, pick a template and density, preview the PDF live, then download as PDF or plain text. Cover letters never touch a database.',
      },
    ],
    liveUrl: 'https://resumate-nextjs-294n.vercel.app/',
  },
  {
    id: '3',
    slug: 'nest',
    title: 'Nest',
    summary: 'Offline-first Android finance tracker that reads bank SMS and keeps everything on-device.',
    tags: ['React Native', 'Expo', 'TypeScript', 'SQLite'],
    badge: 'In closed testing',
    tagline: 'Your bank SMS, parsed into a personal finance dashboard.',
    overview:
      'Nest is an offline-first Android app that scans your SMS inbox for bank debit and credit alerts, extracts transactions automatically, and stores everything in on-device SQLite. No server, no account required for core use. Currently in Play Store closed testing.',
    highlights: [
      'Automatic SMS import from 30+ Indian banks and UPI providers',
      'Smart parsing of amount, merchant, date, and transaction type',
      'Live SMS listener for background import of new alerts',
      'Dashboard with monthly spend, income summary, and trend charts',
      'Content-hash deduplication across SMS, Gmail, and CSV imports',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'expo-sqlite', 'Victory Native'],
    sections: [
      {
        heading: 'How SMS parsing works',
        body: 'The app reads up to 50,000 inbox messages, filters them against bank and UPI heuristics, extracts amounts with currency-aware regex, and infers merchant, date, and type. A content hash prevents double-imports across sync methods.',
      },
      {
        heading: 'Privacy first',
        body: 'Everything stays on your phone. SQLite runs in WAL mode with no cloud sync for core features. Gmail import is optional and requires explicit OAuth setup.',
      },
    ],
    repos: [{ label: 'nest', url: 'https://github.com/leviackerman05/nest' }],
  },
  {
    id: '2',
    slug: 'portfolio',
    title: 'My Portfolio',
    image: portfolioImage,
    summary: 'Personal portfolio website showcasing experience, projects, and technical background.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    tagline: 'The site you are looking at right now.',
    overview:
      'A dark-first portfolio built with React, TypeScript, and Tailwind. It features a glass navigation rail, theme toggle, blog with markdown posts, a printable resume page, and gamified project detail pages.',
    highlights: [
      'Dark and light theme with localStorage persistence',
      'Blog with markdown rendering and syntax highlighting',
      'Responsive glass navigation for desktop and mobile',
      'Project detail pages with media heroes and write-ups',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router'],
    sections: [
      {
        heading: 'Design choices',
        body: 'The Ember theme uses warm stone tones, orange accents, and a subtle dot grid background. Motion is kept purposeful with reveal animations and glass surfaces that work in both light and dark mode.',
      },
    ],
    liveUrl: 'https://priyansh-singh.vercel.app/',
    repos: [{ label: 'source', url: 'https://github.com/leviackerman05/my-portfolio' }],
  },
  {
    id: '4',
    slug: 'vizion',
    title: 'Vizion',
    image: vizionImage,
    summary: 'AI-powered text-to-animation tool that turns prompts into Manim videos.',
    tags: ['AI', 'React', 'Python', 'Manim'],
    tagline: 'Describe an idea. Get a Manim animation back.',
    overview:
      'Vizion is a full-stack pipeline that takes natural language prompts, detects intent, generates Manim Python scripts with Gemini, validates the output, and renders educational videos. The React frontend handles chat sessions, previews, and exports while the FastAPI backend runs the render subprocess.',
    highlights: [
      'Natural language prompt input with chat-based session flow',
      'Intent detection and template-aware script generation via Gemini',
      'Manim render subprocess with validation and retry logic',
      'Firebase auth, video preview panel, and export workflow',
    ],
    stack: ['React', 'TypeScript', 'FastAPI', 'Python', 'Manim', 'Gemini', 'Firebase'],
    sections: [
      {
        heading: 'The pipeline',
        body: 'A prompt enters the system, gets classified by an intent detector, and is turned into Manim code through a template engine. The backend validates the script, spawns a render subprocess, and returns a video URL. Failures are caught early so bad code never reaches the renderer.',
      },
      {
        heading: 'Why two repos',
        body: 'vizion-ui is the React frontend with Tailwind and shadcn/ui. vizion is the FastAPI backend with the prompt engine, renderer, and static output serving. They communicate over a REST API and share a common prompt-to-video contract.',
      },
    ],
    repos: [
      { label: 'vizion-ui', url: 'https://github.com/leviackerman05/vizion-ui' },
      { label: 'vizion', url: 'https://github.com/leviackerman05/vizion' },
    ],
    blogSlug: 'vizion-text-to-animation',
    video: '/vizion-demo.mp4',
    poster: '/vizion-poster.jpg',
  },
];

const blogPostsUnsorted: BlogPost[] = [
  {
    id: '1',
    slug: 'nextjs-app-router',
    title: 'Learning Next.js 13 App Router: A Comprehensive Guide',
    date: 'Oct 12, 2024',
    readTime: '8 min read',
    summary: 'Explore Next.js 13 App Router features through a real-world cover letter generator project.',
    tags: ['Next.js', 'App Router', 'Web Dev'],
  },
  {
    id: '2',
    slug: 'react-state-management',
    title: 'Advanced State Management Patterns in React with TypeScript',
    date: 'Oct 3, 2024',
    readTime: '10 min read',
    summary: 'Type-safe, scalable state management with custom hooks and context optimization.',
    tags: ['React', 'TypeScript', 'State Management'],
  },
  {
    id: '3',
    slug: 'react-server-components',
    title: 'Understanding React Server Components: A Practical Guide',
    date: 'Sept 12, 2024',
    readTime: '6 min read',
    summary: 'What RSC is, why it matters, and how to implement it in your projects.',
    tags: ['React', 'RSC', 'Performance'],
  },
  {
    id: '4',
    slug: 'graphql-multi-filter-queries',
    title: 'GraphQL Multi-Filter Queries in Production',
    date: 'Dec 19, 2025',
    readTime: '9 min read',
    summary:
      'Pagination, N+1, and contract design patterns for multi-filter admin queries at scale.',
    tags: ['GraphQL', 'React', 'Performance'],
  },
  {
    id: '5',
    slug: 'github-actions-monorepos',
    title: 'CI/CD with GitHub Actions for Frontend Monorepos',
    date: 'Nov 3, 2025',
    readTime: '8 min read',
    summary:
      'Deploy previews, environment config, and artifact-based rollback for frontend monorepos.',
    tags: ['CI/CD', 'GitHub Actions', 'DevOps'],
  },
  {
    id: '6',
    slug: 'vizion-text-to-animation',
    title: 'Building Vizion: Lessons from a Text-to-Animation AI Pipeline',
    date: 'Feb 24, 2026',
    readTime: '10 min read',
    summary:
      'How Vizion turns prompts into Manim videos: intent detection, template engines, validation, and render failures.',
    tags: ['AI', 'Python', 'Manim'],
  },
  {
    id: '7',
    slug: 'when-not-to-use-ai',
    title: 'When Not to Use AI in Production',
    date: 'Jun 2, 2026',
    readTime: '7 min read',
    summary:
      'Why auth, billing, permissions, and audit trails should stay deterministic even when AI is everywhere else.',
    tags: ['AI', 'Security', 'Engineering'],
  },
];

const parseBlogDate = (date: string) =>
  new Date(date.replace('Sept', 'Sep')).getTime();

export const blogPosts = [...blogPostsUnsorted].sort(
  (a, b) => parseBlogDate(b.date) - parseBlogDate(a.date)
);

export const sections = ['home', 'about', 'experience', 'projects', 'blog'] as const;
