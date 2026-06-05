interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  variant?: 'column' | 'alternating';
}

const Timeline = ({ items, variant = 'alternating' }: TimelineProps) => {
  if (variant === 'column') {
    return (
      <div className="relative pl-8">
        <div className="absolute left-[7px] top-0 bottom-0 w-px bg-stroke/60" />
        <div className="space-y-10">
          {items.map((item) => (
            <div key={item.id} className="relative">
              <div className="absolute -left-8 top-1 w-3.5 h-3.5 bg-canvas border-2 border-ember rounded-full" />
              <h3 className="text-base font-display font-semibold text-foreground">{item.title}</h3>
              <p className="text-ember text-sm font-medium mt-0.5">{item.subtitle}</p>
              <span className="text-muted text-xs block mt-1">{item.date}</span>
              {item.description && (
                <p className="text-foreground/70 text-sm leading-relaxed mt-2">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative pl-8 md:pl-0">
      <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-stroke/60 md:-translate-x-1/2" />
      <div className="space-y-10">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex flex-col md:flex-row md:items-start ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="absolute left-0 md:left-1/2 w-3.5 h-3.5 bg-canvas border-2 border-ember rounded-full md:-translate-x-1/2 z-10" />
            <div
              className={`w-full md:w-1/2 pl-6 md:pl-0 ${
                index % 2 === 0 ? 'md:pl-10 md:text-left' : 'md:pr-10 md:text-right'
              }`}
            >
              <h3 className="text-base font-display font-semibold text-foreground">{item.title}</h3>
              <p className="text-ember text-sm font-medium mt-0.5">{item.subtitle}</p>
              <span className="text-muted text-xs block mt-1">{item.date}</span>
              {item.description && (
                <p className="text-foreground/70 text-sm leading-relaxed mt-2">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
