import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './container/Header';
import HomePage from './page/HomePage';
import Footer from './container/Footer';
import ProjectContentPage from './page/ProjectContentPage';
import ProjectsPage from './page/ProjectsPage';
import AboutPage from './page/AboutPage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path={`/projects/:id`} element={<ProjectContentPage />} />
          <Route path="*" element={<>erro</>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
