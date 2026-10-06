import React, { useState } from 'react';
import {
  Sun,
  Moon,
  Menu,
  X,
  BriefcaseBusiness,
  FileText,
  ArrowLeft
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { navLinks } from '../../data/portfolioData';
import ResumeModal from './ResumeModal';

const careerProfileNav = [
  { label: 'Overview', id: 'profile-overview' },
  { label: 'Skills', id: 'profile-skills' },
  { label: 'Projects', id: 'profile-projects' },
  { label: 'Contact', id: 'contact' }
];

const roleIdMap = {
  '/data_analyst': 'data-analyst',
  '/bi_analyst': 'bi-analyst',
  '/data_scientist': 'data-scientist',
  '/python_developer': 'python-developer'
};

const careerPaths = Object.keys(roleIdMap);

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isCareerProfile = careerPaths.includes(location.pathname);
  const currentRoleId = roleIdMap[location.pathname] || null;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    setIsOpen(false);
  };

  const goHome = () => {
    setIsOpen(false);

    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    navigate('/');
  };

  const handleLandingNav = (href) => {
    const id = href.replace('#', '');

    if (location.pathname !== '/') {
      navigate('/');

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      scrollToSection(id);
    }
  };

  const handleProfileNav = (id) => {
    scrollToSection(id);
  };

  const scrollToFreelance = () => {
    if (location.pathname === '/') {
      scrollToSection('freelance');
      return;
    }

    navigate('/');

    setTimeout(() => {
      const element = document.getElementById('freelance');

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);

    setIsOpen(false);
  };

  const currentNavLinks = isCareerProfile
    ? careerProfileNav
    : navLinks;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-xl border-b transition-all duration-500 ${
          darkMode
            ? 'bg-black/75 border-white/10'
            : 'bg-[#f7f3ea]/85 border-slate-900/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          <button
            type="button"
            onClick={goHome}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#f4dfb5] text-slate-950 font-extrabold flex items-center justify-center text-sm shadow-lg group-hover:scale-105 transition-transform">
              CC
            </div>

            <div>
              <div
                className={`text-sm sm:text-base font-extrabold tracking-tight uppercase leading-none ${
                  darkMode
                    ? 'text-white'
                    : 'text-slate-950'
                }`}
              >
                Chanchal Chaudhary
              </div>

              <div
                className={`text-[10px] tracking-widest uppercase font-semibold mt-1 ${
                  darkMode
                    ? 'text-slate-400'
                    : 'text-slate-500'
                }`}
              >
                Data • Python • Intelligence
              </div>
            </div>
          </button>

          <nav
            className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border backdrop-blur-xl ${
              darkMode
                ? 'bg-black/45 border-white/10'
                : 'bg-white/55 border-slate-900/10'
            }`}
          >
            {isCareerProfile ? (
              <>
                {currentNavLinks.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleProfileNav(item.id)}
                    className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                      darkMode
                        ? 'text-slate-300 hover:text-white hover:bg-white/10'
                        : 'text-slate-600 hover:text-slate-950 hover:bg-white/80'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </>
            ) : (
              <>
                {currentNavLinks.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleLandingNav(item.href)}
                    className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                      darkMode
                        ? 'text-slate-300 hover:text-white hover:bg-white/10'
                        : 'text-slate-600 hover:text-slate-950 hover:bg-white/80'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </>
            )}
          </nav>

          <div className="hidden sm:flex items-center gap-3">

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                darkMode
                  ? 'border-white/10 text-slate-300 hover:bg-white/10'
                  : 'border-slate-900/10 text-slate-700 hover:bg-white/70'
              }`}
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-[#f4dfb5]" />
              ) : (
                <Moon className="w-4 h-4 text-[#8d713d]" />
              )}
            </button>

            <button
              type="button"
              onClick={scrollToFreelance}
              className="px-4 py-2.5 rounded-xl border border-[#c9ae78]/40 text-xs font-bold flex items-center gap-2 transition-all hover:-translate-y-0.5 hover:bg-[#f4dfb5]/10 text-slate-700 dark:text-slate-200 cursor-pointer"
            >
              <BriefcaseBusiness className="w-3.5 h-3.5 text-[#8d713d] dark:text-[#f4dfb5]" />
              Freelance
            </button>

            <button
              type="button"
              onClick={() => setIsResumeModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-[#f4dfb5] hover:bg-[#f8e8c9] text-slate-950 text-xs font-bold shadow-lg transition-all flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </button>
          </div>

          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`p-2 cursor-pointer ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-[#f4dfb5]" />
              ) : (
                <Moon className="w-5 h-5 text-[#8d713d]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className={`p-2 cursor-pointer ${
                darkMode ? 'text-slate-200' : 'text-slate-700'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className={`sm:hidden px-4 pt-2 pb-6 backdrop-blur-xl border-b flex flex-col gap-2 ${
              darkMode
                ? 'bg-black/90 border-white/10'
                : 'bg-[#f7f3ea]/95 border-slate-900/10'
            }`}
          >
            {isCareerProfile ? (
              <>
                {currentNavLinks.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleProfileNav(item.id)}
                    className={`px-3 py-2.5 text-sm font-medium rounded-lg text-left transition-all ${
                      darkMode
                        ? 'text-slate-200 hover:bg-white/10 hover:text-white'
                        : 'text-slate-700 hover:bg-white/80 hover:text-slate-950'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={goHome}
                  className={`px-3 py-2.5 text-sm font-medium rounded-lg text-left transition-all flex items-center gap-2 ${
                    darkMode
                      ? 'text-slate-200 hover:bg-white/10 hover:text-white'
                      : 'text-slate-700 hover:bg-white/80 hover:text-slate-950'
                  }`}
                >
                  <ArrowLeft size={16} />
                  Career Tracks
                </button>
              </>
            ) : (
              <>
                {currentNavLinks.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleLandingNav(item.href)}
                    className={`px-3 py-2.5 text-sm font-medium rounded-lg text-left transition-all ${
                      darkMode
                        ? 'text-slate-200 hover:bg-white/10 hover:text-white'
                        : 'text-slate-700 hover:bg-white/80 hover:text-slate-950'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </>
            )}

            <button
              type="button"
              onClick={scrollToFreelance}
              className={`w-full mt-2 py-3 rounded-xl border border-[#c9ae78]/40 text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                darkMode
                  ? 'text-slate-200 hover:bg-white/10'
                  : 'text-slate-800 hover:bg-white/80'
              }`}
            >
              <BriefcaseBusiness className="w-4 h-4 text-[#8d713d] dark:text-[#f4dfb5]" />
              Freelance
            </button>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setIsResumeModalOpen(true);
              }}
              className="w-full py-3 rounded-xl bg-[#f4dfb5] hover:bg-[#f8e8c9] text-slate-950 text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              Resume
            </button>
          </div>
        )}
      </header>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        initialRole={currentRoleId}
      />
    </>
  );
}