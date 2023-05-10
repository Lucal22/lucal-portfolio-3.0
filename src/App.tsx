import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './container/Header';
import HomePage from './page/HomePage';
import Footer from './container/Footer';
import ProjectContentPage from './page/ProjectContentPage';
import ProjectsPage from './page/ProjectsPage';
import AboutPage from './page/AboutPage';
import Error from './page/Error';

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
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
