import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './container/About';
import Header from './container/Header';
import HomePage from './container/HomePage';
import Projects from './container/Projects';
import Footer from './container/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<h1>Página nao existe</h1>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
