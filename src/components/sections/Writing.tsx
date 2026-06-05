import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/portfolio';
import Reveal from '../Reveal';

const Writing = () => (
  <section id="blog" className="mb-24 scroll-mt-24">
    <Reveal>
      <h2 className="text-muted text-sm font-mono uppercase tracking-widest mb-8">Writing</h2>
    </Reveal>
    <div className="divide-y divide-stroke/40">
      {blogPosts.map((post) => (
        <article key={post.id} className="py-6 first:pt-0">
          <Link to={`/blog/${post.id}`} className="group block">
            <p className="text-muted text-xs font-mono mb-2">
              {post.date} · {post.readTime}
            </p>
            <h3 className="font-display font-semibold text-foreground group-hover:text-ember transition-colors">
              {post.title}
            </h3>
            <p className="text-foreground/60 text-sm mt-2 line-clamp-2">{post.summary}</p>
          </Link>
        </article>
      ))}
    </div>
    <Reveal delay={0.1}>
      <Link to="/blog" className="btn-ember-link inline-block mt-6">
        All posts →
      </Link>
    </Reveal>
  </section>
);

export default Writing;
