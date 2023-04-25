import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './container/About';
import Header from './container/Header';
import HomePage from './container/HomePage';
import Projects from './container/Projects';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
