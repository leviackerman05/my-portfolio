import { FC } from 'react';
import { Link } from 'react-router-dom';
import IconRail from '../components/IconRail';
import MobileNav from '../components/MobileNav';
import ThemeToggle from '../components/ThemeToggle';
import ScrollProgress from '../components/ScrollProgress';
import Reveal from '../components/Reveal';
import { blogPosts as POSTS } from '../data/portfolio';

const Blog: FC = () => {
  return (
    <div className="min-h-screen bg-canvas text-foreground relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none dot-bg" />

      <ScrollProgress />
      <ThemeToggle />
      <IconRail />
      <MobileNav />

      <div className="relative max-w-3xl mx-auto px-6 pt-20 md:pt-12 pb-20 md:pl-24">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Thoughts</h1>
          <p className="text-muted text-lg mb-12">
            Thoughts, code & everything in between.
          </p>
        </Reveal>

        <div className="divide-y divide-stroke/40">
          {POSTS.map((post) => (
            <article key={post.id} className="py-8 first:pt-0">
              <Link to={`/blog/${post.id}`} className="group block">
                <div className="flex items-center text-sm text-muted font-mono mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-display font-bold group-hover:text-ember transition-colors">
                  {post.title}
                </h2>
                <p className="text-foreground/70 leading-relaxed mt-3">{post.summary}</p>
                <span className="btn-ember-link inline-block mt-4 text-sm">Read more →</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
