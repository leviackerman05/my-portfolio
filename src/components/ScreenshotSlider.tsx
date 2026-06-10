import { useState } from 'react';
import { HiChevronLeft, HiChevronRight, HiZoomIn } from 'react-icons/hi';

interface Screenshot {
  src: string;
  alt: string;
}

interface ScreenshotSliderProps {
  screenshots: Screenshot[];
  onOpen: (shot: Screenshot) => void;
}

const ScreenshotSlider = ({ screenshots, onOpen }: ScreenshotSliderProps) => {
  const [index, setIndex] = useState(0);
  const total = screenshots.length;
  const current = screenshots[index];

  const go = (next: number) => {
    setIndex((next + total) % total);
  };

  return (
    <div className="project-screenshot-slider glass rounded-2xl overflow-hidden mb-8">
      <div className="project-screenshot-viewport relative">
        <div
          className="project-screenshot-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {screenshots.map((shot) => (
            <button
              key={shot.src}
              type="button"
              className="project-screenshot-slide-btn"
              onClick={() => onOpen(shot)}
              aria-label={`View full size: ${shot.alt}`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                className="w-full aspect-video object-cover object-top"
                draggable={false}
              />
            </button>
          ))}
        </div>

        <span className="project-screenshot-zoom" aria-hidden>
          <HiZoomIn size={18} />
        </span>

        {total > 1 && (
          <>
            <button
              type="button"
              className="project-screenshot-nav project-screenshot-nav-prev"
              onClick={() => go(index - 1)}
              aria-label="Previous screenshot"
            >
              <HiChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="project-screenshot-nav project-screenshot-nav-next"
              onClick={() => go(index + 1)}
              aria-label="Next screenshot"
            >
              <HiChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 px-4 py-3 border-t border-stroke/40">
        <p key={index} className="project-screenshot-caption text-xs text-muted leading-relaxed min-w-0">
          {current.alt}
        </p>
        <span className="text-xs font-mono text-muted shrink-0">
          {index + 1} / {total}
        </span>
      </div>

      {total > 1 && (
        <div className="flex items-center justify-center gap-1.5 px-4 pb-4">
          {screenshots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              className={`project-screenshot-dot${i === index ? ' project-screenshot-dot-active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ScreenshotSlider;
