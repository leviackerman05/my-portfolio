import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Portfolio from './pages/Portfolio';
import Blog from './pages/blog';
import Resume from './pages/Resume';
import FullBlogPost from './components/FullBlogPost';
import ProjectDetail from './pages/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';

function PageTitle({ title }: { title: string }) {
  const location = useLocation();
  useEffect(() => {
    document.title = title;
  }, [location, title]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageTitle title="Priyansh Singh — Portfolio" />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/home" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<FullBlogPost />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
