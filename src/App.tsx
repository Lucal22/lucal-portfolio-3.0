import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './container/About';
import Header from './container/Header';
import HomePage from './container/HomePage';
import Projects from './container/Projects';
import Footer from './container/Footer';
import ProjectDetails from './Page/ProjectDetails';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path={`/projects/:params`} element={<ProjectDetails />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
