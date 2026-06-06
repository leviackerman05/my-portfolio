import { HiDownload } from 'react-icons/hi';
import IconRail from '../components/IconRail';
import MobileNav from '../components/MobileNav';
import ThemeToggle from '../components/ThemeToggle';
import ResumeDocument from '../components/ResumeDocument';
import { profile } from '../data/portfolio';

const PDF_URL = '/resume.pdf';
const DOWNLOAD_NAME = 'PriyanshSingh_Resume.pdf';

const DownloadButton = ({ className = '' }: { className?: string }) => (
  <a
    href={PDF_URL}
    download={DOWNLOAD_NAME}
    className={`btn-ember btn-ember-white gap-2 ${className}`.trim()}
  >
    <HiDownload size={16} />
    Download
  </a>
);

const Resume = () => (
  <div className="min-h-screen bg-canvas text-foreground relative">
    <div className="fixed inset-0 pointer-events-none dot-bg" />

    <ThemeToggle />
    <IconRail />
    <MobileNav />

    <header className="hidden md:flex fixed top-4 right-16 z-10 items-center justify-end">
      <DownloadButton />
    </header>

    <main className="relative max-w-5xl mx-auto px-6 pt-20 md:pt-12 pb-20 md:pl-24 min-h-screen">
      <div className="w-full max-w-[840px]">
        <div className="md:hidden mb-6">
          <DownloadButton />
        </div>
        <ResumeDocument />
        <p className="sr-only">{profile.name} resume</p>
      </div>
    </main>
  </div>
);

export default Resume;
