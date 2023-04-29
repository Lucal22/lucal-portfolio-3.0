import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './container/Header';
import HomePage from './page/HomePage';
import Footer from './container/Footer';
import ProjectContentPage from './page/ProjectContentPage';
import ProjectsPage from './page/ProjectsPage';
import AboutPage from './page/AboutPage';
import PostContentPage from './page/PostContentPage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path={`/projects/:slug`} element={<ProjectContentPage />} />
          <Route path="/posts" element={<ProjectsPage />} />
          <Route path={`/posts/:slug`} element={<PostContentPage />} />
          <Route path="*" element={<>erro</>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
