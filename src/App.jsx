import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/common/Footer';
import CareerTracks from './components/sections/CareerTracks';
import FreelanceSection from './components/sections/FreelanceSection';
import ExperienceSection from './components/sections/ExperienceSection';
import TechnicalProficiency from './components/sections/TechnicalProficiency';
import CareerProfile from './components/pages/CareerProfile';

function HomePage() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="pt-20">
      <Hero onExploreWork={scrollToProjects} />
      <AboutSection />
      <CareerTracks />
      <FreelanceSection onContactClick={scrollToContact} />
      <ExperienceSection />
      <TechnicalProficiency />
      <ContactSection />
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080D1A] text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/data_analyst"
          element={<CareerProfile />}
        />

        <Route
          path="/bi_analyst"
          element={<CareerProfile />}
        />

        <Route
          path="/data_scientist"
          element={<CareerProfile />}
        />

        <Route
          path="/python_developer"
          element={<CareerProfile />}
        />
      </Routes>

      <Footer />
    </div>
  );
}