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
import AccountPage from './account';
import SignUp from './SignUp';
import Login from './Login';
import AccountHeader from './AccountHeader';
import DashboardHero from './DashboardHero'; 
import TransactionHistory from './TransactionHistory';
import Notifications from './Notifications';
import Dashboard from './Dashboard';
import Footer from './Footer';


function App() {
  return (
    <Router>
      <div className="App">
        {/* Hero component shown only on the landing page (/) */}
        
        <Routes>
          {/* Landing page with Hero */}
          <Route path="/" element={<Hero />} />

          {/* Other routes */}
          <Route path="/dashboard" element={<><DashboardHero /> 
          <Dashboard /></>} />
          <Route path="/features" element={<Features />} />
          <Route path="/feature/:id" element={<FeaturePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/SignUp" element={<SignUp />} /> {/* Changed path to lowercase */}
          <Route path="/login" element={<Login />} /> {/* Changed path to lowercase */}
          <Route path="/account-header" element={<AccountHeader />} /> {/* Consistent naming */}
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
        </Routes>

        {/* Other components like CTA */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
