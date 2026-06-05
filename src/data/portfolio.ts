import resumateImage from '../assets/Resumate.png';
import portfolioImage from '../assets/my-portfolio.png';

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

export interface Project {
  id: string;
  title: string;
  image?: string;
  summary: string;
  tags: string[];
  link?: string;
  comingSoon?: boolean;
}

export interface BlogPost {
  id: string;
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
    id: '1',
    title: 'Resumate',
    image: resumateImage,
    summary: 'Next.js-powered cover letter generator for streamlined job applications.',
    tags: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
    link: 'https://resumate-nextjs-294n.vercel.app/',
  },
  {
    id: '2',
    title: 'My Portfolio',
    image: portfolioImage,
    summary: 'Personal portfolio website showcasing experience, projects, and technical background.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    link: 'https://priyansh-singh.vercel.app/',
  },
  {
    id: '3',
    title: 'Mobile App',
    summary: 'A mobile application — details coming soon.',
    tags: ['Coming soon'],
    comingSoon: true,
  },
  {
    id: '4',
    title: 'Something Else',
    summary: 'Another project in the works — stay tuned.',
    tags: ['Coming soon'],
    comingSoon: true,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Learning Next.js 13 App Router: A Comprehensive Guide',
    date: 'Oct 12, 2024',
    readTime: '8 min read',
    summary: 'Explore Next.js 13 App Router features through a real-world cover letter generator project.',
    tags: ['Next.js', 'App Router', 'Web Dev'],
  },
  {
    id: '2',
    title: 'Advanced State Management Patterns in React with TypeScript',
    date: 'Oct 3, 2024',
    readTime: '10 min read',
    summary: 'Type-safe, scalable state management with custom hooks and context optimization.',
    tags: ['React', 'TypeScript', 'State Management'],
  },
  {
    id: '3',
    title: 'Understanding React Server Components: A Practical Guide',
    date: 'Sept 12, 2024',
    readTime: '6 min read',
    summary: 'What RSC is, why it matters, and how to implement it in your projects.',
    tags: ['React', 'RSC', 'Performance'],
  },
];

export const sections = ['hero', 'about', 'experience', 'projects', 'blog'] as const;
