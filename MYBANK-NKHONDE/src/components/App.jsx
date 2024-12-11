import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Hero from './Hero';
import Features from './features';
import FeaturePage from './FeaturePage';
import Services from './services';
import About from './about';
import Contact from './contact';
import CTA from './CTA';

function App() {
  return (
    <Router>
      <div className="App">
      <Hero />
        <Routes>
          {/* Hero should be rendered on the root route */}
         
         { /*<Route path="/" element={<Hero />} />*/}
         
          <Route path="/features" element={<Features />} />
          <Route path="/feature/:id" element={<FeaturePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <CTA />
      </div>
    </Router>
  );
}

export default App;
