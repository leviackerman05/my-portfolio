import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import IconRail from './IconRail';
import MobileNav from './MobileNav';
import ThemeToggle from './ThemeToggle';
import ScrollProgress from './ScrollProgress';
import Reveal from './Reveal';
import { blogPosts } from '../data/portfolio';

export const POSTS = blogPosts.map((p) => ({
  id: p.id,
  title: p.title,
  author: 'Priyansh Singh',
  date: p.date,
  readTime: p.readTime,
  summary: p.summary,
  tags: p.tags.map((t) => t.toLowerCase()),
}));

const FullBlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<string>('');
  const post = POSTS.find((p) => p.id === id);

  useEffect(() => {
    if (post) {
      import(`../blog-posts/${post.id}.md`)
        .then((module) => {
          fetch(module.default)
            .then((res) => res.text())
            .then((text) => setContent(text))
            .catch((err) => console.error('Error loading blog post content:', err));
        })
        .catch((err) => console.error('Error importing blog post:', err));
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-canvas text-foreground flex items-center justify-center">
        <p className="text-muted">Blog post not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-canvas text-foreground relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none dot-bg" />
      <ScrollProgress />
      <ThemeToggle />
      <IconRail />
      <MobileNav />

      <main className="relative max-w-3xl mx-auto px-6 pt-20 md:pt-12 pb-20 md:pl-24">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">{post.title}</h1>
          <p className="text-sm text-muted font-mono mb-10">
            {post.author} · {post.date} · {post.readTime}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-a:text-ember prose-code:text-ember">
            <ReactMarkdown
              components={{
                h2: ({ ...props }) => (
                  <h2 className="text-2xl font-display font-semibold mb-4 mt-8 text-foreground" {...props} />
                ),
                h3: ({ ...props }) => (
                  <h3 className="text-xl font-display font-semibold mb-3 mt-6 text-foreground" {...props} />
                ),
                p: ({ ...props }) => <p className="text-foreground/80 text-base mb-4 leading-relaxed" {...props} />,
                ul: ({ ...props }) => <ul className="list-disc pl-6 mb-4 text-foreground/80" {...props} />,
                ol: ({ ...props }) => <ol className="list-decimal pl-6 mb-4 text-foreground/80" {...props} />,
                li: ({ ...props }) => <li className="mb-2" {...props} />,
                code({ inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-xl my-4 glass !bg-surface"
                      customStyle={{
                        fontSize: '0.85rem',
                        padding: '1em',
                        margin: '0.5em 0',
                      }}
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code
                      className="bg-ember-soft text-ember px-2 py-0.5 rounded text-sm"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm text-muted bg-ember-soft text-ember px-3 py-1 rounded-full font-mono"
            >
              #{tag}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FullBlogPost;
