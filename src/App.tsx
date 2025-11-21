import { useLocation, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/home";

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
      <Layout>
        <PageTitle title="Portfolio" />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;