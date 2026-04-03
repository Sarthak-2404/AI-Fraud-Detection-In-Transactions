import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import Security from './pages/Security';
import Pricing from './pages/Pricing';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import HowItWorksPage from './pages/HowItWorks';
import Testimonials from './pages/Testimonials';
import CaseStudies from './pages/CaseStudies';
import APIDocumentation from './pages/APIDocumentation';
import HelpCenter from './pages/HelpCenter';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const LandingPage = () => (
  <>
    <Navbar />
    <Hero />
    <Stats />
    <HowItWorks />
    <Features />
    <FAQ />
    {/*<CallToAction />*/}
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-gray-900 font-sans">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<><Navbar /><AboutUs /><Footer /></>} />
          <Route path="/how-it-works" element={<><Navbar /><HowItWorksPage /><Footer /></>} />
          <Route path="/security" element={<><Navbar /><Security /><Footer /></>} />
          <Route path="/pricing" element={<><Navbar /><Pricing /><Footer /></>} />
          <Route path="/careers" element={<><Navbar /><Careers /><Footer /></>} />
          <Route path="/blog" element={<><Navbar /><Blog /><Footer /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
          <Route path="/testimonials" element={<><Navbar /><Testimonials /><Footer /></>} />
          <Route path="/case-studies" element={<><Navbar /><CaseStudies /><Footer /></>} />
          <Route path="/api-documentation" element={<><Navbar /><APIDocumentation /><Footer /></>} />
          <Route path="/help" element={<><Navbar /><HelpCenter /><Footer /></>} />
          <Route path="/privacy" element={<><Navbar /><PrivacyPolicy /><Footer /></>} />
          <Route path="/terms" element={<><Navbar /><TermsOfService /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
