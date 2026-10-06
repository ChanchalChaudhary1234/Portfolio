import React, { useEffect, useRef, useState } from 'react';
import {
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  ArrowUpRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { skills } from '../../data/skills';

const roles = [
  {
    id: 'data-analyst',
    number: '01',
    title: 'Data Analyst',
    short: 'Discovering what the data is saying.',
    description:
      'I transform raw and complex datasets into clean, understandable insights through data cleaning, exploratory analysis, visualization and structured reporting.',
    icon: BarChart3,
    skillNames: [
      'Python',
      'Pandas & NumPy',
      'SQL',
      'Excel',
      'Data Visualization'
    ],
    focus: [
      'Data Cleaning',
      'EDA',
      'Trend Analysis',
      'KPI Reporting'
    ]
  },
  {
    id: 'bi-analyst',
    number: '02',
    title: 'BI Analyst',
    short: 'Turning insights into decisions.',
    description:
      'I build meaningful dashboards and visual reports that connect business questions with measurable KPIs, trends and actionable information.',
    icon: Layers3,
    skillNames: [
      'Power BI',
      'Excel',
      'SQL',
      'Data Visualization'
    ],
    focus: [
      'Dashboards',
      'KPI Analysis',
      'Reporting',
      'Data Visualization'
    ]
  },
  {
    id: 'data-scientist',
    number: '03',
    title: 'Data Scientist',
    short: 'Finding patterns. Building predictions.',
    description:
      'I use Python and machine learning techniques to explore patterns, build predictive workflows and evaluate models using practical analytical methods.',
    icon: BrainCircuit,
    skillNames: [
      'Python',
      'Pandas & NumPy',
      'Machine Learning',
      'Scikit-learn'
    ],
    focus: [
      'Machine Learning',
      'Classification',
      'Prediction',
      'Model Evaluation'
    ]
  },
  {
    id: 'python-developer',
    number: '04',
    title: 'Python Developer',
    short: 'Building practical data-driven applications.',
    description:
      'I develop Python-based applications and backend solutions while combining data processing, APIs, databases and analytical workflows.',
    icon: Code2,
    skillNames: [
      'Python',
      'FastAPI & Django',
      'REST APIs',
      'MySQL & MongoDB',
      'Pandas & NumPy'
    ],
    focus: [
      'API Development',
      'Data Processing',
      'Backend',
      'Application Development'
    ]
  }
];

export default function AboutSection() {
  const { darkMode } = useTheme();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = useRef(null);

  const activeRole = roles[activeIndex];
  const ActiveIcon = activeRole.icon;

  const getRoleSkills = (role) => {
    return role.skillNames
      .map((name) => skills.find((skill) => skill.name === name))
      .filter(Boolean);
  };

  const roleSkills = getRoleSkills(activeRole);

  const technologyGroups = [
    {
      title: 'Analytics',
      icon: BarChart3,
      skills: skills.filter((skill) =>
        ['Python', 'Pandas & NumPy', 'SQL'].includes(skill.name)
      )
    },
    {
      title: 'Business Intelligence',
      icon: Layers3,
      skills: skills.filter((skill) =>
        ['Power BI', 'Excel'].includes(skill.name)
      )
    },
    {
      title: 'Machine Learning',
      icon: BrainCircuit,
      skills: skills.filter((skill) =>
        ['Machine Learning', 'Scikit-learn'].includes(skill.name)
      )
    },
    {
      title: 'Development',
      icon: Code2,
      skills: skills.filter((skill) =>
        ['FastAPI & Django', 'REST APIs'].includes(skill.name)
      )
    },
    {
      title: 'Databases',
      icon: Database,
      skills: skills.filter((skill) =>
        ['SQL', 'MySQL & MongoDB'].includes(skill.name)
      )
    },
    {
      title: 'Visualization',
      icon: BarChart3,
      skills: skills.filter((skill) =>
        ['Power BI', 'Data Visualization'].includes(skill.name)
      )
    }
  ];

  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearTimeout(timer);
  }, [activeIndex, isPaused]);

  useEffect(() => {
    return () => clearTimeout(pauseTimerRef.current);
  }, []);

  const handleRoleClick = (index) => {
    setActiveIndex(index);
    setIsPaused(true);

    clearTimeout(pauseTimerRef.current);

    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 4000);
  };

  const theme = {
    section: darkMode
      ? 'bg-[#08090b] text-white'
      : 'bg-[#f5f0e7] text-slate-900',

    eyebrow: darkMode
      ? 'text-[#f4dfb5]'
      : 'text-[#8d713d]',

    heading: darkMode
      ? 'text-white'
      : 'text-slate-950',

    accentHeading: darkMode
      ? 'text-[#f4dfb5]'
      : 'text-[#8d713d]',

    paragraph: darkMode
      ? 'text-slate-400'
      : 'text-slate-600',

    panel: darkMode
      ? 'border-white/10 bg-[#0d1015]/80 shadow-2xl'
      : 'border-slate-900/10 bg-white/65 shadow-lg',

    muted: darkMode
      ? 'text-slate-400'
      : 'text-slate-500',

    cardTitle: darkMode
      ? 'text-white'
      : 'text-slate-900',

    inactiveRole: darkMode
      ? 'border-transparent text-slate-300 hover:bg-white/[0.06] hover:border-white/10'
      : 'border-transparent text-slate-600 hover:bg-white/85 hover:border-slate-200',

    inactiveIcon: darkMode
      ? 'bg-white/[0.07]'
      : 'bg-slate-200/70',

    divider: darkMode
      ? 'border-white/10'
      : 'border-slate-900/10',

    toolCard: darkMode
      ? 'border-white/10 bg-white/[0.035] hover:border-[#f4dfb5]/40 hover:bg-[#f4dfb5]/[0.06]'
      : 'border-slate-900/10 bg-slate-50/70 hover:border-[#c9ae78]/50 hover:bg-[#f4dfb5]/10',

    toolText: darkMode
      ? 'text-slate-200'
      : 'text-slate-700',

    technologyCard: darkMode
      ? 'border-white/10 bg-[#0d1015]/65 hover:border-[#f4dfb5]/30'
      : 'border-slate-900/10 bg-white/60 hover:border-[#c9ae78]/50',

    technologyTag: darkMode
      ? 'bg-white/[0.05] text-slate-300 border-white/[0.07]'
      : 'bg-slate-100/80 text-slate-600 border-slate-900/10',

    number: darkMode
      ? 'text-white/[0.06]'
      : 'text-slate-200',

    spectrumNumber: darkMode
      ? 'text-slate-400'
      : 'text-slate-400'
  };

  return (
    <section
      id="about"
      className={`relative overflow-hidden py-12 sm:py-14 lg:py-16 transition-colors duration-700 ${theme.section}`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-20 pointer-events-none ${darkMode
            ? 'bg-gradient-to-b from-[#08090b] to-transparent'
            : 'bg-gradient-to-b from-[#f5f0e7] to-transparent'
          }`}
      />

      <div
        className={`absolute top-20 left-[-180px] w-[420px] h-[420px] rounded-full blur-[120px] pointer-events-none transition-all duration-700 ${darkMode
            ? 'bg-[#d9b978]/[0.035]'
            : 'bg-[#d9b978]/[0.11]'
          }`}
      />

      <div
        className={`absolute bottom-[-150px] right-[-180px] w-[420px] h-[420px] rounded-full blur-[120px] pointer-events-none transition-all duration-700 ${darkMode
            ? 'bg-[#d9b978]/[0.025]'
            : 'bg-[#d9b978]/[0.08]'
          }`}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex items-start justify-between mb-7 sm:mb-8">
          <div className="max-w-3xl">
            <div
              className={`flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase ${theme.eyebrow}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              About Me
            </div>

            <h2
              className={`mt-2.5 text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.02] ${theme.heading}`}
            >
              One mind.
              <br />
              <span className={theme.accentHeading}>
                Four ways to create impact.
              </span>
            </h2>

            <p
              className={`mt-3 max-w-2xl text-sm sm:text-base leading-6 ${theme.paragraph}`}
            >
              I&apos;m Chanchal Chaudhary — a technology and analytics
              professional who works across data analysis, business
              intelligence, data science and Python development. I enjoy
              taking a problem from raw data to a clear, practical solution.
            </p>
          </div>

          <div
            className={`hidden sm:block text-5xl lg:text-7xl font-black select-none ${theme.number}`}
          >
            02
          </div>
        </div>

        {/* ROLE AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* ROLE SELECTOR */}
          <div
            className={`lg:col-span-4 rounded-3xl border backdrop-blur-xl p-3 transition-colors duration-700 ${theme.panel}`}
          >
            <div className="px-4 pt-3 pb-3 flex items-center justify-between">
              <p
                className={`text-[10px] uppercase tracking-[0.22em] font-bold ${theme.muted}`}
              >
                My professional spectrum
              </p>

              <div className="flex gap-1.5">
                {roles.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1 rounded-full transition-all duration-500 ${index === activeIndex
                        ? 'w-6 bg-[#c7a45f]'
                        : darkMode
                          ? 'w-1.5 bg-white/20'
                          : 'w-1.5 bg-slate-300'
                      }`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-2">
              {roles.map((role, index) => {
                const Icon = role.icon;
                const isActive = index === activeIndex;

                return (
                  <button
                    key={role.id}
                    onClick={() => handleRoleClick(index)}
                    className={`w-full text-left rounded-2xl p-4 border transition-all duration-500 ${isActive
                        ? 'bg-[#f4dfb5] border-[#f4dfb5] text-slate-950 shadow-lg translate-x-1'
                        : theme.inactiveRole
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isActive
                            ? 'bg-black/10'
                            : theme.inactiveIcon
                          }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-bold">
                            {role.title}
                          </span>

                          <span
                            className={`text-[10px] font-bold ${isActive
                                ? 'text-slate-700'
                                : theme.spectrumNumber
                              }`}
                          >
                            {role.number}
                          </span>
                        </div>

                        <p
                          className={`text-[10px] mt-1 ${isActive
                              ? 'text-slate-700'
                              : theme.muted
                            }`}
                        >
                          {role.short}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE ROLE */}
          <div
            className={`lg:col-span-8 relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-colors duration-700 ${theme.panel}`}
          >
            <div
              className={`absolute top-0 right-0 w-72 h-72 blur-[90px] rounded-full pointer-events-none ${darkMode
                  ? 'bg-[#d9b978]/[0.035]'
                  : 'bg-[#d9b978]/[0.10]'
                }`}
            />

            <div className="relative p-6 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#f4dfb5] text-slate-950 flex items-center justify-center shadow-lg">
                    <ActiveIcon className="w-7 h-7" />
                  </div>

                  <div>
                    <p
                      className={`text-[10px] uppercase tracking-[0.22em] font-bold ${theme.eyebrow}`}
                    >
                      Current perspective
                    </p>

                    <h3
                      className={`text-2xl sm:text-3xl font-extrabold mt-1 ${theme.cardTitle}`}
                    >
                      {activeRole.title}
                    </h3>
                  </div>
                </div>

                <span className={`text-4xl font-black ${theme.number}`}>
                  {activeRole.number}
                </span>
              </div>

              <p
                className={`mt-5 max-w-2xl text-sm sm:text-base leading-7 ${theme.paragraph}`}
              >
                {activeRole.description}
              </p>

              {/* CORE FOCUS */}
              <div className="mt-6">
                <p
                  className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-3 ${theme.muted}`}
                >
                  Core focus
                </p>

                <div className="flex flex-wrap gap-2">
                  {activeRole.focus.map((item) => (
                    <span
                      key={item}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-semibold ${darkMode
                          ? 'bg-[#f4dfb5]/10 border-[#c9ae78]/30 text-[#f4dfb5]'
                          : 'bg-[#f4dfb5]/30 border-[#c9ae78]/40 text-[#80652f]'
                        }`}
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* TECHNOLOGIES FROM SKILLS.JS */}
              <div className={`mt-6 pt-5 border-t ${theme.divider}`}>
                <div className="flex items-center justify-between mb-4">
                  <p
                    className={`text-[10px] uppercase tracking-[0.2em] font-bold ${theme.muted}`}
                  >
                    Technologies in this role
                  </p>

                  <ArrowUpRight
                    className={`w-4 h-4 ${darkMode
                        ? 'text-[#f4dfb5]'
                        : 'text-[#8d713d]'
                      }`}
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {roleSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`px-4 py-3 rounded-xl border transition-all ${theme.toolCard}`}
                    >
                      <span className={`text-xs font-bold ${theme.toolText}`}>
                        {skill.name}
                      </span>

                      <p className={`text-[9px] mt-1 ${theme.muted}`}>
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TECHNOLOGY UNIVERSE */}
        <div className="mt-10">
          <div className="flex items-end justify-between mb-5">
            <div>
              <p
                className={`text-xs font-bold tracking-[0.25em] uppercase ${theme.eyebrow}`}
              >
                Technology Universe
              </p>

              <h3
                className={`text-2xl sm:text-3xl font-extrabold mt-1.5 ${theme.heading}`}
              >
                The tools behind the work.
              </h3>
            </div>

            <p className={`hidden sm:block text-xs ${theme.muted}`}>
              Built around data, intelligence & development
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologyGroups.map((group) => {
              const GroupIcon = group.icon;

              return (
                <div
                  key={group.title}
                  className={`group rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${theme.technologyCard}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#f4dfb5]/20 flex items-center justify-center">
                      <GroupIcon
                        className={`w-4 h-4 ${darkMode
                            ? 'text-[#f4dfb5]'
                            : 'text-[#8d713d]'
                          }`}
                      />
                    </div>

                    <h4 className={`text-sm font-bold ${theme.heading}`}>
                      {group.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`text-[10px] font-semibold px-2.5 py-1 rounded-md border ${theme.technologyTag}`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PHILOSOPHY */}
        <div
          className={`mt-9 rounded-3xl border p-6 sm:p-7 transition-colors duration-700 ${darkMode
              ? 'border-[#f4dfb5]/15 bg-[#f4dfb5]/[0.035]'
              : 'border-[#c9ae78]/30 bg-[#f4dfb5]/20'
            }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p
                className={`text-[10px] uppercase tracking-[0.22em] font-bold ${theme.eyebrow}`}
              >
                The philosophy
              </p>

              <h3
                className={`text-xl sm:text-2xl font-extrabold mt-2 ${theme.heading}`}
              >
                Don&apos;t just process data.
                <br className="sm:hidden" />
                Understand it.
              </h3>
            </div>

            <p
              className={`max-w-xl text-sm leading-6 ${theme.paragraph}`}
            >
              Whether the goal is an insight, a dashboard, a
              predictive model or a Python application, my
              approach stays the same — understand the problem,
              work with the data, and build something useful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}